/**
 * Created by ������ on 10.12.2015.
 */

window.onload = function() {

    var pic = document.getElementsByClassName('pic');
    var big = document.getElementById('big');

    for (var i = 0; i < 12; i++) {
        changer(pic[i]);
    }
}


function clickClack(e){
    if (e){
        big.src = e.src;
    }
}

function changer(pic){
    pic.onclick = function () {
        clickClack(pic);
    }
}