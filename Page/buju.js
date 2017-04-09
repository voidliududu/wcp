function getByClass(sClass){
    var aResult=[];
    var aEle=document.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
window.onload = function () {
    function move(direction, obj) {
        if (obj) {
            now = obj.index;
        }
        for (var h = 0;h<oIm.length;h++){
            oIm[h].style.width = 130+'px';
            oIm[h].style.height = 80+'px';
            oIm[h].style.marginTop = 20+'px';
            oIm[h].style.opacity = 0.7;
            oIm[h].style['-khtml-opacity'] = 0.7;
            oIm[h].style['moz-opacity'] = 0.7;
            oIm[h].style.fliter = 'alpha(Opacity=70)';
            oIm[h].style['-webkit-filter']= 'blur(1px)';
            oIm[h].style['-moz-filter']= 'blur(1px)';
            oIm[h].style['-o-filter']= 'blur(1px)';
            oIm[h].style['-ms-filter']= 'blur(1px)';
            oIm[h].style.filter = 'blur(1px)';
            text[h].style.display = 'none';
        }
        if (direction == 'pre'){
        now--;
        if (now<0){
            now = oIm.length-1;
        }
        }else if (direction == 'next'){
            now++;
        if (now >= oIm.length){
            now = 0;
        }
        }
        text[now].style.display = 'block' ;
        bigDiv[now].style.zIndex = nowIndex++;
        back.style.backgroundImage = "url('img/"+now+".jpg')";
        oIm[now].style.width = 150+'px';
        oIm[now].style.height = 100+'px';
        oIm[now].style.marginTop = 10+'px';
        oIm[now].style.opacity = 1;
        oIm[now].style['-khtml-opacity'] = 1;
        oIm[now].style['moz-opacity'] = 1;
        oIm[now].style.fliter = 'alpha(Opacity=100)';
        oIm[now].style['-webkit-filter']= 'blur(0)';
        oIm[now].style['-moz-filter']= 'blur(0)';
        oIm[now].style['-o-filter']= 'blur(0)';
        oIm[now].style['-ms-filter']= 'blur(0)';
        oIm[now].style.filter = 'blur(0)';
    }
    var back = document.getElementById('container');
    var oDiv = document.getElementById('foot');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var oIm = oUl.getElementsByTagName('img');
    var oDiv2 = document.getElementById('central');
    var bigDiv = getByClass('le');
    var text = getByClass('text');
    var bigIm = oDiv2.getElementsByTagName('img');
    var next = document.getElementById('n');
    var pre = document.getElementById('p');
    var nowIndex = 2;
    var now = 0;
    for (var i = 0;i<oIm.length;i++){
        oIm[i].index = i;
        oIm[i].onmouseover = function () {
            move(false,this)
        }
    }
    pre.onclick = function () {
        move('pre');
    };
    next.onclick = function () {
        move('next');
    }
};
