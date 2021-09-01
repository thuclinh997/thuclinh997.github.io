document.addEventListener("DOMContentLoaded", function () {
    //code...
    //khai bao cac bien su dung
    let ndHienRa = document.getElementsByClassName('dehienthi');
    let nut = document.getElementsByClassName('declick');
    let trangThai = 1;
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function () {
            // console.log(this.classList[1]);
            if (this.classList[1] == 'mau-trang') {
                // console.log('day la truong hop con lai');
                this.classList.remove('mau-trang');
                let hienThi = this.getAttribute('data-hienthi');
                let phanTuHienRa = document.getElementById(hienThi);
                phanTuHienRa.classList.toggle('ra');

            } else {
                for (var j = 0; j < nut.length; j++) {
                    nut[j].classList.remove('mau-trang');
                }
                this.classList.toggle('mau-trang');
                //lay ve data-hienthi
                let hienThi = this.getAttribute('data-hienthi');
                let phanTuHienRa = document.getElementById(hienThi);
                // console.log(phanTuHienRa);
                for (var i = 0; i < ndHienRa.length; i++) {
                    ndHienRa[i].classList.remove('ra');
                }
                phanTuHienRa.classList.toggle('ra');
            }
        }
    }
}, false)