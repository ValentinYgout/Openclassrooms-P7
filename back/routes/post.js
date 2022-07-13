const express = require('express');
const router = express.Router();

// protection par authentification
const auth = require('../middlewares/auth');

// gestion des fichiers images
const multer = require('../middlewares/multer-config')

const postCtrl = require('../controllers/post');

router.get('/', /*auth,*/ postCtrl.getAllPosts);
router.post('/', /*auth,*/ multer, postCtrl.createPost);
router.put('/:id',/*auth,*/  multer, postCtrl.updatePost);
router.get('/:id',/*auth,*/  postCtrl.getOnePost);
router.delete('/:id',/*auth,*/ postCtrl.deletePost);
router.post('/:id/like', /*auth,*/  postCtrl.ratePost);

module.exports = router;