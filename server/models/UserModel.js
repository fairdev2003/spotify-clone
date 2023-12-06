const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userData = new Schema({
    nickname: {
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },

    
}, {timestamps: true})

module.exports = mongoose.model("UsersData", userData)