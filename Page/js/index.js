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
    if($(This).parent().next().css('background-color') == 'rgba(0, 0, 0, 0)' || $(This).parent().next().css('background-color') == 'rgba(255, 255, 255, 0)')
        $(This).parent().next().animate({
            backgroundColor: 'white'
        }, 200)
}
function cell_pic_out(This){
    if($(This).parent().next().css('background-color') != 'rgba(0, 0, 0, 0)')
        $(This).parent().next().animate({
            backgroundColor:'transparent'
        },100)
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


});

window.onresize = function(){
    if($('#Index').css('display') != 'none'){
        if(document.getElementById("Index").clientHeight > 600 && document.getElementById('Index').clientWidth > 1080){
            console.log((document.getElementById("Index").clientWidth));
            // var box = document.getElementById("c_l2_row2");
            // box.style["z-index"] = 1;
            $('#c_l1_row2').css("font-size",'1.6vmax');
            $('#c_l1_row3').css("font-size",'1.6vmax');
            $('#c_l1_row4').css("font-size",'1.6vmax');
            $('#c_l2_row2').css("font-size",'3.2vmax');
        }
        else{
            $('#c_l1_row2').css("font-size",'20px');
            $('#c_l1_row3').css("font-size",'20px');
            $('#c_l1_row4').css("font-size",'20px');
            $('#c_l2_row2').css("font-size",'40px');
        }
    }
};