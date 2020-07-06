const cheerio = require("cheerio")
const axios = require('axios')
const fs = require('fs')
const path = require('path')
var url = "https://www.doutula.com/"
axios.get(url).then((res => {

    var $ = cheerio.load(res.data)
    $('#home .col-sm-9>a').each((i, ele) => {
        let title = $(ele).find('.random_title').text()
        let reg = /(.*?)\d/igs
        title = reg.exec(title)[1]
        fs.mkdir('./img/' + title, (err) => {
            if (err) {
                console.log(err)
            }
        })
        parsePage($(ele).attr('href'), title)
    })
}))

function parsePage(url, title) {
    axios.get(url).then((res => {

        var $ = cheerio.load(res.data)
        $('.artile_des img').each((i, ele) => {

            let imgurl = $(ele).attr('src')
            let extname = path.extname(imgurl)
            let content = fs.createWriteStream(`./img/${title}/${title}-${i}${extname}`)
            axios.get(imgurl, {
                responseType: 'stream'
            }).then((res) => {
                res.data.pipe(content)
            })

        })
    }))
}