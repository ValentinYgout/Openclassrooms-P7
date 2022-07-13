const Post = require('../models/Post');
 const fs = require('fs');

 //add one post
exports.createPost = (req ,res ) => {
  // // console.log(req.body.file)
  // const postObject = JSON.parse(req.body);
  // // console.log(postObject)
  // delete postObject._id;
  // console.log(req.body)
  // const post = new Post({
  //   ...sauceObject,
  //   imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  // });
  const post = new Post({
    title:req.body.title,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.body.selectedFile}`
  });// dynamic URL depending on server path
  
  // // // save new post in database
  // console.log(post)
  post.save()
    .then(post => {
      const message = 'the post was added';
      console.log(post+'was added')
      res.json({ message, data: post});
    })
    .catch(error => {
      const message = 'the post could not be added, please try again later' ;
      console.log('the post could not be added, please try again later')
      res.status(500).json({message, data:error });
    });
  }

// display all posts


exports.getAllPosts = (req ,res ) => {
  Post.find()

  .then(post => res.status(200).json(post))
  .catch(error => {
      const message = "could not find all posts, please try again later";
      res.status(500).json({message, data:error});
      })
};

//display one post according to its ID
exports.getOnePost = (req ,res ) => {
  Post.findOne({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(error => {
      const message = `this post could not be displayed, please try again`;
      res.status(500).json({ message, data: error });
    })
};

//modify one post
exports.updatePost = (req, res, next) => {
    if (req.file) {
      // if modifying image, delete old one
      Post.findOne({ _id: req.params.id })
        .then(post => {
           if (!post) {
          return res.status(404).json({ message: "post not found !"});
        }
              const filename = post.imageUrl.split('/images/')[1];
                // add new image and update data
                const postObject = {
                  ...JSON.parse(req.body.post),
                  imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                  };
                Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                .then(() => {
                  
                  fs.unlink(`images/${filename}`, (err=>{
                    if (err) console.log(err);
                    else {
                      console.log(`deleted images/${filename}`);
                    }
                  }));
                  res.status(200).json({ message: 'Post was modified!' });
                })
                .catch(error => res.status(400).json({ error }));
         })
        .catch(error => res.status(500).json({ error }));
    } else {
        // no image modification
        const postObject = { ...req.body };
        Post
        .updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post was modified!' }))
        .catch(error => res.status(400).json({ error }));
    }
};

//deletion of a post
exports.deletePost = (req ,res ) => {
    Post.findOne({ _id: req.params.id })
      // find post image to delete it
      .then(post => {
          if (!post) {
            return res.status(404).json({ message: "Post non trouvée !"});
          }
          const filename = post.imageUrl.split('/images/')[1];// split URL to get filename
          fs.unlink(`images/${filename}`, () => {
            Post.deleteOne({ _id: req.params.id })
            .then(post => {
              const message = 'the post was succesfully deleted';
              res.json({ message, data: post});
            })
            .catch(error => res.status(400).json({ error }));
          });
       })
      .catch(error => {
        const message = `The post couldn't be deleted, please try again`
        res.status(500).json({ message, data: error });
      })
};

//rate a post
exports.ratePost = (req, res, ) => {
  if (req.body.like == 0){
    Post.findOne({ _id: req.params.id })
      .then(posts => {
        //if user already liked a post
        if(posts.usersLiked.find(user => user ===req.body.userId)){
          //remove like and remove userId from usersLiked
        Post.updateOne ({_id: req.params.id},{$inc:{likes:-1},$pull:{usersLiked: req.body.userId}})
          .then(() => res.status(200).json({ message: 'rating updated'}))
          .catch(error => {
            const message = `Your rating couldn't be taken into account, please try again`;
            res.status(500).json({ message, data: error });
          })
        } 
        //if user already disliked post
        if(posts.usersDisliked.find(user => user===req.body.userId)){
          //remove dislike and remove userId from usersLiked
        Post.updateOne ({_id: req.params.id}, {$inc:{dislikes:-1},$pull:{usersDisliked:req.body.userId}})
          .then(() => res.status(200).json({ message: 'rating was updated'}))
          .catch(error => {
            const message = `Your rating couldn't be taken into account, please try again`;
            res.status(500).json({ message, data: error });
          })
        }
      })
      .catch(error => {
        const message = `Your rating couldn't be taken into account, please try again`;
        res.status(500).json({ message, data: error });
      })
    };
  
  if (req.body.like == 1){
    Post.updateOne( {_id: req.params.id}, {$inc:{likes:1}, $push:{usersLiked: req.body.userId}})
    //add one Like and  push userId in usersLiked
    .then(() => res.status(200).json({ message: 'rating was taken into account'}))
    .catch(error => {
      const message = `Your rating couldn't be taken into account, please try again`;
      res.status(500).json({ message, data: error });
    })
  }
  
  if (req.body.like == -1){
    Post.updateOne( {_id: req.params.id}, {$inc:{dislikes:1}, $push:{usersDisliked: req.body.userId}})
    //add one Dislike and  push userId in usersLiked
    .then(() => res.status(200).json({ message: 'your rating was taken into account'}))
    .catch(error => {
      const message = `Your rating couldn't be taken into account, please try again`;
      res.status(500).json({ message, data: error });
    })
  }
};


