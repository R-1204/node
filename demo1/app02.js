const http = require("http"); //引入http模块
const url = require("url") //引入url模块
// 2.创建http服务
http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-type": "text/html",
        "charset": "utf-8"
    }) //设置响应头
    res.write("你好 nodejs") //会出现乱码
    res.write("<head><meta charset='UTF-8'></head>")

    if (req.url !== '/favicon.ico') {
        var type = url.parse(req.url, true).query //获取请求url

        res.write(`姓名:${type.name}-----年龄：${type.age}`)
    }

    res.end() //结束响应  必须写
}).listen(8002)