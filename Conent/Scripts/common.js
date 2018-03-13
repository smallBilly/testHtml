//初始
$(function () {
    /*$.ajaxSetup({
        cache: false //关闭AJAX缓存
    });*/


    //请求发送前
    $(document).on('ajaxBeforeSend', function(e, xhr, options){

    });

    //请求发送失败
    $(document).on('ajaxError', function(e, xhr, options){

    });

    $(".back").on("click", function () {
        history.back();
    });

});

var overall = {
    //判断值如果为null怎返回创建了内存空间的空
    isNull: function (obj) {
        var str = obj;
        if (obj == null || obj == undefined) {
            str = "";
        }
        return str
    },
    //判断日期值如果小于2000年则返回空，否则返回原值
    isDate: function (obj) {
        var str = obj;
        if (obj == null || obj == undefined || obj == "" || obj == "0001-01-01 00:00:00") {
            str = "";
        } else {
            var date = "2000-01-01 00:00:00";
            date = new Date(date.replace("-", "/").replace("-", "/"));
            obj = new Date(obj.replace("-", "/").replace("-", "/"));
            if (obj < date) {
                str = "";
            }
        }
        return str;
    },
    isMobile: function (s) {
        //是手机号码返回 true, 不是返回false
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(s);
    }
};