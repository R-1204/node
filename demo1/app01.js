var http = require('http'); //引入http模块
//http.createServer创建一个http服务
http.createServer(function (request, response) {
    response.writeHead(200, { //设置响应头
        'Content-Type': 'text/plain'
    });
    response.end('Hello World'); //给页面输出一句话  并结束
}).listen(8081); //端口

console.log('Server running at http://127.0.0.1:8081/');