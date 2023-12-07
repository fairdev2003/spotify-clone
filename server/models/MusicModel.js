const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
    song_name: {
        type: String,
        required: true
    },
    song_author: {
        type: Array,
    },
    author_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    contributors_ids: {
        type: [mongoose.Schema.ObjectId],
        required: Array
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