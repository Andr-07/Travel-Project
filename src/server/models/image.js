const mongoose = require("mongoose");
const userSchema = require("user")


const imageSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Image', imageSchema);