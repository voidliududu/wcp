$(function () {

    // 全部工作室
    $('#all-studio').on('click',function () {
        $('#studio-list').css('display','block');
        $('#')
    });
    // 添加工作室
   $('#add-studio').click(function () {
       $('.right-first-list').css('display','none');
       $('#studio-add').css('display','block');
       $('#studio-info').css('display','none');
       $('#studio-add-check').css('display','block');
       $('#studio-change-check').css('display','none');
   });

   // 修改工作室信息
   $('#studio-change').click(function () {
       $('.right-first-list').css('display','none');
       $('#studio-add').css('display','block');
       $('#studio-info').css('display','none');
       $('#studio-add-check').css('display','none');
       $('#studio-change-check').css('display','block');
   })

});

