const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: ""
    },
    email: {
        type: String,
        required: false,
        default: ""
    },
    password: {
        type: String,
        required: false,
        default: ""
    },

}, { timestamps: true, });

const Person= mongoose.model("Person", noteSchema);

module.exports =Person ;