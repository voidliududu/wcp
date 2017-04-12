window.onload = function () {
    function move(direction, obj) {
        if (obj) {
            now = obj.index;
        }
        oIm
            .css('width', 130+'px')
            .css('height', 80+'px')
            .css('marginTop',20+'px')
            .css('opacity', 0.7)
            .css('filter', 'blur('+1+'px)');
        text.css('display','none');
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
        text.eq(now).css('display','block');
        $('.le img').attr('src','img/'+now+'.jpg');
        $('#container').css('backgroundImage',"url('img/"+json[0].now+".jpg')");
        oIm.eq(now)
            .css('width', 150+'px')
            .css('height', 100+'px')
            .css('marginTop',10+'px')
            .css('opacity', 1)
            .css('filter', 'blur('+0+')');
    }
    var oIm = $('#foot ul li img');
    var text = $('.text');
    var now = 0;
    for (var i = 0;i<oIm.length;i++){
        oIm[i].index = i;
        oIm[i].onmouseover = function () {
            move(false,this)
        }
    }
    $('#p').click(function () {
        move('pre');
    });
    $('#n').click(function () {
        move('next');
    })
};

//----------------------------------------大翻页--------------------------------------------------------
$(function () {
    var i = 1;
    function ajax(obj, fun) {
        $(obj).click(function () {
            $(obj).attr('num',i);
            if (obj == '#NEX'){
                i+=5 ;
            }else if(obj == '#PRE'){
                i-=5;
            }
            $.ajax({
                type: 'GET',
                url: '../Cooperate/category.php',
                dataType: 'json',
                data: {
                    'i': i,
                    'm': 4,
                    'id': 7,
                    'num': 5
                },
                success:fun,
                error: function () {
                    alert('啊啊啊啊啊啊，出错了！')
                }
            })
        })
    }
    var sImg = $('.img');
    ajax('#PRE', function (response) {
        // alert('http://localhost'+response[0].cateimg);
        sImg.eq(0).attr('src', 'http://localhost'+response[0].cateimg);
        sImg.eq(1).attr('src', 'http://localhost'+response[1].cateimg);
        sImg.eq(2).attr('src', 'http://localhost'+response[2].cateimg);
        sImg.eq(3).attr('src', 'http://localhost'+response[3].cateimg);
        sImg.eq(4).attr('src', 'http://localhost'+response[4].cateimg);
    });
    ajax('#NEX', function (response) {
        sImg.eq(0).attr('src','http://localhost'+response[0].cateimg);
        sImg.eq(1).attr('src','http://localhost'+response[1].cateimg);
        sImg.eq(2).attr('src','http://localhost'+response[2].cateimg);
        sImg.eq(3).attr('src','http://localhost'+response[3].cateimg);
        sImg.eq(4).attr('src','http://localhost'+response[4].cateimg);
    });
});
