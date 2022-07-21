$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    $('#emailvalidation').hide();

    var Error = true;
    var password_error = true;
    var confirmpassword_error = true;

    $('#username').keyup(function(){
        check_username();
    });

    function check_username(){
        var username_length = $('#username').val().length;
        if(username_length == ''){
            $('#usernamevalidation').html('Username is required');
            $('#usernamevalidation').show();
            $('#usernamevalidation').css('color', 'green');
            Error = false;
            return false;
        }

    }

    $('#password').keyup(function(){
        check_password();
    });

    function check_password(){
        var password_length = $('#password').val().length;
        if(password_length == ''){
            $('#passwordvalidation').html('Password is required');
            $('#passwordvalidation').show();
            $('#passwordvalidation').css('color', 'green');
            password_error = false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
            password_error = true;
        }
        if(password_length < 8 ){
            $('#passwordvalidation').html('weak password');
            $('#passwordvalidation').css('color', 'green');
            $('#passwordvalidation').show();
            password_error = false;
            return false;

        }else{
            $('#passwordvalidation').hide();
            password_error = true;
        }
    }

    $('#confirmpassword').keyup(function(){
        check_confirmpassword();
    });

    function check_confirmpassword(){
        var confirm_password = $('#confirmpassword').val();
        var password = $('#password').val();
        if(confirm_password != password){
            $('#confirmpasswordvalidation').html('Password does not match');
            $('#confirmpasswordvalidation').css('color', 'green');
            $('#confirmpasswordvalidation').show();
            confirmpassword_error = false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirmpassword_error = true;
        }
    }

    $('#email').keyup(function(){
        check_email();
    });

    function check_email(){
        var email_length = $('#email').val().length;
        if(email_length == ''){
            $('#emailvalidation').html('Email is required');
            $('#emailvalidation').show();
            $('#emailvalidation').css('color', 'green');
            Error = false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
            Error = true;
        }
        if(email_length < 4 || email_length > 20){
            $('#emailvalidation').html('invalid email id');
            $('#emailvalidation').css('color', 'green');
            $('#emailvalidation').show();
            Error = false;
            return false;

        }else{
            $('#emailvalidation').hide();
            Error = true;
        }

        var email_val = $('#email').val();
        var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if(!regex.test(email_val)){
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color', 'green');
            $('#emailvalidation').show();
            Error = false;
            return false;
        }
    }

    $('#submitvalidation').click(function(){
        check_username();
        check_password();
        check_confirmpassword();
        if(Error == true && password_error == true && confirmpassword_error == true){
            return true;
        }
        else{
            return false;
        }
    });


});