const mongoose = require("mongoose");


const reviewsSchema = new mongoose.Schema({
    userName: String,
    review: String,
});

module.exports = mongoose.model('Reviews', reviewsSchema);