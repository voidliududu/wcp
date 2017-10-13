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
        var id = $(this).attr('id').split('c_r_i_')[1];
        $('#Index').css('display','none');
        $('.l_b_middle-'+id).css('display','block');
        $('#all').css('display','block');
    });


    $('#r_index').on('click',function () {
        $('#Index').css('display','block');
        $('#all').css('display','none');
    });
    $('.nav').on('click',function () {
        var now = $(this).attr('id').split('r_')[1];
        $('.l_b_middle').css({'display':'none'});
        $('.l_b_middle-'+now).css('display','block')
    });
    //----------------------------------点击（出现/关闭）产品页-------------------------------------------
    $('.pic').on('click',function () {
        var name = $(this).parent().attr('class').substring(22,25);
        if(name == "wyy"){
            name = "wdy"
        }else if(name == "gzs"||name == "app"||name == "whd"){
            name = "wcp"
        }
        $('.page-bac').css('display','block');
        $('.'+name+'-page').css("display","block");

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