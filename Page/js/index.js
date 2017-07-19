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
$(function(){


});