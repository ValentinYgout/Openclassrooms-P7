const mongoose = require("mongoose")



const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    Title: { type: String, required: [true, "please enter a title"] },
    imageUrl: { type: String, required: [true, "please upload a picture"] },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
})

module.exports = mongoose.model("Post", postSchema)