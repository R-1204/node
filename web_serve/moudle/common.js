function getExtName(extname) {
    switch (extname) {
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        case '.html':
            return 'text/html'
        default:
            return 'text/html'
    }
}
module.exports = {
    getExtName
}