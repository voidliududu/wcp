
// 功能切换
$(function () {
    // 所有工作室
    $('#all_studio').on('click',function () {
        // 页面显隐
        $('#index_page').css('display','none');

        $('#all_studio_page').css('display','block');
        $('#all_product_page').css('display','none');

        $('#add_studio_page').css('display','none');
        $('#add_product_page').css('display','none');

        $('.product_info_page').css('display','none');
        $('.studio_info_page').css('display','none');



        // 列表选项背景色
        $('#index').removeClass('active');
        $('#all_studio').css('background-color','#5eacd2');
        $('#add_studio').css('background-color','#425671');
        $('#all_product').css('background-color','#425671');
        $('#add_product').css('background-color','#425671');


    });

    // 所有微产品
    $('#all_product').on('click',function () {
        // 页面显隐
        $('#index_page').css('display','none');

        $('#all_product_page').css('display','block');
        $('#all_studio_page').css('display','none');

        $('#add_studio_page').css('display','none');
        $('#add_product_page').css('display','none');

        $('.product_info_page').css('display','none');
        $('.studio_info_page').css('display','none');

        // 列表选项背景色
        $('#func_intro').removeClass('active');
        $('#all_product').css('background-color','#5eacd2');
        $('#all_studio').css('background-color','#425671');
        $('#add_studio').css('background-color','#425671');
        $('#add_product').css('background-color','#425671');

    });

    // 添加工作室
    $('#add_studio').on('click',function () {
        // 页面显隐
        $('#index_page').css('display','none');

        $('#add_studio_page').css('display','block');
        $('#add_product_page').css('display','none');

        $('#all_studio_page').css('display','none');
        $('#all_product_page').css('display','none');

        $('.studio_info_page').css('display','none');
        $('.product_info_page').css('display','none');

        // 页面小细节显隐
        $('#studio_add_check').css('display','block');
        $('.add_studio').css('display','block');

        $('#studio_change_check').css('display','none');
        $('.change_studio').css('display','none');

        // 列表选项背景色
        $('#func_intro').removeClass('active');
        $('#add_studio').css('background-color','#5eacd2');
        $('#all_studio').css('background-color','#425671');
        $('#all_product').css('background-color','#425671');
        $('#add_product').css('background-color','#425671');

    });

    // 添加微产品
    $('#add_product').on('click',function () {
        // 页面显隐
        $('#index_page').css('display','none');

        $('#add_product_page').css('display','block');
        $('#add_studio_page').css('display','none');

        $('#all_studio_page').css('display','none');
        $('#all_product_page').css('display','none');

        $('.studio_info_page').css('display','none');
        $('.product_info_page').css('display','none');

        // 页面小细节显隐
        $('#product_add_check').css('display','block');
        $('.add_product').css('display','block');

        $('#product_change_check').css('display','none');
        $('.change_product').css('display','none');

        // 列表选项背景色
        $('#func_intro').removeClass('active');
        $('#add_product').css('background-color','#5eacd2');
        $('#add_studio').css('background-color','#425671');
        $('#all_studio').css('background-color','#425671');
        $('#all_product').css('background-color','#425671');

    });

    // 修改工作室信息
    $('#change1').on('click',function () {
        // 页面显隐
        $('#add_studio_page').css('display','block');

        $('#all_studio_page').css('display','none');
        $('.studio_info_page').css('display','none');

        // 页面小细节显隐
        $('#studio_change_check').css('display','block');
        $('.change_studio').css('display','block');

        $('#studio_add_check').css('display','none');
        $('.add_studio').css('display','none');

    });

    // 修改微产品信息
    $('#pro_change1').on('click',function () {
        // 页面显隐
        $('#add_product_page').css('display','block');

        $('#all_product_page').css('display','none');
        $('.product_info_page').css('display','none');

        // 页面小细节显隐
        $('#product_change_check').css('display','block');
        $('.change_product').css('display','block');

        $('#product_add_check').css('display','none');
        $('.add_product').css('display','none');
    });

    // 查看工作室信息
    $('#studio1').on('click',function () {
        // 页面显隐
        $('#studio1_info').css('display','block');

        $('#all_studio_page').css('display','none');
        $('#add_studio_page').css('display','none');


        // 页面小细节显隐
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','none');

    });

    // 查看微产品信息
    $('#product1').on('click',function () {
        // 页面显隐
        $('#product1_info').css('display','block');

        $('#all_product_page').css('display','none');
        $('#add_product_page').css('display','none');


        // 页面小细节显隐
        $('#product_add_check').css('display','none');
        $('#product_change_check').css('display','none');

    })
});