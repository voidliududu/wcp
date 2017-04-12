$(function () {
    var studioSpan = $('#studio-manage-span');
    var cateSpan = $('#cate-manage-span');
    var productSpan = $('#product-manage-span');
    var studManage = $('#studio-manage');
    var cateManage = $('#cate-manage');
    var proManage = $('#product-manage');
    var studioChange = $('#studio-change1');
    var arr = ['#admin-studio','#studio-list','#studio-info','#studio-add','#admin-product-cate',
        '#cate-list','#cate-add','#admin-product','#product-list','#product-info','#producti-add'];
    // studiomanage.on('click',function () {
    //     $('#studio-dropmenu-ul')
    //
    // });
    studioSpan.click(function () {
        $('#studio-dropmenu-ul').slideToggle();
    });
    cateSpan.click(function () {
        $('#cate-dropmenu-ul').slideToggle();
    });
    productSpan.click(function () {
        $('#product-dropmenu-ul').slideToggle();
    });
    studManage.click(function () {
        $('#studio-list').css('display','block');
    });
    studioChange.click(function () {
        $(arr[0]).css('display','block');
        $(arr[3]).css('display','block');
        $(arr[1]).css('display','none');
        $(arr[2]).css('display','none');
        $(arr[4]).css('display','none');
        $(arr[7]).css('display','none');
        $('#studio-change-check').css('display','block');
        $('#studio-add-check').css('display','none');
        // for ( var i=0;;i++){
        //     if((i!=0)&&(i!=2)){
        //         $(arr[i]).css('display','none');
        //     }
        // }

    });

});