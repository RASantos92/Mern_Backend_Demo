const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
    },
    numScoops: {
        type: Number,
        required: [true, '{PATH} is required'],
        min: [1, '{PATH} must be at least {MIN} scoops.'],
        max: 9001
    },
    flavor:{
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
    },
    toppings: [String],
    whipAndCherry: {
        type:Boolean,
        default: false
    }
}, {timestamps:true})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;