const fs = require('fs');
var stream = fs.createReadStream('./input.txt'); //创建一个读取流
var num = 0;
var str = ''

stream.on('data', (data) => {
    str += data
    num++
})

stream.on('end', () => {
    console.log(str)
    console.log(num)
})