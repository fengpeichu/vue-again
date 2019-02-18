function post(url, async = true, data = '') {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`找不到请求地址：${url}`))
            }
        }
        xhr.open('post', url, async);
        xhr.serRequestHeader('content-type', 'json');
        xhr.send(data);
    })
} //post请求方式