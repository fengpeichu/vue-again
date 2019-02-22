function ajax(url, type, async = true) {
    var xml = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`找不到请求地址：${url}`))
            }
        }
        xhr.open('get', url, async);
        xhr.send(data);
    })
}
const fh = ajax('../mock/data.json', 'get').then((data) => data);
export default fh;