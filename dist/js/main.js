(function($) {
    "use strict"
    $(function() {

        function closeAccordion(type, box) {
            if(type == 'all') {
                $('.services-accordion__block__content').slideUp()
                $('.services-accordion__block').removeClass('is--open')
            }else if(type == 'nonCurrent') {
                $('.services-accordion__block').each(function() {
                    if($(this)[0] != $(box)[0]) {
                        $(this).children('.services-accordion__block__content').slideUp()
                        $(this).removeClass('is--open')
                    }
                })
            }
        }

        function openAccordion(box) {
            closeAccordion('nonCurrent', $(box).parent('.services-accordion__block'))
            $(box).siblings('.services-accordion__block__content').slideToggle({
                complete: function() {
                   isOpen = false
                }
            })
            $(box).parent('.services-accordion__block').toggleClass('is--open')

        }

        closeAccordion('all')

        var isOpen = false

        $('.services-accordion__block__title').on('click', function() {
            if(isOpen == false) {
                isOpen = true
                openAccordion(this)
            }
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $(document).scroll(function() {
            playBg()
        })

        playBg()

        function playBg() {
            $('.bgtext').each(function() {
                if($(this).visible(true)) {
                    $(this).addClass('is--active')
                }else {
                    $(this).removeClass('is--active')
                }
            });
            $('.heading.is--bgtext').each(function() {
                if($(this).visible(true)) {
                    $(this).addClass('is--active')
                }else {
                    $(this).removeClass('is--active')
                }
            })
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        // var c = 1
        // var r = .6

        // var centerTransform = c
        // var rightTransform = r
        // var lastScrollTop = 0

        // $(window).scroll(function() {
        //     var top_of_element = $(".portfolio__inner").offset().top;
        //     var bottom_of_element = $(".portfolio__inner").offset().top + $(".portfolio__inner").outerHeight();
        //     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        //     var top_of_screen = $(window).scrollTop();

        //     var st = $(this).scrollTop()
        //     if (st > lastScrollTop){
        //         var centerTransformFinal = 'translateY(-' + centerTransform + 'px)'
        //         var rightTransformFinal = 'translateY(-' + rightTransform + 'px)'
        //     } else {
        //         var centerTransformFinal = 'translateY(' + centerTransform + 'px)'
        //         var rightTransformFinal = 'translateY(' + rightTransform + 'px)'
        //     }
        //     centerTransform += c
        //         rightTransform += r
        //     lastScrollTop = st
        
        //     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        //         $('.portfolio__block.is--center').each(function() {
        //             $(this).css({
        //                 '-webkit-transform' : centerTransformFinal,
        //                 '-moz-transform'    : centerTransformFinal,
        //                 '-ms-transform'     : centerTransformFinal,
        //                 '-o-transform'      : centerTransformFinal,
        //                 'transform': centerTransformFinal,
        //             })
        //         })
        //         $('.portfolio__block.is--right').each(function() {
        //             $(this).css({
        //                 '-webkit-transform' : rightTransformFinal,
        //                 '-moz-transform'    : rightTransformFinal,
        //                 '-ms-transform'     : rightTransformFinal,
        //                 '-o-transform'      : rightTransformFinal,
        //                 'transform': rightTransformFinal,
        //             })
        //         })
        //     } else {
        //         $('.portfolio__block').each(function() {
        //             $(this).css({
        //                 '-webkit-transform' : 'none',
        //                 '-moz-transform'    : 'none',
        //                 '-ms-transform'     : 'none',
        //                 '-o-transform'      : 'none',
        //                 'transform': 'none',
        //             })
        //             centerTransform = 0
        //             rightTransform = 0
        //         })
        //     }

        //     console.log(centerTransform)

        // })


        /////////////////////////////////////////////////////////////////////////
        
        showBlock()
        $(document).scroll(function() {
            showBlock()
        })
        $(document).on('click', function() {
            showBlock()
        })

        function showBlock() {
            var portfolio__block  = $('.visblock')

            portfolio__block.each(function() {

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this).addClass('is--visible')
                } else {
                    $(this).removeClass('is--visible')
                }
            })
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        // var blockL = `<div class="blog__block is--left visblock is--l-hov">
        //                 <a href="@@pages.article" class="blog__block__inner">
        //                     <div class="blog__block__img">
        //                         <img class="lazy" data-src="img/blog2.jpg" alt="@@title" src="img/blog_placeholder.jpg">
        //                     </div>
        //                     <div class="blog__block__info">
        //                         <div class="blog__block__title"><span>@@title</span></div>
        //                         <div class="blog__block__desc">
        //                             <p>@@desc</p>
        //                         </div>
        //                         <div class="blog__block__btn">
        //                             <span class="btn is--black">Читать</span>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>`;

        // var blockR = `<div class="blog__block is--right visblock is--l-hov">
        //                 <a href="@@pages.article" class="blog__block__inner">
        //                     <div class="blog__block__img">
        //                         <img class="lazy" data-src="img/blog2.jpg" alt="@@title" src="img/blog_placeholder.jpg">
        //                     </div>
        //                     <div class="blog__block__info">
        //                         <div class="blog__block__title"><span>@@title</span></div>
        //                         <div class="blog__block__desc">
        //                             <p>@@desc</p>
        //                         </div>
        //                         <div class="blog__block__btn">
        //                             <span class="btn is--black">Читать</span>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>`;

        // $('.blog__load button').on('click', function() {
        //     $('.blog__block').addClass('is--visible')
        //     document.getElementById('qwerty').insertAdjacentHTML('beforeend', blockL);
        //     document.getElementById('qwerty').insertAdjacentHTML('beforeend', blockR);
        // })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        var colors = [
            'blue',
            'dblue',
            'purple',
            'pink'
        ]

        var currentColor

        $('.is--l-hov').hover(function() {
            currentColor = colors[Math.floor(getRandomArbitrary(0, colors.length))]
            $(this).addClass('is--hover_' + currentColor)
        }, function() {
            $(this).removeClass('is--hover_' + currentColor)
        })

        $('.services-icons__block').hover(function() {
            var thisId = $(this).data('iconid')

            // var home = new Vivus(thisId, {
            //     type: 'scenario',
            //     animTimingFunction: Vivus.EASE,
            //     onReady: function() {
            //         console.log('onReady')
            //     },
            // });
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var timer

        // $('.footer__menus__inner ul li a').mouseenter(function() {
        //     $(this).addClass('is--hide')
        // })

        // $('.footer__menus__inner ul li a').mouseleave(function() {
            
        //     var thisLink = $(this)
        //     thisLink.addClass('is--hide')

        //     thisLink.after().on('transitionend', function() {
        //         thisLink.removeClass('is--hide')
        //     })
           
        // })

    })
})(jQuery);
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
(function($) {
    "use strict"
    $(function() {

        var elements = {
            container: $('.geometry'),
            circle: $('.geometry__circle')
        }

        setGeometry()

        function setGeometry() {
            var height = $(window).innerHeight()
            elements.circle.css('width', height)
            elements.circle.css('height', height)
            if($('.footer').visible(true)) {
                elements.container.addClass('is--stop')
            }else {
                elements.container.removeClass('is--stop')
            }

            if($('.presentation__next').visible(true)
            || $('.form').visible(true)
            || $('.footer').visible(true)) {
                $('.presentation__arrows').addClass('is--stop')
            }else {
                $('.presentation__arrows').removeClass('is--stop')
            }
        }

        $(window).resize(function() {
            setGeometry()
        })

        $(document).scroll(function() {
            setGeometry()
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function setPosititionForDavid(e) {
            var percentage = e.clientX / $(window).innerWidth() * 100

            $('#svgDavid').css({
                "transform": "translate3d(-" + e.clientX / 40 + "px, 0, 0)"
            })
        }

        function getRandomTransform(x_min, x_max, y_min, y_max, scale_min, scale_max, rotate_min, rotate_max) {

            var x = getRandomArbitrary(x_min, x_max)
            var y = getRandomArbitrary(y_min, y_max)
            var scale = getRandomArbitrary(scale_min, scale_max)
            var rotate = getRandomArbitrary(rotate_min, rotate_max)

            return 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ') rotate(' + rotate + 'deg)'
        }


        $('.banner').mousemove(function(e) {
            setPosititionForDavid(e)
        })

        $('.navbar').mousemove(function(e) {
            setPosititionForDavid(e)
        })

        $('.animationSvg path').each(function() {

            var thisTransform = getRandomTransform(-1500, 1500, -1500, 1500, 0, 1, -400, 400)

            $(this).css({
                '-webkit-transform' : thisTransform,
                '-moz-transform'    : thisTransform,
                '-ms-transform'     : thisTransform,
                '-o-transform'      : thisTransform,
                'transform': thisTransform,
                "transition": getRandomArbitrary(.5, 3) + 's all ease'
            })

            // console.log(thisTransform)
        })

        /*
        $('.teamIll').hover(function() {
            $(this).children('path').each(function() {
                var thisTransform = getRandomTransform(-10, 10, -10, 10, 1, 1, 0, 0)
                $(this).css({
                    '-webkit-transform' : thisTransform,
                    '-moz-transform'    : thisTransform,
                    '-ms-transform'     : thisTransform,
                    '-o-transform'      : thisTransform,
                    'transform': thisTransform,
                    "transition": getRandomArbitrary(.5, 3) + 's all ease'
                })
            })
        }, function() {
            $(this).children('path').each(function() {
                $(this).css({
                    'transform': 'translate3d(0, 0, 0)'
                })
            })
        })
        */

        setTimeout(function() {
            $('.animationSvg path').each(function() {
                $(this).css({
                    'transform': 'translate3d(0, 0, 0)'
                })
            })
        }, 1000)

        // var ill_s = $('.servicescur__top__ill span').tilt()
        // ill_s.on('change', function(e, transforms){
        //     console.log(e, transforms)
        // });

        var jobsTimer

        $('.jobsImageTarget').hover(function() {
            clearTimeout(jobsTimer)
            $('.jobsImageHidden').addClass('jobsImageHidden-visible')
            $('.jobsImageLabel').removeClass('is--active')
        }, function() {
            clearTimeout(jobsTimer)
            $('.jobsImageHidden').removeClass('jobsImageHidden-visible')
            $('.jobsImageLabel').addClass('is--active')
        })
        
        $('.banner__down button').on('click', function() {

            var dataScrollItem = $(this).data('scrollitem')

            $('html, body').animate({
                scrollTop: $(dataScrollItem).innerHeight()
            }, 1000, "swing");
        })

        $(document).on('click', 'a._anchor[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1500);
        });

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $('.bl-sx__items').slick({
            prevArrow: '.bl-sx__controls button.is--prev',
            nextArrow: '.bl-sx__controls button.is--next',
            adaptiveHeight: true
        });

    })
})(jQuery);
lazyLoadImages();

function lazyLoadImages() {
    var images = document.querySelectorAll('.lazy');
    window.addEventListener('load', function() {
    for(var i = 0; i < images.length; i++) {
        images[i].src = images[i].dataset.src;
        images[i].removeAttribute('data-src');
        }
    });
}
var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(52.974394, 36.059105),
            zoom: 18,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "invert_lightness": true
                        },
                        {
                            "saturation": 10
                        },
                        {
                            "lightness": 30
                        },
                        {
                            "gamma": 0.5
                        },
                        {
                            "hue": "#435158"
                        }
                    ]
                }
            ]
          });
          var icon = 'http://frontend.dev.dorohovdesign.ru/dd/img/marker.png';

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(52.974394, 36.059105),
                icon: icon,
                map: map
            });
        }

