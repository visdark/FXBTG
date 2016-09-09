
$(function () {
    var telRegular = /^(1(([3-9][0-9])|(47)|[8][01236789]))\d{8}$/;
    var emailRegular = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    //初始化弹出层
    $._messengerDefaults = {
        extraClasses: 'messenger-fixed messenger-theme-flat messenger-on-top'
    }

    //提交表单
    var _ajaxOption_Submit = {
        url: '/Activity/PageTwo_SavePost',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        cache: false,
        beforeSend: function () {
            $('#submit_main').text("提交中...").attr('disabled', 'disabled');
        },
        complete: function () {
            $("#submit_main").text("提交").removeAttr('disabled');
        },
        statusCode: {
            200: function (data) {
                if (data.Message == "OK") {
                    var iUserID = parseInt(data.Data);
                    if (iUserID > 0) {
                        $.globalMessenger().post({ message: "提交成功", hideAfter: 2, type: 'success', showCloseButton: true });
                    }
                    else {
                        $.globalMessenger().post({ message: "提交成功，正在为您跳转到在线办公室。", hideAfter: 2, type: 'success', showCloseButton: true });
                    }
                    //定时跳转
                    setTimeout(function () {
                        window.location.href = 'https://www.fxbtg-bank.com/Deposit/';
                    }, 3000);
                } else {
                    $.globalMessenger().post({ message: data.Message, hideAfter: 2, type: 'error', showCloseButton: true });
                }
                reloadForm();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.globalMessenger().post({ message: '提交失败', hideAfter: 2, type: 'error', showCloseButton: true });
            reloadForm();
        }
    };

    function reloadForm() {
        if (time_Main) clearInterval(time_Main);
        $("#code_main").val("");
        $("#btn_code_main").text('点击发送验证码').removeAttr("disabled");
        $("#submit_main").text("提交资料").removeAttr('disabled');
    }


    //#region Main
    var i_Main = 60, time_Main;
    function sendCode_Main() {
        var $tel_main = $('#tel_main'),
            $btn_code_main = $('#btn_code_main'),
            _tel = $tel_main.val();
        var strError = '';
        if (!_tel || !telRegular.test(_tel)) {
            strError += "1";
            $.globalMessenger().post({ message: "请输入手机号", hideAfter: 2, type: 'error', showCloseButton: true });
        }
        if (strError) {
            return false;
        }
        var newOption = $.extend({}, _ajaxOption_Submit, {
            url: '/Activity/SendPhoneCode_Activity',
            headers: { 'RequestVerificationToken': $("#TokenHeader").val() },
            data: { phone: _tel },
            beforeSend: function () {
                $btn_code_main.text("获取中...").attr('disabled', 'disabled');
            },
            complete: function () {
                //$btn_code_main.text("提交").removeAttr('disabled');
            },
            statusCode: {
                200: function (data) {
                    if (data.Message == "OK") {
                        i_Main = 60, time_Main = undefined;
                        $('#btn_code_main').text(i_Main);
                        time_Main = setInterval(function () {
                            if (i_Main == 0) {
                                clearInterval(time_Main);
                                $('#btn_code_main').text('获取验证码').removeAttr("disabled");
                            }
                            else {
                                $('#btn_code_main').text(i_Main);
                            }
                            i_Main--;
                        }, 1000);

                    } else if (data.Message == "EXIST") {
                        $.globalMessenger().post({ message: "手机号码存在或发送次数超过限额（10次），请稍后再试或重新输入！", hideAfter: 2, type: 'error', showCloseButton: true });
                        $btn_code_main.text('获取验证码').removeAttr("disabled");
                        $tel_main.val("");
                        $tel_main.focus();
                        return;
                    } else {
                        $.globalMessenger().post({ message: "发送失败，请重试", hideAfter: 2, type: 'error', showCloseButton: true });
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.globalMessenger().post({ message: '发送失败', hideAfter: 2, type: 'error', showCloseButton: true });
            }
        });
        $.ajax(newOption);
    }

    function submit_Main() {
        var $tel_main = $('#tel_main'),
            $code_main = $('#code_main'),
            $name = $("#name_main"),
            //$mail_main = $("#mail_main"),
            _tel = $tel_main.val(),
            _code = $code_main.val(),
            _name = $name.val();
            //_email = $mail_main.val();

        var strError = '';
        if (!_name) {
            strError += "1";
            $.globalMessenger().post({ message: "请输入姓名", hideAfter: 2, type: 'error', showCloseButton: true });
        }
        //if (!_email) {
        //    strError += "1";
        //    $.globalMessenger().post({ message: "请输入邮箱", hideAfter: 2, type: 'error', showCloseButton: true });
        //}
        if (!_tel || !telRegular.test(_tel)) {
            strError += "1";
            $.globalMessenger().post({ message: "请输入手机号", hideAfter: 2, type: 'error', showCloseButton: true });
        }
        if (!_code) {
            strError += "1";
            $.globalMessenger().post({ message: "请输入验证码", hideAfter: 2, type: 'error', showCloseButton: true });
        }
        if (strError) {
            return false;
        }

        var newOption = $.extend({}, _ajaxOption_Submit, {
            data: { phone: _tel, code: _code, name: _name, localurl: document.location.href }
        });
        $.ajax(newOption);
    }

    $("#btn_code_main").on("click", function () {
        sendCode_Main();
    });
    $("#submit_main").on("click", function () {
        submit_Main();
    });
    //#endregion
});

