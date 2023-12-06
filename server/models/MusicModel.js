const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
    song_name: {
        type: String,
        required: true
    },
    song_author: {
        type: Array,
        required: true
    },
    song_link: {
        type: String,
        required: true
    },
    image_link: {
        type: String,
        required: true
    },
    contributors: {
        type: Array,
        required: true
    },
    album: {
        type: Object,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("MusicData", musicSchema)