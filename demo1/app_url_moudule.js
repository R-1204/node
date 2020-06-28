const url = require("url") //引入url模块
var apiUrl = "http://www.baidu.com?name=zhangsan&age=10"
console.log(url.parse(apiUrl, true))
var type = url.parse(apiUrl, true).query
console.log(`姓名:${type.name}-----年龄：${type.age}`)