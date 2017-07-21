$(function () {
    // 所有工作室
    $('#all_studio').on('click',function () {
        $('#all_studio_page').css('display','block');
        $('#func_intro').removeClass('active');

        $('#all_studio').css('background-color','#5eacd2');
        $('#add_studio').css('background-color','#425671');

        $('#add_studio_page').css('display','none');
        $('#studio1_info').css('display','none');
    });
    // 添加工作室
    $('#add_studio').on('click',function () {
        $('#all_studio_page').css('display','none');
        $('#add_studio_page').css('display','block');

        $('#all_studio').css('background-color','#425671');
        $('#add_studio').css('background-color','#5eacd2');

        $('#func_intro').removeClass('active');

        $('#studio_add_check').css('display','block');
        $('#studio_change_check').css('display','none');

        $('#studio1_info').css('display','none');

        $('.add_studio').css('display','block');
        $('.change_studio').css('display','none');

    });
    // 修改
    $('#change1').on('click',function () {
        $('#all_studio_page').css('display','none');
        $('#add_studio_page').css('display','block');
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','block');
        $('#studio1_info').css('display','none');

        $('.add_studio').css('display','none');
        $('.change_studio').css('display','block');

    });
    // 查看信息
    $('#studio1').on('click',function () {
        $('#all_studio_page').css('display','none');
        $('#add_studio_page').css('display','none');
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','none');
        $('#studio1_info').css('display','block');
    })
})