const express = require('express');
const router = express.Router();

const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);

const path = require('path');
const BSON = require('bson');


router.get('/root_list', async function (req, res) {
    // root directory of data files
    const rootDirectory = path.join(__dirname, '../data/');
    try {
        // ensure the root directory exists
        if (fs.existsSync(rootDirectory)) {
            // read from the rootdirectory
            let files = await readdir(rootDirectory)
            let data = [];

            files.forEach(function (file) {
                // check if each item in directory list is a directory
                var isDir = fs.statSync(path.join(rootDirectory, file)).isDirectory();

                if (isDir) {
                    // push directories
                    data.push({ name: file, isDir: true, path: path.join(rootDirectory, file) });
                }
                else {
                    // get file extension type
                    var ext = path.extname(file);
                    // push files
                    data.push({ name: file, ext: ext, isDir: false, path: path.join(rootDirectory, file) });
                }
            });
            // send the data back to the client
            res.send(data);
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/navigate_dir', async function (req, res) {
    // get current item which is either a directory or file
    let currentItem = req.body
    // check if item is a directory
    if (currentItem.isDir) {
        try {
            // check if still exists in the filesystem
            if (fs.existsSync(currentItem.path)) {
                // read from the directory
                let files = await readdir(currentItem.path);
                let data = [];

                files.forEach(function (file) {
                    var isDir = fs.statSync(path.join(currentItem.path, file)).isDirectory();

                    if (isDir) {
                        // push directories
                        data.push({ name: file, isDir: true, path: path.join(currentItem.path, file) });
                    }
                    else {
                        // get file extension type
                        var ext = path.extname(file);
                        // push files
                        data.push({ name: file, ext: ext, isDir: false, path: path.join(currentItem.path, file) });
                    }
                });
                res.send(data);
            }
            else {
                // directory no longer exists
                res.send({ 'valid': false });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    else {

    }
});

router.post('/readfile', async function (req, res) {
    // get file from body
    let file = req.body;
    var bson = new BSON();
    // if the file extension is a bson format
    if (file.ext == '.bson') {
        try {
            fs.readFile(file.path, (err, bsonData) => {
                // convert the bson file to a json format on the fly
                var jsonData = bson.deserialize(bsonData);
                res.send({ 'data': jsonData });
            });
        } catch (err) {
            console.log(err);
        }
    }
    else {
        // if the file is any other format encode in utf-8
        try {
            fs.readFile(file.path, 'utf-8', (err, data) => {
                res.send({ 'data': data });
            });
        } catch (err) {
            console.log(err);
        }
    }
});

module.exports = router;