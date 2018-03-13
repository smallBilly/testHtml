var qcode = "";

//获取随机四位数的验证码
function getQrcode() {
    var num = "";
    for (var i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10)
    }
    return num;
}

//点击修改验证码
$("#qcode").on("touchstart", function () {
    qcode = getQrcode();
    $("#qcode").text(qcode);
});
$("#qcode").text(getQrcode());

//点击查看密码
$("#look").on("touchstart", function () {
    var isActive = $(this).hasClass("active");
    if(isActive){
        $(this).removeClass("active");
        $("input[name=password]").attr("type", "password");
    }else{
        $(this).addClass("active");
        $("input[name=password]").attr("type", "text");
    }
});

//点击登录
$("#submit").on("touchstart", function () {
    //提交需要的数据
    var formData = {
        phone: $("input[name=phone]").val(),
        password: $("input[name=password]").val(),
        code: $("input[name=code]").val(),
    };

    if(!overall.isMobile(formData.phone)){
        $.toast("请输入正确的手机号码", 1500);
        return false;
    }

    if(formData.password === ""){
        $.toast("请输入密码", 1500);
        return false;
    }

    if(formData.code !== qcode){
        $.toast("请输入正确的验证码", 1500);
        return false;
    }

    console.log(formData);

    //提交登录请求 或者 submit 直接改成button 走直接提交form的方法
    /*$.ajax({
        url: "",
        data: formData,
        dataType: "json",
        type: "post",
        success: function (data) {
            console.log(data);
            $.toast("不存在该手机号", 1500);
        }
    });*/
});