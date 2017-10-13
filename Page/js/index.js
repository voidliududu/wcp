/**
 * Created by hesongxian on 2017/5/3.
 */
function hov_pic_over(This){
    if($(This).parent().parent().css('background-color') == 'rgba(0, 0, 0, 0)' || $(This).parent().parent().css('background-color') == 'rgba(255, 255, 255, 0)')
        $(This).parent().parent().animate({
                backgroundColor: 'white'
            }, 200)

}
function hov_pic_out(This){
    if($(This).parent().parent().css('background-color') != 'rgba(0, 0, 0, 0)')
        $(This).parent().parent().animate({
            backgroundColor:'transparent'
        },100)
}
function cell_pic_over(This){
    if($(This).parent().next().css('background-color') == 'rgba(0, 0, 0, 0)' || $(This).parent().next().css('background-color') == 'rgba(255, 255, 255, 0)' ||$(This).parent().next().css('background-color') == 'rgb(255, 255, 255)'  )
        $(This).parent().next().animate({
            backgroundColor: 'white'
        }, 200);
    // if($(This).parent().next().children().children('.c_r1_bg_font').css('display') == 'none')
    //     $(This).parent().next().children().children('.c_r1_bg_font').css('display','inline-block').animate({
    //         color:'#13227a'
    //     },200)
}
function cell_pic_out(This){
    if($(This).css('background-color') != 'rgba(0, 0, 0, 0)'){
        $(This).animate({
            backgroundColor:'transparent'
        },100);
    // if($(This).children().children('.c_r1_bg_font').css('display') == 'inline-block')
    //     $(This).children().children('.c_r1_bg_font').animate({
    //         color:'transparent'
    //      },200).css('display','none')
    }
}
function cell_title_over(This){
    if($(This).parent().css('background-color') == 'rgba(0, 0, 0, 0)' || $(This).parent().css('background-color') == 'rgba(255, 255, 255, 0)')
        $(This).parent().animate({
            backgroundColor: 'white'
        }, 200)
}function cell_title_out(This){
    if($(This).parent().css('background-color') != 'rgba(0, 0, 0, 0)')
        $(This).parent().animate({
            backgroundColor:'transparent'
        },100)
}
$(function(){
    var angle=0;
    setInterval(function(){
        angle += 1;
        $('.gear').rotate(angle);
        $('.gear2').rotate(-angle);
    },20);

    $('.c_r_i_pic').on('click',function () {
        if($(this).attr('id')){
            id = ($(this).attr('id').split('c_r_i_')[1]);
            $('#Index').css('display','none');
            $('#all').css('display','block');
            if(id == 'studio')
                url = 'http://WEBROOT/Cooprate/product.php?m=4&t=1&c='+name.id+']&n=16';
            else
                url = 'http://WEBROOT/Cooprate/dept.php?m=4&id=0&num=16'
            $.ajax({
                url : url,
                async : true,
                cache : true,
                success : function(result){
                    str = '';
                    if(id == 'stdio'){
                        for(i=0;i<result.length;i++){
                            str += '<div id="l_b_m_'+result.deptid+'" class="pic">'+
                                '<div class="p_pic">'+
                                '<span style="height:100%;display: inline-block;vertical-align: middle"></span><img onmouseout="hov_pic_out(this)" onmousemove="hov_pic_over(this)" class="p_p_p" src="'+result.brand+'">'+
                                '</div>'+
                                ' </div>'
                        }
                    }
                    else{
                        for(i=0;i<result.length;i++){
                            str += '<div id="l_b_m_'+result.pid+'" class="pic">'+
                                '<div class="p_pic">'+
                                '<span style="height:100%;display: inline-block;vertical-align: middle"></span><img onmouseout="hov_pic_out(this)" onmousemove="hov_pic_over(this)" class="p_p_p" src="'+result.pimg+'">'+
                                '</div>'+
                                ' </div>'
                        }
                    }
                    $('#l_b_middle').html(str);
                }
            })
        }
    });
    $('#r_2').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.wcp-page').css('display','block');
    });
    $('#r_8').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.wcp-page').css('display','block');
    });
    $('#r_5').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.wcp-page').css('display','block');
    });
    $('#r_7').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.wcp-page').css('display','block');
    });
    $('#r_3').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.wdy-page').css('display','block');
    });
    $('#r_4').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.mh-page').css('display','block');
    });
    $('#r_6').on('click',function () {
        $('#Index').css('display','none');
        $('.page-bac').css('display','block');
        $('.zz-page').css('display','block');
    });
    $('.page-close').on('click',function () {
        $('.page-bac').css('display','none');
        $(this).parent().css('display','none');
    })
});

window.onresize = function(){
    if(document.getElementById("all").clientHeight > 600 && document.getElementById('all').clientWidth > 1080) {
        $('body').css('overflow','hidden');
    }
    else{
        $('body').css('overflow','auto');
    }

    if($('#Index').css('display') != 'none'){
        if(document.getElementById("Index").clientHeight > 600 && document.getElementById('Index').clientWidth > 1080){
            $('#c_l1_row2').css("font-size",'1.6vmax');
            $('#c_l1_row3').css("font-size",'1.6vmax');
            $('#c_l1_row4').css("font-size",'1.6vmax');
            $('#c_l2_row2').css("font-size",'3.2vmax');
            $('.c_r1_bg_font').css("font-size",'1.8vmax');
            $('.c_r1_bg_left').css("left",'3vmax');
            $('.c_r1_bg_right').css("right",'3vmax');
            $('.c_r1_bg_bottom').css("bottom",'2.7vmax');
        }
        else{
            $('#c_l1_row2').css("font-size",'20px');
            $('#c_l1_row3').css("font-size",'20px');
            $('#c_l1_row4').css("font-size",'20px');
            $('#c_l2_row2').css("font-size",'40px');
            $('.c_r1_bg_font').css("font-size",'20px');
            $('.c_r1_bg_left').css("left",'30px');
            $('.c_r1_bg_right').css("right",'30px');
            $('.c_r1_bg_bottom').css("bottom",'30px');


        }
    }
};