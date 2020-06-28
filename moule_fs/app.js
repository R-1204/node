const fs = require("fs"); //引入fs模块


// 1.fs.stat 检测是文件还是目录
fs.stat('./html', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`是文件:${data.isFile()}`)
    console.log(`是目录:${data.isDirectory()}`)
})


//2.fs.mkdir 创建文件夹
/*fs.mkdir('./css', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("创建文件夹成功")
})*/



//3.fs.writeFile  创建并写入文件 
/*fs.writeFile('./html/index.html', '你好，node', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('写入成功')
})*/
//如果写入文件存在会替换内容
/*fs.writeFile('./html/index.html', '你好，node,hahahah', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('写入成功')
})*/




//4.fs.appendFile
/*fs.appendFile('./css/base.css', 'body{color:red}', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('如果文件不存在会创建')
})
fs.appendFile('./css/base.css', 'h2{color:red}', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('如果存在会追加内容')
})*/





//5.fs.readFile

/*fs.readFile('./html/index.html', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data) //返回是buffer
    console.log(data.toString())
})*/



//6.fs.readdir 读取目录
/*fs.readdir('./html', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})*/





// 7.fs.rename 重命名   功能：1.重命名  2.移动

/*fs.rename('./css/aa.css', './css/index.css', (err) => {
    if (err) {
        console.log(err)
        return
    } else {
        console.log("重命名成功")
    }
})*/

/*fs.rename('./css/index.css', './html/index.css', (err) => {
    if (err) {
        console.log(err)
        return
    } else {
        console.log("移动成功")
    }
})*/


// 8.fs.rmdir 删除目录

//空文件夹可以直接删除
/*fs.rmdir('./dir', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除目录成功")
})*/

//不是空文件夹
fs.unlink('./dir/dir.html', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除文件成功")
})
fs.rmdir('./dir', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除目录成功")
})