$(function () {
    // 收起展开列表
    $('#we_studio').on('click',function () {
        $('#studio_toggle').toggle(500);
        $('#we_studio span').toggle();
    });
    $('#we_product').on('click',function () {
        $('#product_toggle').toggle(500);
        $('#we_product span').toggle();
    });
    $('#classify').on('click',function () {
        $('#classify_toggle').toggle(500);
        $('#classify span').toggle();
    });
    $('#operation').on('click',function () {
        $('#operation_toggle').toggle(500);
        $('#operation span').toggle();
    });

    $('#studio_add_check').on('click',function () {
        children = $(this).parent().children();
        stdioName = $(children[0]).children('.add_input').val();
        stdioIntro = $(children[3]).val();
        stdioBranch = $(children[4]).children('.add_input').val();
        $.ajax({
            url : 'http://localhost/wcp/Cooperate//dept.php?m=1',
            data : {
                name : stdioName ,
                brand : '' ,
                updept : stdioBranch ,
                content : stdioIntro
            },
            success:function (result) {
                console.log(result);
            }
        })

    })
});


