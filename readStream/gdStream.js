const fs = require('fs');
//管道流  相当于复制大文件
var readStream = fs.createReadStream('./input.txt');
var writeStream = fs.createWriteStream('./write.txt');
readStream.pipe(writeStream)