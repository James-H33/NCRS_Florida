const express      = require('express');
const router       = express.Router();
const fs           = require('fs');
const formidable   = require('formidable');
const path         = require('path');

router.get('/file/download', function(req, res) {
    console.log(res);
});

router.post('/file/upload', function(req, res) {
    var newPath = null;
    // create an incoming form object
    var form = new formidable.IncomingForm();
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = 'temp/images';

    form.on('field', function(name, value) {
        console.log(value);
        if(value.length > 0) {
            var dirPath = 'temp/' + value;
            var results = createFolder(dirPath);
            results.then(function(res) {
                newPath = res;
            }, function(err) {
                console.log(err);
            })
        }
    });

    // When File has finished uploading rename it.
    form.on('file', function(field, file) {
        console.log(field);
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

    // Parse Data
    form.parse(req);

    console.log(form);

    // once all the files have been uploaded, send a response to the client
     form.on('end', function() {
         res.send('Upload was a success!');
         transferFiles(newPath);
     });

});

// router.delete('/file/delete', function(req, res) {
//     var incomingReq = JSON.parse(req.body.data);
//     console.log(incomingReq);
//     res.send('Delete Route Found.');
// });

module.exports = router;

function transferFiles(dirPath) {
    var tempPath = 'temp/images';
    var destPath = dirPath + '/';
    var results = readDir(tempPath);

    results
        .then(function(res) {
            var filesArr = res;

            for (var i = 0; i < filesArr.length; i++) {
                var currentPath = tempPath + '/' + filesArr[i];
                var currentName = filesArr[i];
                fs.readFile(currentPath, function(err, data) {
                    console.log('Got that path yo!');
                    console.log(destPath + currentName);
                    var name = destPath + currentName;

                    fs.writeFile(name, data, function(err) {
                        if(err) {
                            console.log(err);
                        }

                        console.log('File Created');
                    });
                });
            }
        }, function(err) {
            console.log(err);
        });
}

// Write Files to the System.
function handleUploaded(data) {
    var albumName   = 'temp/' + data.albumName;
    var contents    = data.files;

    if(albumName !== undefined && albumName !== '') {
        var results = createFolder(albumName);

        results.then(function(res) {
            console.log(res);
            addFiles(res, contents);
        }, function(err) {
            console.log(err);
        });
    }

    // fileName/folderName, content, callback
    // fs.writeFile(albumName, contents, function(err) {
    //     if(err) {
    //         console.log(err);
    //     }
    //
    //     console.log('File Created.');
    // });

}

function addFiles(dirName, files) {
    console.log(dirName);
    console.log(files);

    var results = readDir(dirName);

    results
        .then(function(res) {
            console.log(res);

            // Grab
            if(res.length > 0) {
                var lastImage   = res.pop();
                var tempArr     = lastImage.split('_');
                var temp        = tempArr[1].split('.')
                var count       = parseInt(temp[0]);

                console.log(lastImage);
                console.log(count);

                for (var i = 0; i < files.length; i++) {
                    var file        = files[i].name;
                    var fileName    = file.split('.');
                    var newFileName = 'image_'+ (i + count) + '.' + fileName[1];
                    var newPath = dirName + '/' + newFileName;
                    fs.writeFile(newPath, file.contents, function(err) {
                        if(err) {
                            console.log(err);
                        }

                        console.log('File Created.');
                    });
                }
            } else {
                for (var i = 0; i < files.length; i++) {
                    var file        = files[i].name;
                    var fileName    = file.split('.');
                    var newFileName = 'image_' + i + '.' + fileName[1];
                    var newPath = dirName + '/' + newFileName;
                    fs.writeFile(newPath, file.contents, function(err) {
                        if(err) {
                            console.log(err);
                        }

                        console.log('File Created.');
                    });
                }
            }
        }, function(err) {
            console.log(err);
        });

}

function createFolder(dirName) {
    var path = dirName;

    return new Promise(function(resolve, reject) {
        fs.stat(path, function(err, stats) {
            if(err && err.code === 'ENOENT') {
                fs.mkdir(path, function(err) {
                    if(err) {
                        reject(err);
                    }

                    console.log(path + ' directory created.');
                    resolve(path);
                });
            } else {
                resolve(path);
            }
        });
    });
}

function readDir(path) {
    return new Promise(function(resolve, reject){
        fs.readdir(path, function(err, files) {
            if(err) {
                reject(err);
            }

            resolve(files);
        });
    });
}

// Delete Files to the System.
function deleteFiles(data) {
    var filePath = 'Hello';

}
