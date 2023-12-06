const express = require('express')
const PlaylistData = require('../models/UserModel')

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
    const { nickname, profile_image, verified } = req.body

    try {
        const music = await PlaylistData.insertMany({
            nickname: nickname,
            profile_image: profile_image,
            verified: verified
        })
        res.status(200).json(music)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router