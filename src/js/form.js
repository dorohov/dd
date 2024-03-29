(function($) {
    "use strict"
    $(function() {

        $('.form__group.is--text input').focus(function() {
            $(this).parent().addClass('is--focus')
        })
        $('.form__group.is--text input').focusout(function() {
            $(this).parent().removeClass('is--focus')
            if($(this).val() != '') {
                $(this).parent().addClass('is--notempty')
            }else {
                $(this).parent().removeClass('is--notempty')
            }
        })

        $('#resume').on('change', function(){
            var fn = $(this).val();
            var filename = fn.match(/[^\\/]*$/)[0];

            $('label.is--resume').html(filename)
            $('label.is--resume').addClass('is--active')

        })

        function showError(form, input, error, inputName) {
            form.find('input#' + input).parent('.form__group').addClass('is--error')
            form.find('input#' + input).siblings('label').html(inputName + ' <span class="is--error">(' + error + ')<span>')
        }

        function clearError(form, input, inputName) {
            form.find('input#' + input).parent('.form__group').removeClass('is--error')
            form.find('input#' + input).siblings('label').html(inputName)
        }

        function nameValidation(_form, name) {
            if(!validator.isLength(name, {min:3, max:20})) {
                showError(_form, 'name', 'От 3х до 20 символов', 'Имя')
                return false
            }else {
                clearError(_form, 'name', 'Имя')
                return true
            }
        }

        function phoneValidation(_form, phone) {
            if(!validator.isMobilePhone(phone)) {
                showError(_form, 'phone', 'Введите номер телефона', 'Телефон')
                return false
            }else {
                clearError(_form, 'phone', 'Телефон')
                return true
            }
        }

        function emailValidation(_form, email) {
            if(!validator.isEmail(email)) {
                showError(_form, 'mail', 'Введите почту', 'Почта')
                return false
            }else {
                clearError(_form, 'mail', 'Почта')
                return true
            }
        }

        $('#mainForm form').submit(function(e) {
            // e.preventDefault()
            var _form = $(this);
            var name = $(this).find('input#name').val();
            var email = $(this).find('input#mail').val();
            var phone = $(this).find('input#phone').val();
            var resume = $(this).find('input#resume').val();
        
            if(nameValidation(_form, name) && phoneValidation(_form, phone) && emailValidation(_form, email)) {
        
                e.preventDefault();
        
                /*
                                $.post(
                                    '/formsave/',
                                    {
                                        name: name,
                                        email: email,
                                        phone: phone,
                                        resume: resume
                                    },
                                    function() {
                                        $('#form_modal').modal()
                                    }
                                )
        
                            }else {
                                e.preventDefault()
                            }
                */
        
                $.ajax({
                    url: '/formsave/' ,
                    type:  "POST",
                    data: $(this).serialize(),  // Сеарилизуем объект
                    success: function(response) { //Данные отправлены успешно
        
                        var result = $.parseJSON(response);
        
                        if(result =='1'){
        
                            $('#form_modal').modal();
        
                            $('#mainForm form').find('input#name').val('');
                            $('#mainForm form').find('input#mail').val('');
                            $('#mainForm form').find('input#phone').val('');
                            $('#mainForm form').find('input#resume').val('');
        
        
        
        
                        } else {
        
                            alert('Что то пошло не так(');
                        }
                        //$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
        
                    },
                    error: function(response) { // Данные не отправлены
                        //$('#result_form').html('Ошибка. Данные не отправлены.');
                        alert('Что то пошло не так(');
                    }
                });
        
            }
        
            return false;
        
        
        });

        $('form.is--validation input#name').on('input', function(e) {
            return nameValidation($('form.is--validation'), e.target.value)
        })

        $('form.is--validation input#phone').on('input', function(e) {
            return phoneValidation($('form.is--validation'), e.target.value)
        })

        $('form.is--validation input#mail').on('input', function(e) {
            return emailValidation($('form.is--validation'), e.target.value)
        })

    })
})(jQuery);