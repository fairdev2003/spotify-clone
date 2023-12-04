const express = require('express');
const mysql = require('mysql');
app = express();
const bodyParser = require('body-parser');
const path = require('path');
fs = require('fs');
app = express();
const cors = require('cors');

app.use(cors())

app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename
    res.sendFile(__dirname + `/${filename}`)
})

app.get('/stream', (req, res) => {
    const file = __dirname + '/sus.mp3';
    const stat = fs.statSync(file);
    const total = stat.size;
    if (req.headers.range) {

    }
    fs.exists(file, (exists) => {
        if (exists) {
            const range = req.headers.range;
            const parts = range.replace(/bytes=/, '').split('-');
            const partialStart = parts[0];
            const partialEnd = parts[1];

            const start = parseInt(partialStart, 10);
            const end = partialEnd ? parseInt(partialEnd, 10) : total - 1;
            const chunksize = (end - start) + 1;
            const rstream = fs.createReadStream(file, {start: start, end: end});

            res.writeHead(206, {
                'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
                'Accept-Ranges': 'bytes', 'Content-Length': chunksize,
                'Content-Type': 'audio/mp3'
            });
            rstream.pipe(res);

        } else {
            res.send('Error - 404');
            res.end();
            res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
            fs.createReadStream(path).pipe(res);
        }
    });
});



app.get('/download', (req, res) => {
    const file = __dirname + '/sus.mp3';
    res.download(file);
});

app.listen(3001, () => console.log('Example app listening on port 3000!'));
