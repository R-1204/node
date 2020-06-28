//需求2    再root文件夹中把所有的文件夹放在同一个数组中
const fs = require("fs");

fs.readdir('./root', (err, data) => {
    if (err) {
        return
    } else {
        var newArr = [];
        (function getDir(i) {

            if (i == data.length) {
                console.log(newArr)
                return;
            }
            fs.stat('./root/' + data[i], (errs, stas) => {

                if (stas.isDirectory()) {
                    newArr.push(data[i])
                }
                getDir(i + 1)
            })


        })(0)
    }
})