var fs = require('fs');

//返回promise对象形式
function getFileName() {
    return new Promise((resolve, reject) => {
        fs.readFile('./main.json', (err, data) => {

            resolve(data.toString())
        })
    })
}
//同步读取
function getFileNameAsync() {

    var data = fs.readFileSync('./main.json')

    return data

}
module.exports = {
    getFileName,
    getFileNameAsync
}