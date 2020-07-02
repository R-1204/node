var common = require('./moudle/common01.js');
var fs = require('fs');

var path = require('path');
var http = require('http');
// http.createServer(function (req, res) {


//     if (req.url != '/favicon.ico') {
//         let url = req.url
//         let extname = path.extname(req.url)
//         fs.readFile('./static' + url, async (err, data) => {

//             let newextname = JSON.parse(await common.getFileName())
//             
//             
//             res.writeHead(200, {
//                 'Content-Type': newextname[extname]
//             });
//             res.end(data);
//         })
//     }

// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

http.createServer(function (req, res) {


    if (req.url != '/favicon.ico') {
        let url = req.url
        let extname = path.extname(req.url)
        fs.readFile('./static' + url, (err, data) => {
            let newextnameAsync = JSON.parse(common.getFileNameAsync())
            res.writeHead(200, {
                'Content-Type': newextnameAsync[extname]
            });
            res.end(data);
        })
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');