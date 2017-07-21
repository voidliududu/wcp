$(function () {
    // 收起展开列表
    $('#we_studio').on('click',function () {
        $('#studio_toggle').toggle(1000);
        $('#we_studio span').toggle();
    });
    $('#we_product').on('click',function () {
        $('#product_toggle').toggle(1000);
        $('#we_product span').toggle();
    });
    $('#classify').on('click',function () {
        $('#classify_toggle').toggle(1000);
        $('#classify span').toggle();
    });
    $('#operation').on('click',function () {
        $('#operation_toggle').toggle(1000);
        $('#operation span').toggle();
    });
});


