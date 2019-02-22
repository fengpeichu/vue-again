//此处返回ajax方法
let ajax = (url) => {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                resolve(JSON.parse(xhr.responseText))
            }
        }
        xhr.open('get', url, true);
        xhr.send(null);
    });
}
export { ajax };