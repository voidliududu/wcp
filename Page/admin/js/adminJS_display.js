// 列表选项背景色
function listColor_change(id){ //5eacd2
    $('#index').removeClass('active');
    $('#index').css('background-color','#597397');
    $('#we_my_studio').css('background-color','#597397');
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

// 页面显隐
function list_show(id){
    $('#index_page').css('display','none');
    $('#all_product_page').css('display','none');
    $('#all_studio_page').css('display','none');
    $('#add_studio_page').css('display','none');
    $('#add_product_page').css('display','none');
    $('.product_info_page').css('display','none');
    $('.studio_info_page').css('display','none');

    $('#'+id).css('display','block');
}

// ajax获取产品信息
function ajax(url,reason){
    $.ajax({
        url: url,
        async : true,
        cache : true,
        success:function(result){
            control = new ajax_control(result,reason);
            control.start();
        }
    })
}

function ajax_control(result,reason){
    this.reason = reason;
    this.start = function(){
        if(this.reason == 'get_product'){
            str = '<tr>'+
                '<th style="max-width: 50px">产品ID</th>'+
                '<th>产品名</th>'+
                '<th>所属工作室</th>'+
                '<th>产品类型</th>'+
                '<th colspan="3">操作</th>'+
                '</tr>';
            // for(i=0;i<result.length;i++){
            //     str += '<tr>'+
            //         '<td>'+result.pid+'</td>'+
            //         '<td class="pointer pro_detail">'+result.pname+'</td>'+
            //         '<td>'+result.author+'</td>'+
            //         '<td>'+nameZN[result.pcate]+'</td>'+
            //         '<td class="pointer pro_change">修改</td>'+
            //         '<td class="pointer pro_detail">详细</td>'+
            //         '<td class="pointer pro_delete">删除</td>'+
            //         '</tr>';
            // }
            // $('#product_table').html(str);
        }
        else if(this.reason == 'get_my_studio'){
            str = '<header class="page_head"><span class="glyphicon glyphicon-file"></span>studio1 </header>'+
                '<div class="info_show">'+
                '<div class="info_text">工作室名:'+result.deptname+'</div>'+
                '<div class="info_text">代表图片:<img src="'+result.brand+'" class="info_img"> </div>'+
                '<div class="info_text">工作室介绍:</div>'+
                '<div class="studio_intro" id="studio_intro">'+

                '</div>'+
                '<div class="info_text">所属部门:'+result.updept+'</div>' +
                '<button class="btn btn-primary stu_change" id="my_change">修改</button>' +
                '<div class="clearfix"></div>'+
                '</div>';
                $('#studio1_info').html(str);
            url = '';
            ajax(url,'get_studio_one_detail');
        }
        else if(this.reason == 'get_studio_one_detail'){
            str = result.content;
            $('#studio_intro').html(str);
        }
    };
}

// 功能切换
$(function () {
    //首页
    $('#index').on('click',function(){
        list_show('index_page');

        listColor_change('index');

    });

    // 我的工作室
    $('#we_my_studio').on('click',function () {
        list_show('studio1_info');
        // 列表选项背景色
        listColor_change('we_my_studio');
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','none');
        url = '';
        ajax(url,'get_my_studio');
    });


    // 所有微产品
    $('#all_product').on('click',function () {
        list_show('all_product_page');
        $('#func_intro').removeClass('active');
        listColor_change('all_product');
        url = '';
        ajax(url,'get_product');
    });

    //微电影
    $('#we_movie').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_movie');
        url = '';
        ajax(url,'get_product');
    });

    //app
    $('#we_app').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_app');
        url = '';
        ajax(url,'get_product');
    });

    //微漫画
    $('#we_cartoon').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_cartoon');
        url = '';
        ajax(url,'get_product');
    });

    //音乐MV
    $('#we_mv').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_mv');
        url = '';
        ajax(url,'get_product');
    });

    //微杂志
    $('#we_magazine').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_magazine');
        url = '';
        ajax(url,'get_product');
    });

    //微活动
    $('#we_activity').on('click',function () {
        list_show('all_product_page');
        listColor_change('we_activity');
        url = '';
        ajax(url,'get_product');
    });


    // 添加微产品
    $('#add_product').on('click',function () {
        // 页面显隐
        list_show('add_product_page');
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
    $('#studio1_info').on('click','.stu_change',function () {
        // 页面显隐
        list_show('add_studio_page');
        // 页面小细节显隐
        $('#studio_change_check').css('display','block');
        $('.change_studio').css('display','block');

        $('#studio_add_check').css('display','none');
        $('.add_studio').css('display','none');

        stu_name = $(this).prev().prev().text();
        stu_branch = $(this).prev().text();
        ajax(url,'change_studio_one');
    });

    // 修改微产品信息
    $('#product_table').on('click','.pro_change',function () {
        // 页面显隐
        list_show('add_product_page');
        // 页面小细节显隐
        $('#product_change_check').css('display','block');
        $('.change_product').css('display','block');

        $('#product_add_check').css('display','none');
        $('.add_product').css('display','none');

        pro_name = $(this).prev().prev().prev().text();
        pro_branch = $(this).prev().prev().text();
        pro_type = $(this).prev().text();
    })

    // 查看微产品信息
        .on('click','.pro_detail',function () {
        // 页面显隐
        list_show('product1_info');
        // 页面小细节显隐
        $('#product_add_check').css('display','none');
        $('#product_change_check').css('display','none');
        url = '';
        ajax(url,'get_product_one');
    })
        .on('click','.pro_check',function () {
            list_show('product1_info');
            url = '';
            ajax(url,'get_product_one');
        })

    // 删除微产品信息
    .on('click','.pro_delete',function () {
        if(confirm("你确定要删除吗？")){
            if(confirm("删除将会无法复原，你真的要删除吗？")){

            }
        }
    });

});
