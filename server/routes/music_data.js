const express = require('express')
const MusicData = require('../models/MusicModel')
const UserData = require('../models/UserModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const music = await MusicData.find()
        res.status(200).json(music)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.get('/:id', (req, res) => {
    res.send({msg: "Get a single music"})
})
router.post('/', async  (req, res) => {
    const { song_name, author_id, song_link, image_link, contributors_ids, album } = req.body

    try {

        const song_author = await UserData.find({"_id": req.body.author_id})
        const song_contributors = await UserData.find({"_id" : {$in: req.body.contributors_ids}})
        console.log(song_author)

        const music = await MusicData.insertMany({
            song_name: song_name,
            song_author: song_author,
            song_link: song_link,
            image_link: image_link,
            contributors: song_contributors,
            album: album
        })
        res.status(200).send({music})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.delete('/:id', (req, res) => {
    res.send({msg: "Delete a music"})
})
router.patch('/:id', (req, res) => {
    res.send({msg: "Update a music"})
})

module.exports = router

