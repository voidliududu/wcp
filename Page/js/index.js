/**
 * Created by hesongxian on 2017/5/3.
 */
$(function(){
    earth = $('#earth');
    var angle = 0;
    setInterval(function(){
        angle += 0.2;
        earth.rotate(angle);
    },40)
});