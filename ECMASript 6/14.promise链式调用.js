const fs = require('fs')

const p = new Promise((resolve, reject) => {
    fs.readFile('./promise/春晓.md', (err, data) => {
        resolve(data)
    })
})
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./promise/悯农.md', (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./promise/咏鹅.md', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})