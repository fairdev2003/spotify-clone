const express = require('express')
const PlaylistData = require('../models/PlaylistModel')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const music = await PlaylistData.find()
        res.status(200).json(music)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/', async  (req, res) => {
    const { playlist_name, playlist_desc, playlist_author, playlist_view, contributors, playlist_songs, playlist_type } = req.body



    try {

        const playlist = await PlaylistData.insertMany({
            playlist_name: playlist_name,
            playlist_desc: playlist_desc,
            playlist_author: playlist_author,
            playlist_view: playlist_view,
            contributors: contributors,
            playlist_songs: playlist_songs,
            playlist_type: playlist_type
        })
        res.status(200).json(playlist)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router