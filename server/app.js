const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
app = express();
const mongoose = require('mongoose')
app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Api routes
const MusicData = require('./routes/music_data')
app.use('/api/music_data', MusicData)
const PlaylistData = require('./routes/playlist_data')
app.use('/api/playlist_data', PlaylistData)
const UserData = require('./routes/user_data')
app.use('/api/user_data', UserData)

app.use(express.json())

app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename
    res.sendFile(__dirname + `/data/music_data/${filename}`)
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(3001, () => console.log('Example app listening on port 3001!'));
}).catch(error => {
    console.log(error)
})



