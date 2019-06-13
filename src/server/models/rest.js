const mongoose = require("mongoose");


const restSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    reviews: [String]
});

module.exports = mongoose.model('Rest', restSchema);