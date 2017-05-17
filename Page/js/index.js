/**
 * Created by hesongxian on 2017/5/3.
 */
$(function(){
    earth = $('#earth');
    var angle = 0;
    setInterval(function(){
        angle += 0.2;
        earth.rotate(angle);
    },40);
});
$(function(){
    var oDiv = document.getElementById('Move');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var oLi = oDiv.getElementsByTagName('li');
    oUl.innerHTML +=oUl.innerHTML;
    oUl.style.height = oLi[0].offsetHeight*oLi.length+'px';
    function move () {
//            if (oUl.offsetTop<-oUl.offsetHeight/2){
//                oUl.style.Top = '0';
//            }
        if (oUl.offsetTop > 0){
            oUl.style.top = -oUl.offsetHeight/2+'px';
        }
        oUl.style.top = oUl.offsetTop+2+'px';
    }
    var timer = setInterval(move,30);
    oDiv.onmouseover = function(){
        clearInterval(timer);
    };
    oDiv.onmouseout = function(){
        timer = setInterval(move,30);
    }
});