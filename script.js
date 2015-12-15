/**
 * Created by Polina20 on 10.12.2015.
 */

window.onload = function(){

    var pic1 = document.getElementById('pic1');
    var pic2 = document.getElementById('pic2');
    var pic3 = document.getElementById('pic3');



     pic1.onmouseover = function(){
        pic1.height = 310;
        pic1.width = 372;
    }
    pic1.onmouseout = function(){
        pic1.height = 250;
        pic1.width = 300;
    }


    pic2.onmouseover = function(){
        pic2.height = 310;
        pic2.width = 372;
    }
    pic2.onmouseout = function(){
        pic2.height = 250;
        pic2.width = 300;
    }

    pic3.onmouseover = function(){
        pic3.height = 310;
        pic3.width = 372;
    }
    pic3.onmouseout = function(){
        pic3.height = 250;
        pic3.width = 300;
    }



}