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
    playlist_image_link : {
        type: String,
    },
    playlist_author_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    playlist_author: {
        type: Array,
        required: true
    },
    playlist_view_ids: {
        type: [mongoose.Schema.ObjectId],
    },
    playlist_view: {
        type: Array,
    },
    contributors_ids: {
        type: [mongoose.Schema.ObjectId],
    },
    contributors: {
        type: Array,
    },
    playlist_songs_ids: {
        type: [mongoose.Schema.ObjectId],
    },
    playlist_songs: {
        type: Array,
    },
    playlist_type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("PlaylistData", PlaylistData)