let {
    readFile,
    writeFileSync
} = require('fs');
let path = require('path')

function getPromise(url) {
    return new Promise((resolve, reject) => {
        readFile(path.join(__dirname, url), 'utf8', (err, res) => {
            if (err) {
                return
            }
            resolve(res)
        })
    })
}

let del = async function() {
    let a = await getPromise('css/style.css')
    let b = await getPromise('css/common.css')
    return a + b
}

del().then(res => {
    writeFileSync('css/all.css', res)
})