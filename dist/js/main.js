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
            })
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
            if(!validator.isMobilePhone(phone, 'ru-RU')) {
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

        $('form.is--validation').submit(function(e) {
            // e.preventDefault()
            var _form = $(this)
            var name = $(this).find('input#name').val()
            var email = $(this).find('input#mail').val()
            var phone = $(this).find('input#phone').val()
            var resume = $(this).find('input#resume').val()
            if(nameValidation(_form, name) && phoneValidation(_form, phone) && emailValidation(_form, email)) {
                e.preventDefault()

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
        })

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

console.log('dasdasdjkj');
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
var images = document.querySelectorAll('.lazy');
    window.addEventListener('load', function() {
    for(var i = 0; i < images.length; i++) {
        images[i].src = images[i].dataset.src;
        images[i].removeAttribute('data-src');
    }
});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiY2FyZHNfaG92ZXIuanMiLCJmb290ZXIuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhenkuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJwcmVzLmpzIiwicHJlc2VudGF0aW9uX2Nhcm91c2VsLmpzIiwic2Nyb2xsX2FuaW1hdGlvbi5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWNjb3JkaW9uKHR5cGUsIGJveCkge1xyXG4gICAgICAgICAgICBpZih0eXBlID09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlID09ICdub25DdXJyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcylbMF0gIT0gJChib3gpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX19jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuQWNjb3JkaW9uKGJveCkge1xyXG4gICAgICAgICAgICBjbG9zZUFjY29yZGlvbignbm9uQ3VycmVudCcsICQoYm94KS5wYXJlbnQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykpXHJcbiAgICAgICAgICAgICQoYm94KS5zaWJsaW5ncygnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSh7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGJveCkucGFyZW50KCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9zZUFjY29yZGlvbignYWxsJylcclxuXHJcbiAgICAgICAgdmFyIGlzT3BlbiA9IGZhbHNlXHJcblxyXG4gICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihpc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIG9wZW5BY2NvcmRpb24odGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUJnKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwbGF5QmcoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwbGF5QmcoKSB7XHJcbiAgICAgICAgICAgICQoJy5iZ3RleHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJy5oZWFkaW5nLmlzLS1iZ3RleHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyB2YXIgYyA9IDFcclxuICAgICAgICAvLyB2YXIgciA9IC42XHJcblxyXG4gICAgICAgIC8vIHZhciBjZW50ZXJUcmFuc2Zvcm0gPSBjXHJcbiAgICAgICAgLy8gdmFyIHJpZ2h0VHJhbnNmb3JtID0gclxyXG4gICAgICAgIC8vIHZhciBsYXN0U2Nyb2xsVG9wID0gMFxyXG5cclxuICAgICAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKFwiLnBvcnRmb2xpb19faW5uZXJcIikub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKFwiLnBvcnRmb2xpb19faW5uZXJcIikub2Zmc2V0KCkudG9wICsgJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgIC8vICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBjZW50ZXJUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgY2VudGVyVHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgICAgIHZhciByaWdodFRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoLScgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgnICsgY2VudGVyVHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgICAgIHZhciByaWdodFRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIHJpZ2h0VHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjZW50ZXJUcmFuc2Zvcm0gKz0gY1xyXG4gICAgICAgIC8vICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gKz0gclxyXG4gICAgICAgIC8vICAgICBsYXN0U2Nyb2xsVG9wID0gc3RcclxuICAgICAgICBcclxuICAgICAgICAvLyAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrLmlzLS1jZW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tcmlnaHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2snKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlclRyYW5zZm9ybSA9IDBcclxuICAgICAgICAvLyAgICAgICAgICAgICByaWdodFRyYW5zZm9ybSA9IDBcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNlbnRlclRyYW5zZm9ybSlcclxuXHJcbiAgICAgICAgLy8gfSlcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBcclxuICAgICAgICBzaG93QmxvY2soKVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93QmxvY2soKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3J0Zm9saW9fX2Jsb2NrICA9ICQoJy52aXNibG9jaycpXHJcblxyXG4gICAgICAgICAgICBwb3J0Zm9saW9fX2Jsb2NrLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLXZpc2libGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgJ2JsdWUnLFxyXG4gICAgICAgICAgICAnZGJsdWUnLFxyXG4gICAgICAgICAgICAncHVycGxlJyxcclxuICAgICAgICAgICAgJ3BpbmsnXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB2YXIgY3VycmVudENvbG9yXHJcblxyXG4gICAgICAgICQoJy5pcy0tbC1ob3YnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbG9yID0gY29sb3JzW01hdGguZmxvb3IoZ2V0UmFuZG9tQXJiaXRyYXJ5KDAsIGNvbG9ycy5sZW5ndGgpKV1cclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWhvdmVyXycgKyBjdXJyZW50Q29sb3IpXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1ob3Zlcl8nICsgY3VycmVudENvbG9yKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5zZXJ2aWNlcy1pY29uc19fYmxvY2snKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNJZCA9ICQodGhpcykuZGF0YSgnaWNvbmlkJylcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBob21lID0gbmV3IFZpdnVzKHRoaXNJZCwge1xyXG4gICAgICAgICAgICAvLyAgICAgdHlwZTogJ3NjZW5hcmlvJyxcclxuICAgICAgICAgICAgLy8gICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRSxcclxuICAgICAgICAgICAgLy8gICAgIG9uUmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWR5JylcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciB0aW1lclxyXG5cclxuICAgICAgICAvLyAkKCcuZm9vdGVyX19tZW51c19faW5uZXIgdWwgbGkgYScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyAkKCcuZm9vdGVyX19tZW51c19faW5uZXIgdWwgbGkgYScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB2YXIgdGhpc0xpbmsgPSAkKHRoaXMpXHJcbiAgICAgICAgLy8gICAgIHRoaXNMaW5rLmFkZENsYXNzKCdpcy0taGlkZScpXHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzTGluay5hZnRlcigpLm9uKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzTGluay5yZW1vdmVDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmZvcm1fX2dyb3VwLmlzLS10ZXh0IGlucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1mb2N1cycpXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjcmVzdW1lJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBmbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGZuLm1hdGNoKC9bXlxcXFwvXSokLylbMF07XHJcblxyXG4gICAgICAgICAgICAkKCdsYWJlbC5pcy0tcmVzdW1lJykuaHRtbChmaWxlbmFtZSlcclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yKGZvcm0sIGlucHV0LCBlcnJvciwgaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5wYXJlbnQoJy5mb3JtX19ncm91cCcpLmFkZENsYXNzKCdpcy0tZXJyb3InKVxyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkuc2libGluZ3MoJ2xhYmVsJykuaHRtbChpbnB1dE5hbWUgKyAnIDxzcGFuIGNsYXNzPVwiaXMtLWVycm9yXCI+KCcgKyBlcnJvciArICcpPHNwYW4+JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3IoZm9ybSwgaW5wdXQsIGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkucGFyZW50KCcuZm9ybV9fZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtLWVycm9yJylcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnNpYmxpbmdzKCdsYWJlbCcpLmh0bWwoaW5wdXROYW1lKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbmFtZVZhbGlkYXRpb24oX2Zvcm0sIG5hbWUpIHtcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRvci5pc0xlbmd0aChuYW1lLCB7bWluOjMsIG1heDoyMH0pKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoX2Zvcm0sICduYW1lJywgJ9Ce0YIgM9GFINC00L4gMjAg0YHQuNC80LLQvtC70L7QsicsICfQmNC80Y8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICduYW1lJywgJ9CY0LzRjycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwaG9uZVZhbGlkYXRpb24oX2Zvcm0sIHBob25lKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNNb2JpbGVQaG9uZShwaG9uZSwgJ3J1LVJVJykpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihfZm9ybSwgJ3Bob25lJywgJ9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsICfQotC10LvQtdGE0L7QvScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFcnJvcihfZm9ybSwgJ3Bob25lJywgJ9Ci0LXQu9C10YTQvtC9JylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGVtYWlsVmFsaWRhdGlvbihfZm9ybSwgZW1haWwpIHtcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKF9mb3JtLCAnbWFpbCcsICfQktCy0LXQtNC40YLQtSDQv9C+0YfRgtGDJywgJ9Cf0L7Rh9GC0LAnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICdtYWlsJywgJ9Cf0L7Rh9GC0LAnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB2YXIgX2Zvcm0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNuYW1lJykudmFsKClcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gJCh0aGlzKS5maW5kKCdpbnB1dCNtYWlsJykudmFsKClcclxuICAgICAgICAgICAgdmFyIHBob25lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNwaG9uZScpLnZhbCgpXHJcbiAgICAgICAgICAgIHZhciByZXN1bWUgPSAkKHRoaXMpLmZpbmQoJ2lucHV0I3Jlc3VtZScpLnZhbCgpXHJcbiAgICAgICAgICAgIGlmKG5hbWVWYWxpZGF0aW9uKF9mb3JtLCBuYW1lKSAmJiBwaG9uZVZhbGlkYXRpb24oX2Zvcm0sIHBob25lKSAmJiBlbWFpbFZhbGlkYXRpb24oX2Zvcm0sIGVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgJC5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICcvZm9ybXNhdmUvJyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bWU6IHJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNmb3JtX21vZGFsJykubW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNuYW1lJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZVZhbGlkYXRpb24oJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtLmlzLS12YWxpZGF0aW9uIGlucHV0I3Bob25lJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvbmVWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNtYWlsJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW1haWxWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICQoJy5nZW9tZXRyeScpLFxyXG4gICAgICAgICAgICBjaXJjbGU6ICQoJy5nZW9tZXRyeV9fY2lyY2xlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEdlb21ldHJ5KClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0R2VvbWV0cnkoKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICBlbGVtZW50cy5jaXJjbGUuY3NzKCd3aWR0aCcsIGhlaWdodClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgICAgICBpZigkKCcuZm9vdGVyJykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFkZENsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigkKCcucHJlc2VudGF0aW9uX19uZXh0JykudmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICB8fCAkKCcuZm9ybScpLnZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgfHwgJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcmVzZW50YXRpb25fX2Fycm93cycpLmFkZENsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcmVzZW50YXRpb25fX2Fycm93cycpLnJlbW92ZUNsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7XHJcblxyXG5jb25zb2xlLmxvZygnZGFzZGFzZGpraicpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGUuY2xpZW50WCAvICQod2luZG93KS5pbm5lcldpZHRoKCkgKiAxMDBcclxuXHJcbiAgICAgICAgICAgICQoJyNzdmdEYXZpZCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKC1cIiArIGUuY2xpZW50WCAvIDQwICsgXCJweCwgMCwgMClcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tVHJhbnNmb3JtKHhfbWluLCB4X21heCwgeV9taW4sIHlfbWF4LCBzY2FsZV9taW4sIHNjYWxlX21heCwgcm90YXRlX21pbiwgcm90YXRlX21heCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBnZXRSYW5kb21BcmJpdHJhcnkoeF9taW4sIHhfbWF4KVxyXG4gICAgICAgICAgICB2YXIgeSA9IGdldFJhbmRvbUFyYml0cmFyeSh5X21pbiwgeV9tYXgpXHJcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IGdldFJhbmRvbUFyYml0cmFyeShzY2FsZV9taW4sIHNjYWxlX21heClcclxuICAgICAgICAgICAgdmFyIHJvdGF0ZSA9IGdldFJhbmRvbUFyYml0cmFyeShyb3RhdGVfbWluLCByb3RhdGVfbWF4KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApIHNjYWxlKCcgKyBzY2FsZSArICcpIHJvdGF0ZSgnICsgcm90YXRlICsgJ2RlZyknXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcicpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXInKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5pbWF0aW9uU3ZnIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNUcmFuc2Zvcm0gPSBnZXRSYW5kb21UcmFuc2Zvcm0oLTE1MDAsIDE1MDAsIC0xNTAwLCAxNTAwLCAwLCAxLCAtNDAwLCA0MDApXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJyAgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGdldFJhbmRvbUFyYml0cmFyeSguNSwgMykgKyAncyBhbGwgZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNUcmFuc2Zvcm0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAkKCcudGVhbUlsbCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzVHJhbnNmb3JtID0gZ2V0UmFuZG9tVHJhbnNmb3JtKC0xMCwgMTAsIC0xMCwgMTAsIDEsIDEsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGdldFJhbmRvbUFyYml0cmFyeSguNSwgMykgKyAncyBhbGwgZWFzZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmFuaW1hdGlvblN2ZyBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICAvLyB2YXIgaWxsX3MgPSAkKCcuc2VydmljZXNjdXJfX3RvcF9faWxsIHNwYW4nKS50aWx0KClcclxuICAgICAgICAvLyBpbGxfcy5vbignY2hhbmdlJywgZnVuY3Rpb24oZSwgdHJhbnNmb3Jtcyl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUsIHRyYW5zZm9ybXMpXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHZhciBqb2JzVGltZXJcclxuXHJcbiAgICAgICAgJCgnLmpvYnNJbWFnZVRhcmdldCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoam9ic1RpbWVyKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlSGlkZGVuJykuYWRkQ2xhc3MoJ2pvYnNJbWFnZUhpZGRlbi12aXNpYmxlJylcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUxhYmVsJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoam9ic1RpbWVyKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlSGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2pvYnNJbWFnZUhpZGRlbi12aXNpYmxlJylcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUxhYmVsJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fZG93biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhU2Nyb2xsSXRlbSA9ICQodGhpcykuZGF0YSgnc2Nyb2xsaXRlbScpXHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoZGF0YVNjcm9sbEl0ZW0pLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSwgMTAwMCwgXCJzd2luZ1wiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5fYW5jaG9yW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eScpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbWFnZXNbaV0uc3JjID0gaW1hZ2VzW2ldLmRhdGFzZXQuc3JjO1xyXG4gICAgICAgIGltYWdlc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcbiAgICB9XHJcbn0pOyIsInZhciBtYXA7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbiAgICAgICAgICAgIHpvb206IDE4LFxyXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW52ZXJ0X2xpZ2h0bmVzc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbW1hXCI6IDAuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiM0MzUxNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBpY29uID0gJ2h0dHA6Ly9mcm9udGVuZC5kZXYuZG9yb2hvdmRlc2lnbi5ydS9kZC9pbWcvbWFya2VyLnBuZyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uLFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgbWFwQmxvY2sgPSAkKCcjbWFwJylcclxuXHJcbiAgICAgICAgcmVzaXplTWFwKCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZU1hcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplTWFwKCkge1xyXG4gICAgICAgICAgICBpZihtYXBCbG9jay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1hcEJsb2NrLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJjYWxjKDEwMHZoIC0gXCIgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKSArIFwicHgpXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBjbG9zZVRpbWVyXHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDQ1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICB2YXIgaXNDbGljayA9IHRydWVcclxuXHJcbiAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tbW9ibWVudScpXHJcbiAgICAgICAgICAgIGlmKCFpc09wZW4gJiYgaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMTM1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbWltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGlzT3BlbiAmJiBpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig4MCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdG9nZ2xlRml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaXhlZE5hdmJhcigpXHJcbiAgICAgICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgMTMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdmJhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd05hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcvcG9ydGZvbGlvLycpO1xyXG5cclxuICAgICAgICBpZihpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy9wb3J0Zm9saW8vJylbMV0ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tdHJhbnNwYXJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLS1kYXJrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnByZXNlbnRhdGlvbl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLW5leHQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5wcmVzZW50YXRpb24nKS5jc3Moe1xyXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIHRlYW1BbmltYXRpb24oKSBcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICAgICAgICAgICAgdGVhbUFuaW1hdGlvbigpIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uX2VsZW1lbnQgPSAkKCcuX19hbmltJylcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbl9lbGVtZW50LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV90cmFuc2l0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHJhbnNpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2FuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnYW5pbXR5cGUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV9kZWxheSA9ICQodGhpcykuZGF0YSgnYW5pbWRlbGF5JylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGFfZV90cmFuc2l0aW9uICsgJ3MgYWxsIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncydcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYV9lX2FuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGVhbUFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJCgnLmFib3V0X190ZWFtX19jb250ZW50JykudmlzaWJsZSggdHJ1ZSApKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLmFkZENsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcHJvZiwgYW5pbWF0aW9uVGltZXJcclxuXHJcbiAgICAgICAgJCgnLnRlYW1QaWMnKS5ob3ZlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lcilcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKS5hdHRyKCdpZCcpXHJcbiAgICAgICAgICAgIHByb2YgPSAkKHRoaXMpLmF0dHIoJ2lkJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5hZGRDbGFzcygnaXMtLWFuaW1hdGUnKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2lubmVyJykucmVtb3ZlQ2xhc3MoJ2JndGV4dCcpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbV9fY29udGVudF9fY2xvdWQnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykuaHRtbCgkKHRoaXMpLmRhdGEoJ3Byb2ZuYW1lJykpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbScpLmFkZENsYXNzKCdpcy0tJyArIHByb2YpXHJcbiAgICAgICAgICAgICQoJy50ZWFtUGljJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignaWQnKSAhPSBfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS11bmhvdmVyJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtJykucmVtb3ZlQ2xhc3MoJ2lzLS0nICsgcHJvZilcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19jb250ZW50X19jbG91ZCcpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5yZW1vdmVDbGFzcygnaXMtLWFuaW1hdGUnKVxyXG4gICAgICAgICAgICAkKCcudGVhbVBpYycpLnJlbW92ZUNsYXNzKCdpcy0tdW5ob3ZlcicpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykuaHRtbCgn0J3QsNGI0LAg0LrQvtC80LDQvdC00LAnKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2lubmVyJykuYWRkQ2xhc3MoJ2JndGV4dCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
