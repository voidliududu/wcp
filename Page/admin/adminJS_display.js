$(function () {

    // 全部工作室
    $('#all-studio').on('click',function () {
         $('#admin-product').css('display','none');
        $('#admin-studio').css('display','block');
        $('#studio-info').css('display','none');
         $('#studio-list').css('display','block');
         $('#studio-add').css('display','none');
    });
    // 添加工作室
    $('#add-studio').click(function () {
        $('#admin-product').css('display','none');
        $('#admin-studio').css('display','block');
        $('.right-first-list').css('display','none');
        $('#studio-add').css('display','block');
        $('#studio-info').css('display','none');
        $('#studio-add-check').css('display','block');
        $('#studio-change-check').css('display','none');
   });
   // 修改工作室信息
    $('.studio-change').click(function () {
        $('.right-first-list').css('display','none');
        $('#studio-add').css('display','block');
        $('#studio-info').css('display','none');
        $('#studio-add-check').css('display','none');
        $('#studio-change-check').css('display','block');
   });
   // 查看工作室相信信息
    $('#stdio1').click(function () {   // 这个id是从“工作室ID”中获得的，这个stdio1是个变量，现在先写成常量
        $('#studio-list').css('display','none');
        $('#studio-info').css('display','block');
    });

    //查看所有产品
    $('#all-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看微电影
    $('#movie-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看app
    $('#app-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看微活动
    $('#activity-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看音乐mv
    $('#music-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看微漫画
    $('#cartoon-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-add').css('display','none');
        $('#product-info').css('display','none');
    });
    //查看微杂志
    $('#magazine-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-list').css('display','block');
        $('#product-info').css('display','none');
        $('#product-add').css('display','none');

    });
    //查看产品详细信息
    $('.product-change').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-info').css('display','block');
        $('#product-add').css('display','none');
        $('#product-list').css('display','none');
    });
    //添加产品
    $('#add-product').click(function () {
        $('#admin-product').css('display','block');
        $('#admin-studio').css('display','none');
        $('#product-add').css('display','block');
        $('#product-info').css('display','none');
        $('#product-list').css('display','none');
    });
});

