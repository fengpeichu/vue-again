function ajax(url, async = true, data = "") {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(new Error(`找不到请求地址${url}`))
            }
        }
        xhr.open("get", url, async)
        xhr.send()
    })
}

ajax("./data/data.json").then((data) => { //请求json数据
    new Banner(data) //请求成功渲染页面
}, (mes) => {
    console.log(mes)
})

function Banner(data) {
    this.data = data;
    this.init();

}
Banner.prototype = {
    constructor: Banner,
    init() {
        this.data.map(item => {
            getimg(item.img).then((img) => {
                wrapper.innerHTML += `<div class="swiper-slide" style="background: red">
                        <img src="${item.img}" alt="">
                </div>`
                var mySwiper = new Swiper(".swiper-container")
            }, (mes) => {
                console.log(mes)
            })
        })
    }
}

function getimg(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(`找不到图片`)
        }
        img.src = src
    })
}