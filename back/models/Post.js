const mongoose = require("mongoose")



const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: [true, "please enter a title"] },
    author: { type: String, required: true},
    imageUrl: { type: String, required: [true, "please upload a picture"] },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
})
// const postSchema = mongoose.Schema({
//     title: { type: String, required: [true, "please enter a title"] },
//     imageUrl: { type: String, required: [false, "please upload a picture"] },
// })

module.exports = mongoose.model("Post", postSchema)