import { ajax } from './src/js/ajax.js';
let wrap = document.querySelector('.wrap');
let lis = document.createElement('ul');
let html = '';
ajax.map((item) => {
    html += `<li>${item}</li>`
})
lis.innerHTML = html;
wrap.appendChild(lis);

export default wrap;