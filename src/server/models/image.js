const mongoose = require("mongoose");
const userSchema = require("user")

// тут пока ничего не работает

const imageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Image', imageSchema);