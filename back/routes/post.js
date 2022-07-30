const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const postCtrl = require('../controllers/post');
const Post = require('../models/Post');



const checkIfUserCanEditOrDeletePost = async (req, res, next) => {
    console.log('!!')
    console.log(req.auth, 'AUTh')

  
    // const post = await modelName.getPost()
    const post = await  Post.findOne({ _id: req.params.id })

    const currentUser = req.auth.sub
    const canUserEditPost = req.auth.permissions.includes('edit:posts') || currentUser === post.userId
    
    if (canUserEditPost) {
        console.log(canUserEditPost,'can post because ','admin?',req.auth.permissions.includes('edit:posts'), currentUser,post.userId ,'same id?',currentUser === post.userId)
        return next()
    }

    throw new Error( canUserEditPost,'cant edit')
    
}
router.put('/:id', checkIfUserCanEditOrDeletePost, multer, postCtrl.updatePost);
router.get('/', postCtrl.getAllPosts);
router.post('/', multer, postCtrl.createPost);
// router.put('/:id',  multer, postCtrl.updatePost);
router.get('/:id', postCtrl.getOnePost);
router.delete('/:id',checkIfUserCanEditOrDeletePost,postCtrl.deletePost);
router.post('/:id/like', postCtrl.ratePost);

module.exports = router;