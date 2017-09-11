function listColor_change(id){ //5eacd2
    $('#all_product').css('background-color','#425671');
    $('#all_studio').css('background-color','#425671');
    $('#add_studio').css('background-color','#425671');
    $('#add_product').css('background-color','#425671');
    $('#we_movie').css('background-color','#425671');
    $('#we_app').css('background-color','#425671');
    $('#we_cartoon').css('background-color','#425671');
    $('#we_mv').css('background-color','#425671');
    $('#we_magazine').css('background-color','#425671');
    $('#we_activity').css('background-color','#425671');
    //$('#we_vote').css('background-color','#425671');
    $('#'+id).css('background-color','#5eacd2');
}
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
        listColor_change('all_studio');
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
        listColor_change('all_product');
    });

    //微电影
    $('#we_movie').on('click',function () {
        listColor_change('we_movie');
    });

    //app
    $('#we_app').on('click',function () {
        listColor_change('we_app');
    });

    //微漫画
    $('#we_cartoon').on('click',function () {
        listColor_change('we_cartoon');
    });

    //音乐MV
    $('#we_mv').on('click',function () {
        listColor_change('we_mv');
    });

    //微杂志
    $('#we_magazine').on('click',function () {
        listColor_change('we_magazine');
    });

    //微活动
    $('#we_activity').on('click',function () {
        listColor_change('we_activity');
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
        listColor_change('add_studio');


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
        listColor_change('add_product');


    });

    // 修改工作室信息
    $('.stu_change').on('click',function () {
        // 页面显隐
        $('#add_studio_page').css('display','block');

        $('#all_studio_page').css('display','none');
        $('.studio_info_page').css('display','none');

        // 页面小细节显隐
        $('#studio_change_check').css('display','block');
        $('.change_studio').css('display','block');

        $('#studio_add_check').css('display','none');
        $('.add_studio').css('display','none');

        stu_name = $(this).prev().prev().text();
        stu_branch = $(this).prev().text();
        // $.ajax({
        //     url : ''
        //
        // })
    });

    // 修改微产品信息
    $('.pro_change').on('click',function () {
        // 页面显隐
        $('#add_product_page').css('display','block');

        $('#all_product_page').css('display','none');
        $('.product_info_page').css('display','none');

        // 页面小细节显隐
        $('#product_change_check').css('display','block');
        $('.change_product').css('display','block');

        $('#product_add_check').css('display','none');
        $('.add_product').css('display','none');

        pro_name = $(this).prev().prev().prev().text();
        pro_branch = $(this).prev().prev().text();
        pro_type = $(this).prev().text();
    });

    // 查看工作室信息
    $('.stu_detail').on('click',function () {
        // 页面显隐
        $('#studio1_info').css('display','block');

        $('#all_studio_page').css('display','none');
        $('#add_studio_page').css('display','none');


        // 页面小细节显隐
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','none');

    });

    // 查看微产品信息
    $('.pro_detail').on('click',function () {
        // 页面显隐
        $('#product1_info').css('display','block');

        $('#all_product_page').css('display','none');
        $('#add_product_page').css('display','none');


        // 页面小细节显隐
        $('#product_add_check').css('display','none');
        $('#product_change_check').css('display','none');

    })

    // 删除工作室信息
    $('.stu_delete').on('click',function () {
       if(confirm("你确定要删除吗？")){
           if(confirm("删除将会无法复原，你真的要删除吗？")){
                
           }
       }
    });

    // 删除微产品信息
    $('.pro_delete').on('click',function () {
        if(confirm("你确定要删除吗？")){
            if(confirm("删除将会无法复原，你真的要删除吗？")){

            }
        }
    });
});