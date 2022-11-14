const express = require('express')


const app = express()

app.all('/', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Header', '*')
    const data = {
        name: 'guigu'
    }
    //将对象转化成字符串
    let str = JSON.stringify(data)
    //设置响应体
    response.send(str)
})

app.listen(8080, () => {
    console.log('服务已启动，http://127.0.0.1:8080');
})