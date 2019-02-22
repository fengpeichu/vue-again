import '../css/style.css';
let lis1 = [...document.querySelectorAll('.first>li')];
let lis2 = [...document.querySelectorAll('.next>li')];
for (let i = 0; i < lis1.length; i++) {
    lis1[i].index = i;
    lis1[i].onclick = function() {
        lis2.map(function(item) {
            item.classList.remove('active');
        })
        lis2[this.index].classList.add('active');
    }
}