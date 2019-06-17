const mongoose = require("mongoose");


const tourSchema = new mongoose.Schema({
    userName: String,
    tourName: String,
    description: String,
    allMarks: [Object],
    allLines: [Array]
});

module.exports = mongoose.model('Tour', tourSchema);