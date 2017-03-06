/**
 * Created by wpc on 2017/3/6.
 */
$(function () {
   //账号
    $('form').form('user').bind('focus', function () {
        $('#reg .info_user').css('display', 'block');
        $('#reg .error_user').css('display', 'none');
        $('#reg .succ_user').css('display', 'none');
    }).bind('blur', function () {
        if ($(this).value() == '') {
            $('#reg .info_user').css('display', 'none');
            $('#reg .error_user').css('display', 'none');
            $('#reg .succ_user').css('display', 'none');
        } else if (!/[\w]{2,20}/.test($(this).value())) {
            $('#reg .error_user').css('display','block').css('color','#E92322');
            $('#reg .info_user').css('display', 'none');
            $('#reg .succ_user').css('display', 'none');
        } else {
            $('#reg .succ_user').css('display', 'block').css('color','#c0c0c0');
            $('#reg .error_user').css('display', 'none');
            $('#reg .info_user').css('display', 'none');
        }
    });
    function check_user() {
        if (/[\w]{2,20}/.test(trim($('form').form('user').value()))) return true;
    }
    //密码
    $('form').form('pass').bind('focus', function () {
        $('#reg .info_pass').css('display', 'block');
        $('#reg .error_pass').css('display', 'none');
        $('#reg .succ_pass').css('display', 'none');
    }).bind('blur', function () {
        if($(this).value()==''){
            $('#reg .info_pass').css('display', 'none');
            $('#reg .error_pass').css('display', 'none');
            $('#reg .succ_pass').css('display', 'none');
        }else if (!/[\w]{4,20}/.test($(this).value())) {
            $('#reg .error_pass').css('display', 'block').css('color','#E92322');
            $('#reg .info_pass').css('display', 'none');
            $('#reg .succ_pass').css('display', 'none');
        } else {
            $('#reg .succ_pass').css('display', 'block').css('color','#c0c0c0');
            $('#reg .error_pass').css('display', 'none');
            $('#reg .info_pass').css('display', 'none');
        }
    });
    function check_pass() {
        var value = trim($('form').form('pass').value());
        var value_length = value.length;
        if (value_length >= 6 && value_length <= 20) {
            return true;
        }
    }
    //密码确认
    $('form').form('notpass').bind('focus', function () {
        $('#reg .info_notpass').css('display', 'block');
        $('#reg .error_notpass').css('display', 'none');
        $('#reg .succ_notpass').css('display', 'none');
    }).bind('blur', function () {
        if (trim($(this).value()) == '') {
            $('#reg .info_notpass').css('display', 'none');
        } else if (trim($(this).value()) == trim($('form').form('pass').value())) {
            $('#reg .info_notpass').css('display', 'none');
            $('#reg .error_notpass').css('display', 'none');
            $('#reg .succ_notpass').css('display', 'block').css('color','#c0c0c0');
        } else {
            $('#reg .info_notpass').css('display', 'none');
            $('#reg .error_notpass').css('display', 'block').css('color', '#E92322');
            $('#reg .succ_notpass').css('display', 'none');
        }
    })
        function check_notpass() {
            if (trim($('form').form('notpass').value()) == trim($('form').form('pass').value())) return true;
        }

        $('form').form('email').bind('focus', function () {
            $('#reg .info_email').css('display', 'block');
            $('#reg .error_email').css('display', 'none');
            $('#reg .succ_email').css('display', 'none');
        }).bind('blur', function () {
            if ($(this).value() == '') {
                $('#reg .info_email').css('display', 'none');
                $('#reg .error_email').css('display', 'none');
                $('#reg .succ_email').css('display', 'none');
            } else if (!/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($('form').form('email').value()))) {
                $('#reg .error_email').css('display','block').css('color','#E92322');
                $('#reg .info_email').css('display', 'none');
                $('#reg .succ_email').css('display', 'none');
            } else {
                $('#reg .succ_email').css('display', 'block').css('color','#c0c0c0');
                $('#reg .error_email').css('display', 'none');
                $('#reg .info_email').css('display', 'none');
            }
        });

        function check_email() {
            if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($('form').form('email').value()))) return true;
        }
    $('form').form('phone').bind('focus', function () {
        $('#reg .info_phone').css('display', 'block');
        $('#reg .error_phone').css('display', 'none');
        $('#reg .succ_phone').css('display', 'none');
    }).bind('blur', function () {
        if ($(this).value() == '') {
            $('#reg .info_phone').css('display', 'none');
            $('#reg .error_phone').css('display', 'none');
            $('#reg .succ_phone').css('display', 'none');
        } else if (!/^1[3|4|5|8][0-9]\d{8}$/i.test(trim($('form').form('phone').value()))) {
            $('#reg .error_phone').css('display','block').css('color','#E92322');
            $('#reg .info_phone').css('display', 'none');
            $('#reg .succ_phone').css('display', 'none');
        } else {
            $('#reg .succ_phone').css('display', 'block').css('color','#c0c0c0');
            $('#reg .error_phone').css('display', 'none');
            $('#reg .info_phone').css('display', 'none');
        }
    });
        function check_phone() {
            if ( /^1[3|4|5|8][0-9]\d{8}$/i.test(trim($('form').form('phone').value())))return true;
        }
    var verifyAll=function () {
        if(check_email()&&check_notpass()&&check_pass()&&check_user()&&check_phone()){
            alert("提交成功！")
        }
        else{
            alert("提交失败，请重新填写。")
        }
    };
    document.getElementById('btn').addEventListener("click",verifyAll,false);

});








