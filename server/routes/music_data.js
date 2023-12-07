const express = require('express')
const MusicData = require('../models/MusicModel')
const UserData = require('../models/UserModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const music = await MusicData.aggregate([
            {   
                $lookup: {
                    from: "usersdatas",
                    localField: "contributors_ids",
                    foreignField: "_id",
                    as: "contributors"
                },
                
            },{
                $lookup: {
                    from: "usersdatas",
                    localField: "author_id",
                    foreignField: "_id",
                    as: "song_author"
                }
            }
        ])
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
        const music = await MusicData.insertMany({
            song_name: song_name,
            author_id: author_id,
            song_link: song_link,
            image_link: image_link,
            contributors_ids: contributors_ids,
            album: album
        })
        res.status(200).send(music)
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

