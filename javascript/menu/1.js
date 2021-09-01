document.addEventListener("DOMContentLoaded", function () {
    //code...
    let nut = document.querySelector('.nut'),
        menuTrai = document.querySelector('.menutrai'),
        den = document.querySelector('.den'),
        noiDungTo = document.querySelector('.noidungto'),
        nut2 = document.querySelector('.nut2'),
        trang = document.querySelector('.mautrang');
    // xu ly su kien click vao nut
    nut.onclick = function () {
        den.classList.add('len');
        noiDungTo.classList.add('dichphai');
    }
    nut2.onclick = function () {
        den.classList.add('len');
        menuTrai.classList.remove('vetrai');
        trang.classList.add('trangquay');
    }
    den.onclick = function () {
        this.classList.remove('len');
        menuTrai.classList.add('vetrai');
        noiDungTo.classList.remove('dichphai');
        trang.classList.remove('trangquay');

    }
}, false)