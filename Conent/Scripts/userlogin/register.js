var qcode = "";
var waitTime = 60;

//点击获取验证码
function goTime($btn) {
    if (waitTime === 0) {
        $btn.prop("disabled", false);
        $btn.text("重新获取验证码");
        waitTime = 60;
    } else {
        $btn.prop("disabled", true);
        $btn.text(waitTime + " 秒");
        waitTime--;

        setTimeout(function () {
            goTime($btn);
        }, 1000);
    }
}

$("#zcode").on("touchstart", function () {
    var isDisabled = $(this).prop("disabled");

    //按钮禁用状态下，点击不触发效果
    if(!isDisabled){
        goTime($(this));
        //此处可以加获取验证码的请求
    }
});

//接受协议
$(".login-xieyi").on("touchstart", function (ev) {
    if(ev.target.className !== "link"){
        var isActive = $(".icon-login-uncheck").hasClass("active");
        if(isActive){
            $(".icon-login-uncheck").removeClass("active");
        }else{
            $(".icon-login-uncheck").addClass("active");
        }
    }

});

//点击注册
$("#submit").on("touchstart", function () {
    //提交需要的数据
    var formData = {
        phone: $("input[name=phone]").val(),
        password: $("input[name=password]").val(),
        password2: $("input[name=password2]").val(),
        code: $("input[name=code]").val(),
        addFriend: $("input[name=addFriend]").val()
    };

    if(!overall.isMobile(formData.phone)){
        $.toast("请输入正确的手机号码", 1500);
        return false;
    }

    if(formData.code === ""){
        $.toast("请输入验证码", 1500);
        return false;
    }

    if(formData.password === ""){
        $.toast("请输入密码", 1500);
        return false;
    }

    if(formData.password.length < 8){
        $.toast("请输入8-20位数字和字母组合的密码", 1500);
        return false;
    }

    if(formData.password2 === ""){
        $.toast("请再次输入密码", 1500);
        return false;
    }

    if(formData.password !== formData.password2){
        $.toast("两次输入的密码不一致", 1500);
        return false;
    }

    if(formData.addFriend === ""){
        $.toast("请输入邀请码", 1500);
        return false;
    }

    if(!$(".icon-login-uncheck").hasClass("active")){
        $.toast("必须接受《风险提示》以及《客户协议》才能注册", 1500);
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

        }
    });*/
});

