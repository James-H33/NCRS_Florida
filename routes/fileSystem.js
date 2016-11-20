const express   = require('express');
const router    = express.Router();
const fs        = require('fs');

router.get('/file/download', function(req, res) {
    console.log(res);
});

router.post('/file/upload', function(req, res) {
    var incomingData = req.body;
    console.log(incomingData);

    writeFiles(incomingData);
    res.send('Upload was a success!')
});

module.exports = router;

// Write Files to the System.
function writeFiles(data) {
    // var albumName = 'temp/' + data.albumName;
    // var contents = data.contents;

    fs.unlink('temp/*', function() {
        console.log('Done!');
    });

    // fs.writeFile(albumName, contents, function(err) {
    //     if(err) {
    //         console.log(err);
    //     }
    //
    //     console.log('File Created.');
    // });

}
