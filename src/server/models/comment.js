const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    userName: String,
    date: String,
    idPost: String,
    comment: String,
    image: String
});

module.exports = mongoose.model('Comment', commentSchema);