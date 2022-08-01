const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const postCtrl = require('../controllers/post');
const Post = require('../models/Post');



const checkIfUserCanEditOrDeletePost = async (req, res, next) => {
    const post = await  Post.findOne({ _id: req.params.id })

    const currentUser = req.auth.sub
    const canUserEditPost = req.auth.permissions.includes('edit:posts') || currentUser === post.userId

    if (canUserEditPost) {
        return next()
    }
    throw new Error( canUserEditPost,'cant edit')
}

router.put('/:id', checkIfUserCanEditOrDeletePost, multer, postCtrl.updatePost);
router.get('/', postCtrl.getAllPosts);
router.post('/', multer, postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.delete('/:id',checkIfUserCanEditOrDeletePost,postCtrl.deletePost);
router.post('/:id/like', postCtrl.ratePost);

module.exports = router;