$(function () {
    function move(direction, obj) {
        if (obj) {
            NOW = obj.index;
        }
        oIm
            .css('width', 130+'px')
            .css('height', 80+'px')
            .css('marginTop',20+'px')
            .css('opacity', 0.7)
            .css('filter', 'blur('+1+'px)');
        text.css('display','none');
        if (direction == 'pre'){
            NOW--;
        if (NOW<0){
            NOW = oIm.length-1;
        }
        }else if (direction == 'next'){
            NOW++;
        if (NOW >= oIm.length){
            NOW = 0;
        }
        }
        text.eq(NOW).css('display','block');
        $('.le img').attr('src',pic[NOW]);
        $('#container').css('backgroundImage',"url("+pic[NOW]+")");
        oIm.eq(NOW)
            .css('width', 150+'px')
            .css('height', 100+'px')
            .css('marginTop',10+'px')
            .css('opacity', 1)
            .css('filter', 'blur('+0+')');
    }
    var oIm = $('#foot ul li img');
    var text = $('.text');
    var NOW = 0;
    var pic = ["http://localhost/wcp/page/img/0.jpg","http://localhost/wcp/page/img/1.jpg","http://localhost/wcp/page/img/2.jpg","http://localhost/wcp/page/img/3.jpg","http://localhost/wcp/page/img/4.jpg"]
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

//----------------------------------------大翻页--------------------------------------------------------
    var p = 1;
    function ajax(obj, fun) {
        $(obj).click(function () {
            // $(obj).attr('num',p);
            // if (obj == '#NEX'){
            //     p+=5 ;
            // }else if(obj == '#PRE'){
            //     p-=5;
            // }
            $.ajax({
                type: 'GET',
                url: 'http://localhost/wcp/Cooperate/category.php?t='+new Date().getTime(),
                dataType: 'json',
                data: {
                    // 'i': i,
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
        pic = [];
        pic = ['http://localhost'+response[0].cateimg,'http://localhost'+response[1].cateimg,'http://localhost'+response[2].cateimg,'http://localhost'+response[3].cateimg,'http://localhost'+response[4].cateimg]
        sImg.eq(0).attr('src', pic[0]);
        sImg.eq(1).attr('src', pic[1]);
        sImg.eq(2).attr('src', pic[2]);
        sImg.eq(3).attr('src', pic[3]);
        sImg.eq(4).attr('src', pic[4]);
        $('.le img').attr('src',pic[NOW]);
        $('#container').css('backgroundImage','url('+pic[NOW]+')');
    });
    ajax('#NEX', function (response) {
        pic = [];
        pic = ['http://localhost'+response[0].cateimg,'http://localhost'+response[1].cateimg,'http://localhost'+response[2].cateimg,'http://localhost'+response[3].cateimg,'http://localhost'+response[4].cateimg]
        sImg.eq(0).attr('src','http://localhost'+response[0].cateimg);
        sImg.eq(1).attr('src','http://localhost'+response[1].cateimg);
        sImg.eq(2).attr('src','http://localhost'+response[2].cateimg);
        sImg.eq(3).attr('src','http://localhost'+response[3].cateimg);
        sImg.eq(4).attr('src','http://localhost'+response[4].cateimg);
        $('.le img').attr('src',pic[NOW]);
        $('#container').css('backgroundImage','url('+pic[NOW]+')');
    });
});
