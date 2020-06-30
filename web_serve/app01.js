//需求：创建web服务  浏览器地址栏输入http://..../index.html  访问static/index.html

var http = require('http');
var fs = require('fs');
var path = require('path');
var common = require('./moudle/common.js')

//创建服务
http.createServer(function (request, response) {
    //1.获取浏览器url
    var url = request.url
    if (url != '/favicon.ico') {
        //2.读取对应html文件
        var extnames = common.getExtName(path.extname(url))
        fs.readFile('./static' + url, (err, data) => {
            if (err) {
                console.log(err)
                return
            } else {

                response.writeHead(200, {
                    'Content-Type': '' + extnames + ';utf-8'
                });
                response.end(data);
            }
        })
    }


}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');