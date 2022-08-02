const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const postCtrl = require('../controllers/post');
const auth= require ('../middlewares/auth');
const Post = require('../models/Post');
const User = require('../models/User');



const checkIfUserCanEditOrDeletePost = async (req, res, next) => {
    const post = await  Post.findOne({ _id: req.params.id })
    const currentUser = await User.findOne({_id: res.locals.userId})
    const currentUserRole = currentUser.roles
    console.log(currentUserRole== 'Admin'?true:false)

    const canUserEditPost = currentUserRole == 'Admin' || currentUser.userId === post.userId?true:false

    if (canUserEditPost) {
        return next()
    }
    throw new Error( canUserEditPost,'cant edit')
}

router.put('/:id',auth, checkIfUserCanEditOrDeletePost, multer, postCtrl.updatePost);
router.get('/', postCtrl.getAllPosts);
router.post('/', multer, postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.delete('/:id',auth,checkIfUserCanEditOrDeletePost,postCtrl.deletePost);
router.post('/:id/like', postCtrl.ratePost);

module.exports = router;