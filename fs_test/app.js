//需求1    判断当前目录是否有upload文件夹 没有创建upload文件夹

const fs = require("fs");

function markdir() {
    fs.mkdir('./upload', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("创建成功")
    })
}
fs.stat("./upload", (err, data) => {
    if (err) {
        markdir()
        return
    } else {

        if (data.isDirectory()) { //判断upload文件夹不存在情况
            console.log('upload目录已存在')
        }

        if (data.isFile()) { //如果是upload文件
            fs.unlink('./upload', (err) => {
                if (err) {
                    return
                } else {
                    console.log("删除成功")
                }
            })
            markdir()
        }
    }
})