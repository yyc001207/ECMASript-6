//Node.js 内置的 util 模块有一个 promisify() 方法，
//该方法将基于回调的函数转换为基于 Promise 的函数。
//就是将回调函数转换为promise函数
const fs = require('fs')
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

//async与awiat
async function main() {
    //读取文件内容
    //只要有一个出错，需要包裹try...catch
    try {
        let data1 = await mineReadFile('./promise/春晓.md')
        let data2 = await mineReadFile('./promise/悯农.md')
        let data3 = await mineReadFile('./promise/咏鹅.md')
        console.log(data1 + data2 + data3);
    } catch (error) {
        console.log(error);
    }
}
main()