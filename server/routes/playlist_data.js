const express = require('express')
const PlaylistData = require('../models/PlaylistModel')
const { default: mongoose } = require('mongoose')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const music = await PlaylistData.aggregate([
            {   
                $lookup: {
                    from: "musicdatas",
                    localField: "playlist_songs_ids",
                    foreignField: "_id",
                    as: "playlist_songs"
                },
            },
            {
                $lookup: {
                    from: "usersdatas",
                    localField: "playlist_author_id",
                    foreignField: "_id",
                    as: "playlist_author"
                }
            },
            {
                $lookup: {
                    from: "usersdatas",
                    localField: "playlist_view_ids",
                    foreignField: "_id",
                    as: "playlist_view"
                }
            },
            {
                $lookup: {
                    from: "usersdatas",
                    localField: "contributors_ids",
                    foreignField: "_id",
                    as: "contributors"
                }
            }
        ])
        res.status(200).json(music)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/', async  (req, res) => {
    const { playlist_name, playlist_desc, playlist_author_id, playlist_image_link,  playlist_view_ids, contributors_ids, playlist_songs_ids, playlist_type } = req.body

    try {
        const playlist = await PlaylistData.insertMany({
            playlist_name: playlist_name,
            playlist_desc: playlist_desc,
            playlist_image_link: playlist_image_link,
            playlist_author_id: playlist_author_id,
            playlist_view_ids: playlist_view_ids,
            contributors_ids: contributors_ids,
            playlist_songs_ids: playlist_songs_ids,
            playlist_type: playlist_type
        })
        res.status(200).json(playlist)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post("/get_user_playlists", async (req, res) => {

    try {
        const response = await PlaylistData.aggregate( 
            [
                    {
                        $match: { $or: [
                            {"playlist_author_id": new mongoose.Types.ObjectId(req.body[0].user_id)},
                            {"playlist_view_ids": new mongoose.Types.ObjectId(req.body[0].user_id)},
                            {"contributors": new mongoose.Types.ObjectId(req.body[0].user_id)}
                        ]}},
                  {   
                    $lookup: {
                        from: "musicdatas",
                        localField: "playlist_songs_ids",
                        foreignField: "_id",
                        pipeline: [{   
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
                        }],
                        as: "playlist_songs"
                    },
                },
                {
                    $lookup: {
                        from: "usersdatas",
                        localField: "playlist_author_id",
                        foreignField: "_id",
                        as: "playlist_author"
                    }
                },
                {
                    $lookup: {
                        from: "usersdatas",
                        localField: "playlist_view_ids",
                        foreignField: "_id",
                        as: "playlist_view"
                    }
                },
                {
                    $lookup: {
                        from: "usersdatas",
                        localField: "contributors_ids",
                        foreignField: "_id",
                        as: "contributors"
                    }
                }  
            ])
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router