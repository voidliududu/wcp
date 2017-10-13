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
    $('#add_product_page_confirm').css('display','block');
    $('#add_product_page_main').css('display','none');
    $('#page_main_act').css('display','none');
    $('#page_main_app').css('display','none');
    $('#page_main_cartoon').css('display','none');
    $('#page_main_mag').css('display','none');
    $('#page_main_movie').css('display','none');
    $('#page_main_music').css('display','none');

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
        else if(this.reason == 'get_product_one'){
            str = '<header class="page_head"><span class="glyphicon glyphicon-file"></span>product1 </header>'+
                '<div class="info_show">'+
                '<div class="info_text">产品:'+result.pname+'</div>'+
                '<div class="info_text">代表图片:<img src="'+result.pimg+'" class="info_img"> </div>'+
                '<div class="info_text">产品介绍:</div>'+
                '<div class="product_intro" id="product_intro">'+

                '</div>'+
                '<div class="info_text">来源:'+result.pfrom+'</div>'+
                '<div class="info_text">所属分类:'+result.pcate+'</div>'+
                '<div class="info_text">创建时间:'+result.time+'</div>'+
                '<div class="info_text">点击量:'+result.clickcount+'</div>'+
                '<button class="btn btn-primary" id="disagree">不通过</button>' +
                '<button class="btn btn-primary" id="agree">通过</button>' +
                '<div class="clearfix"></div>'+
                '</div>';
                $('#product1_info').html(str);
                url = '';
                ajax(url,'get_studio_one_detail');
        }
        else if (this.reason == 'get_studio_one_detail'){
            str = result.content;
            $('#product_intro').html(str);
        }
        else if(this.reason == 'get_studio'){
            str = '<tr>'+
                '<th style="max-width: 50px">工作室ID</th>'+
                '<th>工作室名</th>'+
                '<th>工作室所属部门</th>'+
                '<th colspan="3">操作</th>'+
                '</tr>';
            // for(i=0;i<result.length;i++){
            //     str += '<tr>'+
            //         ' <td>'+result.deptid+'</td>'+
            //         '<td class="pointer stu_detail">'+result.deptname+'</td>'+
            //         '<td>'+result.updept+'</td>'+
            //         '<td class="pointer stu_change">修改</td>'+
            //         '<td class="pointer stu_detail">详细</td>'+
            //         ' <td class="pointer stu_delete">删除</td>'+
            //         '</tr>';
            // }
            // $('#studio_table').html(str);
        }
        else if(this.reason == 'get_studio_one'){
            str = '<header class="page_head"><span class="glyphicon glyphicon-file"></span>studio1 </header>'+
                '<div class="info_show">'+
                '<div class="info_text">工作室名:'+result.deptname+'</div>'+
                '<div class="info_text">代表图片:<img src="'+result.brand+'" class="info_img"> </div>'+
                '<div class="info_text">工作室介绍:</div>'+
                '<div class="studio_intro" id="studio_intro">'+

                '</div>'+
                '<div class="info_text">所属部门:'+result.updept+'</div>' +
                '<button class="btn btn-primary" id="disagree">不通过</button>' +
                ' <button class="btn btn-primary" id="agree">通过</button>' +
                ' <div class="clearfix"></div>'+
                '</div>' +
                '<div id="stu_disagree_reason" style="display: none"> <span>不通过理由</span><br/> <textarea class="disagree_reason form-control"/> ' +
                '<button type="submit" class="btn btn-primary" id="stu_disagree_sub">提交</button><div class="clearfix"></div> </div>';
                 $('#studio1_info').html(str);
                url = '';
                ajax(url,'get_studio_one_detail');
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
                '<button class="btn btn-primary" id="my_change">修改</button>' +
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
    // 审核不通过
    $('#disagree').on('click',function () {
        $('#stu_disagree_reason').show(500);
    });
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

    // 所有工作室
    $('#all_studio').on('click',function () {
        list_show('all_studio_page');
        // 列表选项背景色
        listColor_change('all_studio');
        url = '';
        ajax(url, 'get_studio_one');
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

    // 添加工作室
    $('#add_studio').on('click',function () {
        list_show('add_studio_page');
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
    $('#studio_table').on('click','.stu_change',function () {
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
    })

    // 查看工作室信息
    .on('click','.stu_detail',function () {
        // 页面显隐
        list_show('studio1_info');
        // 页面小细节显隐
        $('#studio_add_check').css('display','none');
        $('#studio_change_check').css('display','none');
        url = '';
        ajax(url,'get_studio_one');
    })

    .on('click','.stu_check',function () {
        list_show('studio1_info');
        url = '';
        ajax(url,'get_studio_one');
    })

    // 删除工作室信息
    .on('click','.stu_delete',function () {
        if(confirm("你确定要删除吗？")){
            if(confirm("删除将会无法复原，你真的要删除吗？")){

            }
        }
    });

    // 修改微产品信息
    $('#product_table').on('click','.pro_change',function () {
        // 页面显隐
        oProduct =$(this).prev();
        if(oProduct.text() == nameZN[0]){
            list_show('page_main_movie');
        }
        else if(oProduct.text() == nameZN[1]){
            list_show('page_main_music');
        }
        else if(oProduct.text() == nameZN[2]){
            list_show('page_main_app');
        }
        else if(oProduct.text() == nameZN[3]){
            list_show('page_main_cartoon');
        }
        else if(oProduct.text() == nameZN[4]){
            list_show('page_main_mag');
        }
        else if(oProduct.text() == nameZN[5]){
            list_show('page_main_act');
        }
        $('#add_product_page').css('display','block');
        $('#add_product_page_confirm').css('display','none');
        $('#add_product_page_main').css('display','block');
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
    //添加工作室时，点击继续添加
    var k = 1;
    $('#studio_add_main').on('click','#studiobut_add',function(){
        if(k > 9)
            return;
        str =
            '<div class="add_main">'+
            '<div class="add_text add_title"> (主要内容，最多添加10张图片、10份说明)</div>'+
            '<div class="add_text">图片:<span class="glyphicon glyphicon-picture add_pic"></span>'+
            '<span class="add_pic_tip">点击添加图片</span>'+
            '<img src="img/profile.png" class="add_pic_pre">'+
            '</div>'+
            '<div class="add_text">工作室介绍:<span class="glyphicon glyphicon-tag"></span> </div>'+
            '<textarea class="add_intro"></textarea>'+
            '<button class="check_delete" style="float:left;display: none">删除</button>'+
            '</div>'+
            '<button id="studiobut_add" class="check_add" style="float:left;margin-left:50px">继续添加</button>';
        $(this).prev().children('.check_delete').css('display','block');
        $(this).parent().append(str);
        $(this).remove();
        k++;
    }).on('click','.add_main .check_delete',function(){
        $(this).parent().remove();
        k--;
    });
    //添加产品时，选择微其中一个产品
    $('.page_confirm').unbind('click').on('click',function () {
        $('#add_product_page_confirm').css('display','none');
        $('#add_product_page_main').css('display','block');
        id = $(this).attr('id');
        id = id.split('page_confirm_')[1];
        // console.log(id);
        $('#page_main_'+id).css('display','block');
        //微产品的独特添加页面
        if(id == 'act'){
            var i = 1;
            $('.cate_add').on('click','#act_add',function(){
                if(i > 9)
                    return;
                str =
                    '<div class="add_main">'+
                    '<div class="add_text add_title"> (主要内容，最多添加10张图片、10份说明)</div>'+
                    '<div class="add_text">图片:<span class="glyphicon glyphicon-picture add_pic"></span>'+
                    '<span class="add_pic_tip">点击添加图片</span>'+
                    '<img src="" class="add_pic_pre" id="act_img1">'+
                    '</div>'+
                    '<div class="add_text">微产品介绍:<span class="glyphicon glyphicon-tag"></span> </div>'+
                    '<textarea class="add_intro" id="act_text1"></textarea>'+
                    '<button class="check_delete act_delete" style="float:left;display: none">删除</button>'+
                    '</div>'+
                    '<button id="act_add" class="check_add" style="float:left;margin-left:50px" num='+(i+1)+'>继续添加</button>'+
                    '</div>';
                $(this).prev().children('.check_delete').css('display','block');
                $(this).parent().append(str);
                $(this).remove();
                i++;
            }).on('click','.add_main .check_delete',function(){
                $(this).parent().remove();
                i--;
            })
        }
        else if(id == 'app'){
            var j = 1;
            $('.cate_add').on('click','#app_add',function(){
                if(j > 9)
                    return;
                str =
                    '<div class="add_main">'+
                    '<div class="add_text add_title"> (主要内容，最多添加10张图片、10份说明)</div>'+
                    '<div class="add_text">图片:<span class="glyphicon glyphicon-picture add_pic"></span>'+
                    '<span class="add_pic_tip">点击添加图片</span>'+
                    '<img src="" class="add_pic_pre" id="act_img1">'+
                    '</div>'+
                    '<div class="add_text">微产品介绍:<span class="glyphicon glyphicon-tag"></span> </div>'+
                    '<textarea class="add_intro" id="act_text1"></textarea>'+
                    '<button class="check_delete act_delete" style="float:left;display: none">删除</button>'+
                    '</div>'+
                    '<button id="app_add" class="check_add" style="float:left;margin-left:50px" num='+(j+1)+'>继续添加</button>'+
                    '</div>';
                $(this).prev().children('.check_delete').css('display','block');
                $(this).parent().append(str);
                $(this).remove();
                j++;
            }).on('click','.add_main .check_delete',function(){
                $(this).parent().remove();
                j--;
            })
        }
        else if(id == 'cartoon'){
            $('.cate_add').on('click','#cartoon_add',function(){
                str =
                    '<div class="add_main">'+
                    '<div class="add_text add_title"> (主要内容，可以添加多个图片)</div>'+
                    '<div class="add_text">图片:<span class="glyphicon glyphicon-picture add_pic"></span>'+
                    '<span class="add_pic_tip">点击添加图片</span>'+
                    '<img src="" class="add_pic_pre">'+
                    '</div>'+
                    '<button class="check_delete" style="float:left;display: none">删除</button>'+
                    '</div>'+
                    '<button id="cartoon_add" class="check_add" style="float:left;margin-left:50px">继续添加</button>'
                $(this).prev().children('.check_delete').css('display','block');
                $(this).parent().append(str);
            }).on('click','.add_main .check_delete',function(){
                $(this).parent().remove();
            })
        }
    });
});
