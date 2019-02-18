// let {
//     readFile,
//     writeFileSync
// } = require('fs');
// let path = require('path')

// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         readFile(path.join(__dirname, url), 'utf8', (err, res) => {
//             if (err) {
//                 return
//             }
//             // resolve(res)
//             console.log(res);
//         })
//     })
// }
// let del = async function() {
//         let a = await getPromise('./css/style.css')
//         let b = await getPromise('./css/style.css')
//         return a + b;
//     }
//     // console.log(del());
// del().then((res) => {
//     writeFileSync('css/all.css', res);
// })

//文件合并
// let { readFile, writeFileSync } = require('fs');
// let path = require('path');

// function getFile(url) {
//     return new Promise((resolve, reject) => {
//         readFile(path.join(__dirname, url), 'utf8', (err, res) => {
//             if (err) {
//                 return
//             }
//             resolve(res)
//         })
//     })
// };
// let del = async function() {
//     let a = await getFile('css/style.css');
//     let b = await getFile('css/common.css');
//     return a + b;
// };
// console.log(del())
// del().then(res => {
//     writeFileSync('css/all.css', res)
// });