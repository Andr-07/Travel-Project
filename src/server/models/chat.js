const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    sender: String,
    messages:  String
});

module.exports = mongoose.model('Chat', chatSchema);