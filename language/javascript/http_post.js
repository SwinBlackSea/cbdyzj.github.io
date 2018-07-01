var http = require('http')

http.request({
    host: 'localhost',
    port: '80',
    path: '/endpoint',
    method: 'post'
}, res => {
    var content = ''
    res.on('data', chunk => content += chunk)
    res.on('error', error => console.error(error))
    res.on('end', () => console.log(content))
}).end()