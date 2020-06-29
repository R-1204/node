//需求2    再root文件夹中把所有的文件夹放在同一个数组中
const fs = require("fs");
const {
    resolve
} = require("path");

async function isFile(path) { //定义一个函数判断资源是目录还是文件
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (data.isDirectory()) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        })
    })
}

function rootAllDir() {
    var dirArr = []
    fs.readdir('./root', async (err, data) => {
        if (err) {
            console.log(err)
        } else {
            for (var i = 0; i < data.length; i++) {
                if (await isFile('./root/' + data[i])) {
                    dirArr.push(data[i])
                }
            }
            console.log(dirArr)
        }
    })
}
rootAllDir()