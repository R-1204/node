const fs = require('fs');
var writeStream = fs.createWriteStream('./write.txt');
var str = ''
for (var i = 0; i < 1000; i++) {
    str += '写入文件流'
}
writeStream.write(str)

writeStream.end() //不写  触发不了.on方法
writeStream.on('finish', () => {
    console.log('写入完成')
})