(function($) {
    "use strict"
    $(function() {

        var mapBlock = $('#map')

        resizeMap();

        $(window).resize(function() {
            resizeMap()
        })

        function resizeMap() {
            if(mapBlock.length) {
                mapBlock.css({
                    "height": "calc(100vh - " + $('.footer').innerHeight() + "px)"
                })
            }
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var closeTimer

        anime({
            targets: '.mobile__container',
            translateX: '100vw', // -> '250px'
            duration: 0,
          });

        anime({
            targets: '.__mobLink',
            translateY: 45, // -> '250px'
            duration: 0,
        });

        var isOpen = false
        var isClick = true

        $('#mobileMenu').on('click', function() {
            $('body').addClass('is--mobmenu')
            if(!isOpen && isClick) {
                isClick = false
                anime({
                    targets: '.mobile__container',
                    translateX: 0,
                    easing: 'easeInOutQuint',
                    begin: function(anim) {
                        anime({
                            targets: '#mobileMenu',
                            rotate: 135, // -> '250px'
                            duration: 10,
                          });
                    },
                    complete: function(anim) {
                        
                    }
                })
                anime({
                    targets: '.__mobLink',
                    translateY: 0, // -> '250px'
                    // translateX: 0,
                    delay: anime.stagger(150),
                    complete: function(amim) {
                        $('#mobileMenu').addClass('is--active')
                        isOpen = !isOpen
                        isClick = true
                    }
                });
            }else if(isOpen && isClick) {
                isClick = false
                $('#mobileMenu').removeClass('is--active')
                clearTimeout(closeTimer)
                setTimeout(function() {
                    anime({
                        targets: '.mobile__container',
                        translateX: '100vw',
                        duration: 2000
                    })
                }, 400)
                anime({
                    targets: '.__mobLink',
                    translateY: 45, // -> '250px'
                    delay: anime.stagger(80),
                    complete: function(anim) {
                        anime({
                            targets: '#mobileMenu',
                            rotate: 0, // -> '250px'
                            duration: 10,
                          });
                          isOpen = !isOpen
                          isClick = true
                          $('body').removeClass('is--mobmenu')
                    }
                })
            }

        })

        var lastScrollTop = 0
        toggleFixedNavbar()

        $(document).scroll(function(e) {
            toggleFixedNavbar()
            var st = $(this).scrollTop()
            if (st > lastScrollTop){
                // hideNavbar()
            } else {
                showNavbar()
            }
            lastScrollTop = st
        })

        function toggleFixedNavbar() {
            var scrollTop = $(document).scrollTop()
            if(scrollTop > $('.navbar').innerHeight()) {
                $('.navbar').addClass('is--fixed')
                if(scrollTop > $('.navbar').innerHeight() + 130) {
                    hideNavbar()
                }
            }else {
                $('.navbar').removeClass('is--fixed')
            }
        }

        function showNavbar() {
            $('.navbar').removeClass('is--hide')
        }

        function hideNavbar() {
            $('.navbar').addClass('is--hide')
        }

    })
})(jQuery);

(function($) {
    "use strict"
    $(function() {


        var index = window.location.href.indexOf('/portfolio/');

        if(index > 0) {
            if(window.location.href.split('/portfolio/')[1].length > 1) {
                $('.navbar').removeClass('is--transparent')
                        .addClass('is--dark')
            }
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $('.presentation__carousel__items').slick({
            prevArrow: '.presentation__carousel__arrow.is--prev',
            nextArrow: '.presentation__carousel__arrow.is--next'
        });

        $('.presentation').css({
            "padding-top": $('.navbar').innerHeight()
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        startAnimation()
        teamAnimation() 
        $(document).scroll(function() {
            startAnimation()
            teamAnimation() 
        })

        function startAnimation() {
            var animation_element = $('.__anim')

            animation_element.each(function() {

                var a_e_transition = $(this).data('animtransition')
                var a_e_animation = $(this).data('animtype')
                var a_e_delay = $(this).data('animdelay')

                $(this).css({
                    "transition": a_e_transition + 's all ease',
                    "-webkit-animation-delay": a_e_delay + 's',
                    "-moz-animation-delay": a_e_delay + 's',
                    "-o-animation-delay": a_e_delay + 's',
                    "animation-delay": a_e_delay + 's'
                })

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this)
                        .addClass('animated')
                        .addClass('is--show')
                        .addClass(a_e_animation)
                } else {
                    $(this)
                        .removeClass('animated')
                        .removeClass('is--show')
                        .removeClass(a_e_animation)
                }
            })
        }

        function teamAnimation() {
            if($('.about__team__content').visible( true )) {
                $('.teamPic').addClass('is--animated')
            }else {
                $('.teamPic').removeClass('is--animated')
            }
        }

    })
})(jQuery);
// var s = skrollr.init();
(function($) {
    "use strict"
    $(function() {

        var prof, animationTimer

        $('.teamPic').hover(function(e) {
            clearTimeout(animationTimer)
            var _this = $(this).attr('id')
            prof = $(this).attr('id')
            $('#teamHeading span').addClass('is--animate')
            $('.about__team__inner').removeClass('bgtext')
            $('.about__team__content__cloud').addClass('is--active')
            $('#teamHeading span').html($(this).data('profname'))
            $('.about__team').addClass('is--' + prof)
            $('.teamPic').each(function() {
                if($(this).attr('id') != _this) {
                    $(this).addClass('is--unhover')
                }
            })
        }, function() {
            $('.about__team').removeClass('is--' + prof)
            $('.about__team__content__cloud').removeClass('is--active')
            $('#teamHeading span').removeClass('is--animate')
            $('.teamPic').removeClass('is--unhover')
            $('#teamHeading span').html('Наша команда')
            $('.about__team__inner').addClass('bgtext')
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiY2FyZHNfaG92ZXIuanMiLCJmb290ZXIuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhbmRpbmdfYi5qcyIsImxhenkuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJvci5qcyIsInByZXMuanMiLCJwcmVzZW50YXRpb25fY2Fyb3VzZWwuanMiLCJzY3JvbGxfYW5pbWF0aW9uLmpzIiwic2tyb2xsci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BIQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VBY2NvcmRpb24odHlwZSwgYm94KSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX19jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAkKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gJ25vbkN1cnJlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKVswXSAhPSAkKGJveClbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5BY2NvcmRpb24oYm94KSB7XHJcbiAgICAgICAgICAgIGNsb3NlQWNjb3JkaW9uKCdub25DdXJyZW50JywgJChib3gpLnBhcmVudCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKSlcclxuICAgICAgICAgICAgJChib3gpLnNpYmxpbmdzKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fY29udGVudCcpLnNsaWRlVG9nZ2xlKHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoYm94KS5wYXJlbnQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9zZUFjY29yZGlvbignYWxsJylcclxuXHJcbiAgICAgICAgdmFyIGlzT3BlbiA9IGZhbHNlXHJcblxyXG4gICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihpc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIG9wZW5BY2NvcmRpb24odGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUJnKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwbGF5QmcoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwbGF5QmcoKSB7XHJcbiAgICAgICAgICAgICQoJy5iZ3RleHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcuaGVhZGluZy5pcy0tYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGMgPSAxXHJcbiAgICAgICAgLy8gdmFyIHIgPSAuNlxyXG5cclxuICAgICAgICAvLyB2YXIgY2VudGVyVHJhbnNmb3JtID0gY1xyXG4gICAgICAgIC8vIHZhciByaWdodFRyYW5zZm9ybSA9IHJcclxuICAgICAgICAvLyB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAvLyAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcCArICQoXCIucG9ydGZvbGlvX19pbm5lclwiKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAvLyAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgtJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgcmlnaHRUcmFuc2Zvcm0gKyAncHgpJ1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGNlbnRlclRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKCcgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2VudGVyVHJhbnNmb3JtICs9IGNcclxuICAgICAgICAvLyAgICAgICAgIHJpZ2h0VHJhbnNmb3JtICs9IHJcclxuICAgICAgICAvLyAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tY2VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2suaXMtLXJpZ2h0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXJUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjZW50ZXJUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dCbG9jaygpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93QmxvY2soKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3J0Zm9saW9fX2Jsb2NrICA9ICQoJy52aXNibG9jaycpXHJcblxyXG4gICAgICAgICAgICBwb3J0Zm9saW9fX2Jsb2NrLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLXZpc2libGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGJsb2NrTCA9IGA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2sgaXMtLWxlZnQgdmlzYmxvY2sgaXMtLWwtaG92XCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJAQHBhZ2VzLmFydGljbGVcIiBjbGFzcz1cImJsb2dfX2Jsb2NrX19pbm5lclwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrX19pbWdcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eVwiIGRhdGEtc3JjPVwiaW1nL2Jsb2cyLmpwZ1wiIGFsdD1cIkBAdGl0bGVcIiBzcmM9XCJpbWcvYmxvZ19wbGFjZWhvbGRlci5qcGdcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrX19pbmZvXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrX190aXRsZVwiPjxzcGFuPkBAdGl0bGU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrX19kZXNjXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkBAZGVzYzwvcD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2J0blwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBpcy0tYmxhY2tcIj7Qp9C40YLQsNGC0Yw8L3NwYW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIC8vIHZhciBibG9ja1IgPSBgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrIGlzLS1yaWdodCB2aXNibG9jayBpcy0tbC1ob3ZcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIkBAcGFnZXMuYXJ0aWNsZVwiIGNsYXNzPVwiYmxvZ19fYmxvY2tfX2lubmVyXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2ltZ1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5XCIgZGF0YS1zcmM9XCJpbWcvYmxvZzIuanBnXCIgYWx0PVwiQEB0aXRsZVwiIHNyYz1cImltZy9ibG9nX3BsYWNlaG9sZGVyLmpwZ1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2luZm9cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX3RpdGxlXCI+PHNwYW4+QEB0aXRsZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2Rlc2NcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QEBkZXNjPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19fYnRuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGlzLS1ibGFja1wiPtCn0LjRgtCw0YLRjDwvc3Bhbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgLy8gJCgnLmJsb2dfX2xvYWQgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICQoJy5ibG9nX19ibG9jaycpLmFkZENsYXNzKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxd2VydHknKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGJsb2NrTCk7XHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxd2VydHknKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGJsb2NrUik7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29sb3JzID0gW1xyXG4gICAgICAgICAgICAnYmx1ZScsXHJcbiAgICAgICAgICAgICdkYmx1ZScsXHJcbiAgICAgICAgICAgICdwdXJwbGUnLFxyXG4gICAgICAgICAgICAncGluaydcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50Q29sb3JcclxuXHJcbiAgICAgICAgJCgnLmlzLS1sLWhvdicpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29sb3IgPSBjb2xvcnNbTWF0aC5mbG9vcihnZXRSYW5kb21BcmJpdHJhcnkoMCwgY29sb3JzLmxlbmd0aCkpXVxyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0taG92ZXJfJyArIGN1cnJlbnRDb2xvcilcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLWhvdmVyXycgKyBjdXJyZW50Q29sb3IpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnNlcnZpY2VzLWljb25zX19ibG9jaycpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lkID0gJCh0aGlzKS5kYXRhKCdpY29uaWQnKVxyXG5cclxuICAgICAgICAgICAgLy8gdmFyIGhvbWUgPSBuZXcgVml2dXModGhpc0lkLCB7XHJcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiAnc2NlbmFyaW8nLFxyXG4gICAgICAgICAgICAvLyAgICAgYW5pbVRpbWluZ0Z1bmN0aW9uOiBWaXZ1cy5FQVNFLFxyXG4gICAgICAgICAgICAvLyAgICAgb25SZWFkeTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ29uUmVhZHknKVxyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHRpbWVyXHJcblxyXG4gICAgICAgIC8vICQoJy5mb290ZXJfX21lbnVzX19pbm5lciB1bCBsaSBhJykubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIC8vICQoJy5mb290ZXJfX21lbnVzX19pbm5lciB1bCBsaSBhJykubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHZhciB0aGlzTGluayA9ICQodGhpcylcclxuICAgICAgICAvLyAgICAgdGhpc0xpbmsuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXNMaW5rLmFmdGVyKCkub24oJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXNMaW5rLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmZvcm1fX2dyb3VwLmlzLS10ZXh0IGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLS1mb2N1cycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLXRleHQgaW5wdXQnKS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXMtLWZvY3VzJylcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtLW5vdGVtcHR5JylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXMtLW5vdGVtcHR5JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNyZXN1bWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGZuID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gZm4ubWF0Y2goL1teXFxcXC9dKiQvKVswXTtcclxuXHJcbiAgICAgICAgICAgICQoJ2xhYmVsLmlzLS1yZXN1bWUnKS5odG1sKGZpbGVuYW1lKVxyXG4gICAgICAgICAgICAkKCdsYWJlbC5pcy0tcmVzdW1lJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93RXJyb3IoZm9ybSwgaW5wdXQsIGVycm9yLCBpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnBhcmVudCgnLmZvcm1fX2dyb3VwJykuYWRkQ2xhc3MoJ2lzLS1lcnJvcicpXHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5zaWJsaW5ncygnbGFiZWwnKS5odG1sKGlucHV0TmFtZSArICcgPHNwYW4gY2xhc3M9XCJpcy0tZXJyb3JcIj4oJyArIGVycm9yICsgJyk8c3Bhbj4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJFcnJvcihmb3JtLCBpbnB1dCwgaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5wYXJlbnQoJy5mb3JtX19ncm91cCcpLnJlbW92ZUNsYXNzKCdpcy0tZXJyb3InKVxyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkuc2libGluZ3MoJ2xhYmVsJykuaHRtbChpbnB1dE5hbWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBuYW1lVmFsaWRhdGlvbihfZm9ybSwgbmFtZSkge1xyXG4gICAgICAgICAgICBpZighdmFsaWRhdG9yLmlzTGVuZ3RoKG5hbWUsIHttaW46MywgbWF4OjIwfSkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihfZm9ybSwgJ25hbWUnLCAn0J7RgiAz0YUg0LTQviAyMCDRgdC40LzQstC+0LvQvtCyJywgJ9CY0LzRjycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFcnJvcihfZm9ybSwgJ25hbWUnLCAn0JjQvNGPJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBob25lVmFsaWRhdGlvbihfZm9ybSwgcGhvbmUpIHtcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRvci5pc01vYmlsZVBob25lKHBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKF9mb3JtLCAncGhvbmUnLCAn0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJywgJ9Ci0LXQu9C10YTQvtC9JylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKF9mb3JtLCAncGhvbmUnLCAn0KLQtdC70LXRhNC+0L0nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZW1haWxWYWxpZGF0aW9uKF9mb3JtLCBlbWFpbCkge1xyXG4gICAgICAgICAgICBpZighdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoX2Zvcm0sICdtYWlsJywgJ9CS0LLQtdC00LjRgtC1INC/0L7Rh9GC0YMnLCAn0J/QvtGH0YLQsCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFcnJvcihfZm9ybSwgJ21haWwnLCAn0J/QvtGH0YLQsCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjbWFpbkZvcm0gZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB2YXIgX2Zvcm0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuZmluZCgnaW5wdXQjbmFtZScpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSAkKHRoaXMpLmZpbmQoJ2lucHV0I21haWwnKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHBob25lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNwaG9uZScpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdW1lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNyZXN1bWUnKS52YWwoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYobmFtZVZhbGlkYXRpb24oX2Zvcm0sIG5hbWUpICYmIHBob25lVmFsaWRhdGlvbihfZm9ybSwgcGhvbmUpICYmIGVtYWlsVmFsaWRhdGlvbihfZm9ybSwgZW1haWwpKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy9mb3Jtc2F2ZS8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdW1lOiByZXN1bWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZm9ybV9tb2RhbCcpLm1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9mb3Jtc2F2ZS8nICxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAgXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09JzEnKXtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNmb3JtX21vZGFsJykubW9kYWwoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluRm9ybSBmb3JtJykuZmluZCgnaW5wdXQjbmFtZScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbWFpbkZvcm0gZm9ybScpLmZpbmQoJ2lucHV0I21haWwnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21haW5Gb3JtIGZvcm0nKS5maW5kKCdpbnB1dCNwaG9uZScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbWFpbkZvcm0gZm9ybScpLmZpbmQoJ2lucHV0I3Jlc3VtZScpLnZhbCgnJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KfRgtC+INGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuignKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRfZm9ybScpLmh0bWwoJ9CY0LzRjzogJytyZXN1bHQubmFtZSsnPGJyPtCi0LXQu9C10YTQvtC9OiAnK3Jlc3VsdC5waG9uZW51bWJlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy8g0JTQsNC90L3Ri9C1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8kKCcjcmVzdWx0X2Zvcm0nKS5odG1sKCfQntGI0LjQsdC60LAuINCU0LDQvdC90YvQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdGLLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KfRgtC+INGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuignKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24gaW5wdXQjbmFtZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWVWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNwaG9uZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBob25lVmFsaWRhdGlvbigkKCdmb3JtLmlzLS12YWxpZGF0aW9uJyksIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24gaW5wdXQjbWFpbCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVtYWlsVmFsaWRhdGlvbigkKCdmb3JtLmlzLS12YWxpZGF0aW9uJyksIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAkKCcuZ2VvbWV0cnknKSxcclxuICAgICAgICAgICAgY2lyY2xlOiAkKCcuZ2VvbWV0cnlfX2NpcmNsZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHZW9tZXRyeSgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnd2lkdGgnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmNpcmNsZS5jc3MoJ2hlaWdodCcsIGhlaWdodClcclxuICAgICAgICAgICAgaWYoJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5hZGRDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLS1zdG9wJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoJCgnLnByZXNlbnRhdGlvbl9fbmV4dCcpLnZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgfHwgJCgnLmZvcm0nKS52aXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgIHx8ICQoJy5mb290ZXInKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJlc2VudGF0aW9uX19hcnJvd3MnKS5hZGRDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJlc2VudGF0aW9uX19hcnJvd3MnKS5yZW1vdmVDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRHZW9tZXRyeSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRHZW9tZXRyeSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGUuY2xpZW50WCAvICQod2luZG93KS5pbm5lcldpZHRoKCkgKiAxMDBcclxuXHJcbiAgICAgICAgICAgICQoJyNzdmdEYXZpZCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKC1cIiArIGUuY2xpZW50WCAvIDQwICsgXCJweCwgMCwgMClcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tVHJhbnNmb3JtKHhfbWluLCB4X21heCwgeV9taW4sIHlfbWF4LCBzY2FsZV9taW4sIHNjYWxlX21heCwgcm90YXRlX21pbiwgcm90YXRlX21heCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBnZXRSYW5kb21BcmJpdHJhcnkoeF9taW4sIHhfbWF4KVxyXG4gICAgICAgICAgICB2YXIgeSA9IGdldFJhbmRvbUFyYml0cmFyeSh5X21pbiwgeV9tYXgpXHJcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IGdldFJhbmRvbUFyYml0cmFyeShzY2FsZV9taW4sIHNjYWxlX21heClcclxuICAgICAgICAgICAgdmFyIHJvdGF0ZSA9IGdldFJhbmRvbUFyYml0cmFyeShyb3RhdGVfbWluLCByb3RhdGVfbWF4KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApIHNjYWxlKCcgKyBzY2FsZSArICcpIHJvdGF0ZSgnICsgcm90YXRlICsgJ2RlZyknXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcicpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXInKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5pbWF0aW9uU3ZnIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNUcmFuc2Zvcm0gPSBnZXRSYW5kb21UcmFuc2Zvcm0oLTE1MDAsIDE1MDAsIC0xNTAwLCAxNTAwLCAwLCAxLCAtNDAwLCA0MDApXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJyAgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGdldFJhbmRvbUFyYml0cmFyeSguNSwgMykgKyAncyBhbGwgZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNUcmFuc2Zvcm0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAkKCcudGVhbUlsbCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzVHJhbnNmb3JtID0gZ2V0UmFuZG9tVHJhbnNmb3JtKC0xMCwgMTAsIC0xMCwgMTAsIDEsIDEsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGdldFJhbmRvbUFyYml0cmFyeSguNSwgMykgKyAncyBhbGwgZWFzZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmFuaW1hdGlvblN2ZyBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICAvLyB2YXIgaWxsX3MgPSAkKCcuc2VydmljZXNjdXJfX3RvcF9faWxsIHNwYW4nKS50aWx0KClcclxuICAgICAgICAvLyBpbGxfcy5vbignY2hhbmdlJywgZnVuY3Rpb24oZSwgdHJhbnNmb3Jtcyl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUsIHRyYW5zZm9ybXMpXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHZhciBqb2JzVGltZXJcclxuXHJcbiAgICAgICAgJCgnLmpvYnNJbWFnZVRhcmdldCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoam9ic1RpbWVyKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlSGlkZGVuJykuYWRkQ2xhc3MoJ2pvYnNJbWFnZUhpZGRlbi12aXNpYmxlJylcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUxhYmVsJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoam9ic1RpbWVyKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlSGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2pvYnNJbWFnZUhpZGRlbi12aXNpYmxlJylcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUxhYmVsJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fZG93biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhU2Nyb2xsSXRlbSA9ICQodGhpcykuZGF0YSgnc2Nyb2xsaXRlbScpXHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoZGF0YVNjcm9sbEl0ZW0pLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSwgMTAwMCwgXCJzd2luZ1wiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5fYW5jaG9yW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmJsLXN4X19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmJsLXN4X19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuYmwtc3hfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJsYXp5TG9hZEltYWdlcygpO1xyXG5cclxuZnVuY3Rpb24gbGF6eUxvYWRJbWFnZXMoKSB7XHJcbiAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenknKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnNyYyA9IGltYWdlc1tpXS5kYXRhc2V0LnNyYztcclxuICAgICAgICBpbWFnZXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwidmFyIG1hcDtcclxuICAgICAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk3NDM5NCwgMzYuMDU5MTA1KSxcclxuICAgICAgICAgICAgem9vbTogMTgsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnZlcnRfbGlnaHRuZXNzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogMC41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHVlXCI6IFwiIzQzNTE1OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIGljb24gPSAnaHR0cDovL2Zyb250ZW5kLmRldi5kb3JvaG92ZGVzaWduLnJ1L2RkL2ltZy9tYXJrZXIucG5nJztcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk3NDM5NCwgMzYuMDU5MTA1KSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBtYXBCbG9jayA9ICQoJyNtYXAnKVxyXG5cclxuICAgICAgICByZXNpemVNYXAoKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzaXplTWFwKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVNYXAoKSB7XHJcbiAgICAgICAgICAgIGlmKG1hcEJsb2NrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbWFwQmxvY2suY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcImNhbGMoMTAwdmggLSBcIiArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpICsgXCJweClcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNsb3NlVGltZXJcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogJzEwMHZ3JywgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBmYWxzZVxyXG4gICAgICAgIHZhciBpc0NsaWNrID0gdHJ1ZVxyXG5cclxuICAgICAgICAkKCcjbW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tb2JtZW51JylcclxuICAgICAgICAgICAgaWYoIWlzT3BlbiAmJiBpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1aW50JyxcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnI21vYmlsZU1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAxMzUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDE1MCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFtaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGljayA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoaXNPcGVuICYmIGlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lcilcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSwgNDAwKVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiA0NSwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDgwKSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnI21vYmlsZU1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAwLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuID0gIWlzT3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tbW9ibWVudScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuICAgICAgICB0b2dnbGVGaXhlZE5hdmJhcigpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZpeGVkTmF2YmFyKClcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGVOYXZiYXIoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd05hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRml4ZWROYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAxMzApIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93TmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIiIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJy9wb3J0Zm9saW8vJyk7XHJcblxyXG4gICAgICAgIGlmKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnL3BvcnRmb2xpby8nKVsxXS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS10cmFuc3BhcmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLWRhcmsnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5wcmVzZW50YXRpb25fX2Nhcm91c2VsX19hcnJvdy5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5wcmVzZW50YXRpb25fX2Nhcm91c2VsX19hcnJvdy5pcy0tbmV4dCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnByZXNlbnRhdGlvbicpLmNzcyh7XHJcbiAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgdGVhbUFuaW1hdGlvbigpIFxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgICAgICB0ZWFtQW5pbWF0aW9uKCkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25fZWxlbWVudCA9ICQoJy5fX2FuaW0nKVxyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uX2VsZW1lbnQuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX3RyYW5zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ2FuaW10cmFuc2l0aW9uJylcclxuICAgICAgICAgICAgICAgIHZhciBhX2VfYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHlwZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogYV9lX3RyYW5zaXRpb24gKyAncyBhbGwgZWFzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItbW96LWFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGFfZV9hbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0ZWFtQW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICBpZigkKCcuYWJvdXRfX3RlYW1fX2NvbnRlbnQnKS52aXNpYmxlKCB0cnVlICkpIHtcclxuICAgICAgICAgICAgICAgICQoJy50ZWFtUGljJykuYWRkQ2xhc3MoJ2lzLS1hbmltYXRlZCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy50ZWFtUGljJykucmVtb3ZlQ2xhc3MoJ2lzLS1hbmltYXRlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIvLyB2YXIgcyA9IHNrcm9sbHIuaW5pdCgpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHByb2YsIGFuaW1hdGlvblRpbWVyXHJcblxyXG4gICAgICAgICQoJy50ZWFtUGljJykuaG92ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uVGltZXIpXHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcykuYXR0cignaWQnKVxyXG4gICAgICAgICAgICBwcm9mID0gJCh0aGlzKS5hdHRyKCdpZCcpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykuYWRkQ2xhc3MoJ2lzLS1hbmltYXRlJylcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19pbm5lcicpLnJlbW92ZUNsYXNzKCdiZ3RleHQnKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2NvbnRlbnRfX2Nsb3VkJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcjdGVhbUhlYWRpbmcgc3BhbicpLmh0bWwoJCh0aGlzKS5kYXRhKCdwcm9mbmFtZScpKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW0nKS5hZGRDbGFzcygnaXMtLScgKyBwcm9mKVxyXG4gICAgICAgICAgICAkKCcudGVhbVBpYycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ2lkJykgIT0gX3RoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tdW5ob3ZlcicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbScpLnJlbW92ZUNsYXNzKCdpcy0tJyArIHByb2YpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbV9fY29udGVudF9fY2xvdWQnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykucmVtb3ZlQ2xhc3MoJ2lzLS1hbmltYXRlJylcclxuICAgICAgICAgICAgJCgnLnRlYW1QaWMnKS5yZW1vdmVDbGFzcygnaXMtLXVuaG92ZXInKVxyXG4gICAgICAgICAgICAkKCcjdGVhbUhlYWRpbmcgc3BhbicpLmh0bWwoJ9Cd0LDRiNCwINC60L7QvNCw0L3QtNCwJylcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19pbm5lcicpLmFkZENsYXNzKCdiZ3RleHQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
