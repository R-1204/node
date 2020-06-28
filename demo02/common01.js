const http = require("http"); //引入http模块
const tool = require("./moudle/tools.js")
console.log(tool)
// 2.创建http服务
http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-type": "text/html",
        "charset": "utf-8"
    }) //设置响应头
    res.write("你好 nodejs<br>") //会出现乱码
    res.write("<head><meta charset='UTF-8'></head>")
    res.write(tool.formatApi('/user/list'))
    res.end() //结束响应  必须写
}).listen(8002)