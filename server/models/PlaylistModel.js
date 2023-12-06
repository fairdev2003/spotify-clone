const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PlaylistData = new Schema({
    playlist_name: {
        type: String,
        required: true
    },
    playlist_desc: {
        type: String
    },
    playlist_author: {
        type: Object,
        required: true
    },
    playlist_view: {
        type: Array,
        required: true
    },
    contributors: {
        type: Array,
        required: true
    },
    playlist_songs: {
        type: Array,
        required: true
    },
    playlist_type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("PlaylistData", PlaylistData)