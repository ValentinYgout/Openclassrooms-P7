const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const postCtrl = require('../controllers/post');

router.get('/', postCtrl.getAllPosts);
router.post('/', multer, postCtrl.createPost);
router.put('/:id',  multer, postCtrl.updatePost);
router.get('/:id', postCtrl.getOnePost);
router.delete('/:id',postCtrl.deletePost);
router.post('/:id/like', postCtrl.ratePost);

module.exports = router;