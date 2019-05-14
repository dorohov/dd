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
          var icon = 'http://frontend.dorohovdesign.ru/dd/img/marker.png';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiY2FyZHNfaG92ZXIuanMiLCJmb290ZXIuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhenkuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJwcmVzLmpzIiwicHJlc2VudGF0aW9uX2Nhcm91c2VsLmpzIiwic2Nyb2xsX2FuaW1hdGlvbi5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFjY29yZGlvbih0eXBlLCBib3gpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnbm9uQ3VycmVudCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpWzBdICE9ICQoYm94KVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkFjY29yZGlvbihib3gpIHtcclxuICAgICAgICAgICAgY2xvc2VBY2NvcmRpb24oJ25vbkN1cnJlbnQnLCAkKGJveCkucGFyZW50KCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpKVxyXG4gICAgICAgICAgICAkKGJveCkuc2libGluZ3MoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX19jb250ZW50Jykuc2xpZGVUb2dnbGUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChib3gpLnBhcmVudCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvc2VBY2NvcmRpb24oJ2FsbCcpXHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBmYWxzZVxyXG5cclxuICAgICAgICAkKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoaXNPcGVuID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBvcGVuQWNjb3JkaW9uKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXlCZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcGxheUJnKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGxheUJnKCkge1xyXG4gICAgICAgICAgICAkKCcuYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaGVhZGluZy5pcy0tYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGMgPSAxXHJcbiAgICAgICAgLy8gdmFyIHIgPSAuNlxyXG5cclxuICAgICAgICAvLyB2YXIgY2VudGVyVHJhbnNmb3JtID0gY1xyXG4gICAgICAgIC8vIHZhciByaWdodFRyYW5zZm9ybSA9IHJcclxuICAgICAgICAvLyB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAvLyAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcCArICQoXCIucG9ydGZvbGlvX19pbm5lclwiKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAvLyAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgtJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgcmlnaHRUcmFuc2Zvcm0gKyAncHgpJ1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGNlbnRlclRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKCcgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2VudGVyVHJhbnNmb3JtICs9IGNcclxuICAgICAgICAvLyAgICAgICAgIHJpZ2h0VHJhbnNmb3JtICs9IHJcclxuICAgICAgICAvLyAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tY2VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2suaXMtLXJpZ2h0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXJUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjZW50ZXJUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dCbG9jaygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Jsb2NrKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9ydGZvbGlvX19ibG9jayAgPSAkKCcudmlzYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgcG9ydGZvbGlvX19ibG9jay5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICdibHVlJyxcclxuICAgICAgICAgICAgJ2RibHVlJyxcclxuICAgICAgICAgICAgJ3B1cnBsZScsXHJcbiAgICAgICAgICAgICdwaW5rJ1xyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRDb2xvclxyXG5cclxuICAgICAgICAkKCcuaXMtLWwtaG92JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKGdldFJhbmRvbUFyYml0cmFyeSgwLCBjb2xvcnMubGVuZ3RoKSldXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1ob3Zlcl8nICsgY3VycmVudENvbG9yKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0taG92ZXJfJyArIGN1cnJlbnRDb2xvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuc2VydmljZXMtaWNvbnNfX2Jsb2NrJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ2ljb25pZCcpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgaG9tZSA9IG5ldyBWaXZ1cyh0aGlzSWQsIHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU6ICdzY2VuYXJpbycsXHJcbiAgICAgICAgICAgIC8vICAgICBhbmltVGltaW5nRnVuY3Rpb246IFZpdnVzLkVBU0UsXHJcbiAgICAgICAgICAgIC8vICAgICBvblJlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnb25SZWFkeScpXHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgdGltZXJcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdmFyIHRoaXNMaW5rID0gJCh0aGlzKVxyXG4gICAgICAgIC8vICAgICB0aGlzTGluay5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG5cclxuICAgICAgICAvLyAgICAgdGhpc0xpbmsuYWZ0ZXIoKS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc0xpbmsucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLXRleHQgaW5wdXQnKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtLWZvY3VzJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3Jlc3VtZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZm4gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBmbi5tYXRjaCgvW15cXFxcL10qJC8pWzBdO1xyXG5cclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmh0bWwoZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICQoJ2xhYmVsLmlzLS1yZXN1bWUnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dFcnJvcihmb3JtLCBpbnB1dCwgZXJyb3IsIGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkucGFyZW50KCcuZm9ybV9fZ3JvdXAnKS5hZGRDbGFzcygnaXMtLWVycm9yJylcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnNpYmxpbmdzKCdsYWJlbCcpLmh0bWwoaW5wdXROYW1lICsgJyA8c3BhbiBjbGFzcz1cImlzLS1lcnJvclwiPignICsgZXJyb3IgKyAnKTxzcGFuPicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGVhckVycm9yKGZvcm0sIGlucHV0LCBpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnBhcmVudCgnLmZvcm1fX2dyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLS1lcnJvcicpXHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5zaWJsaW5ncygnbGFiZWwnKS5odG1sKGlucHV0TmFtZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG5hbWVWYWxpZGF0aW9uKF9mb3JtLCBuYW1lKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNMZW5ndGgobmFtZSwge21pbjozLCBtYXg6MjB9KSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKF9mb3JtLCAnbmFtZScsICfQntGCIDPRhSDQtNC+IDIwINGB0LjQvNCy0L7Qu9C+0LInLCAn0JjQvNGPJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKF9mb3JtLCAnbmFtZScsICfQmNC80Y8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGhvbmVWYWxpZGF0aW9uKF9mb3JtLCBwaG9uZSkge1xyXG4gICAgICAgICAgICBpZighdmFsaWRhdG9yLmlzTW9iaWxlUGhvbmUocGhvbmUsICdydS1SVScpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoX2Zvcm0sICdwaG9uZScsICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLCAn0KLQtdC70LXRhNC+0L0nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICdwaG9uZScsICfQotC10LvQtdGE0L7QvScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBlbWFpbFZhbGlkYXRpb24oX2Zvcm0sIGVtYWlsKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihfZm9ybSwgJ21haWwnLCAn0JLQstC10LTQuNGC0LUg0L/QvtGH0YLRgycsICfQn9C+0YfRgtCwJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKF9mb3JtLCAnbWFpbCcsICfQn9C+0YfRgtCwJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdmFyIF9mb3JtID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuZmluZCgnaW5wdXQjbmFtZScpLnZhbCgpXHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9ICQodGhpcykuZmluZCgnaW5wdXQjbWFpbCcpLnZhbCgpXHJcbiAgICAgICAgICAgIHZhciBwaG9uZSA9ICQodGhpcykuZmluZCgnaW5wdXQjcGhvbmUnKS52YWwoKVxyXG4gICAgICAgICAgICB2YXIgcmVzdW1lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNyZXN1bWUnKS52YWwoKVxyXG4gICAgICAgICAgICBpZihuYW1lVmFsaWRhdGlvbihfZm9ybSwgbmFtZSkgJiYgcGhvbmVWYWxpZGF0aW9uKF9mb3JtLCBwaG9uZSkgJiYgZW1haWxWYWxpZGF0aW9uKF9mb3JtLCBlbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgICQucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAnL2Zvcm1zYXZlLycsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdW1lOiByZXN1bWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZm9ybV9tb2RhbCcpLm1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24gaW5wdXQjbmFtZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWVWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNwaG9uZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBob25lVmFsaWRhdGlvbigkKCdmb3JtLmlzLS12YWxpZGF0aW9uJyksIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24gaW5wdXQjbWFpbCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVtYWlsVmFsaWRhdGlvbigkKCdmb3JtLmlzLS12YWxpZGF0aW9uJyksIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAkKCcuZ2VvbWV0cnknKSxcclxuICAgICAgICAgICAgY2lyY2xlOiAkKCcuZ2VvbWV0cnlfX2NpcmNsZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHZW9tZXRyeSgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnd2lkdGgnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmNpcmNsZS5jc3MoJ2hlaWdodCcsIGhlaWdodClcclxuICAgICAgICAgICAgaWYoJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5hZGRDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLS1zdG9wJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBlLmNsaWVudFggLyAkKHdpbmRvdykuaW5uZXJXaWR0aCgpICogMTAwXHJcblxyXG4gICAgICAgICAgICAkKCcjc3ZnRGF2aWQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUzZCgtXCIgKyBlLmNsaWVudFggLyA0MCArIFwicHgsIDAsIDApXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbVRyYW5zZm9ybSh4X21pbiwgeF9tYXgsIHlfbWluLCB5X21heCwgc2NhbGVfbWluLCBzY2FsZV9tYXgsIHJvdGF0ZV9taW4sIHJvdGF0ZV9tYXgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB4ID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHhfbWluLCB4X21heClcclxuICAgICAgICAgICAgdmFyIHkgPSBnZXRSYW5kb21BcmJpdHJhcnkoeV9taW4sIHlfbWF4KVxyXG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBnZXRSYW5kb21BcmJpdHJhcnkoc2NhbGVfbWluLCBzY2FsZV9tYXgpXHJcbiAgICAgICAgICAgIHZhciByb3RhdGUgPSBnZXRSYW5kb21BcmJpdHJhcnkocm90YXRlX21pbiwgcm90YXRlX21heClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAwKSBzY2FsZSgnICsgc2NhbGUgKyAnKSByb3RhdGUoJyArIHJvdGF0ZSArICdkZWcpJ1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXInKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuaW1hdGlvblN2ZyBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzVHJhbnNmb3JtID0gZ2V0UmFuZG9tVHJhbnNmb3JtKC0xNTAwLCAxNTAwLCAtMTUwMCwgMTUwMCwgMCwgMSwgLTQwMCwgNDAwKVxyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBnZXRSYW5kb21BcmJpdHJhcnkoLjUsIDMpICsgJ3MgYWxsIGVhc2UnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzVHJhbnNmb3JtKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgJCgnLnRlYW1JbGwnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigncGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1RyYW5zZm9ybSA9IGdldFJhbmRvbVRyYW5zZm9ybSgtMTAsIDEwLCAtMTAsIDEwLCAxLCAxLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBnZXRSYW5kb21BcmJpdHJhcnkoLjUsIDMpICsgJ3MgYWxsIGVhc2UnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5hbmltYXRpb25TdmcgcGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgLy8gdmFyIGlsbF9zID0gJCgnLnNlcnZpY2VzY3VyX190b3BfX2lsbCBzcGFuJykudGlsdCgpXHJcbiAgICAgICAgLy8gaWxsX3Mub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUsIHRyYW5zZm9ybXMpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLCB0cmFuc2Zvcm1zKVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB2YXIgam9ic1RpbWVyXHJcblxyXG4gICAgICAgICQoJy5qb2JzSW1hZ2VUYXJnZXQnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGpvYnNUaW1lcilcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUhpZGRlbicpLmFkZENsYXNzKCdqb2JzSW1hZ2VIaWRkZW4tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICQoJy5qb2JzSW1hZ2VMYWJlbCcpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGpvYnNUaW1lcilcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUhpZGRlbicpLnJlbW92ZUNsYXNzKCdqb2JzSW1hZ2VIaWRkZW4tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICQoJy5qb2JzSW1hZ2VMYWJlbCcpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5iYW5uZXJfX2Rvd24gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YVNjcm9sbEl0ZW0gPSAkKHRoaXMpLmRhdGEoJ3Njcm9sbGl0ZW0nKVxyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGRhdGFTY3JvbGxJdGVtKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0sIDEwMDAsIFwic3dpbmdcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2EuX2FuY2hvcltocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenknKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnNyYyA9IGltYWdlc1tpXS5kYXRhc2V0LnNyYztcclxuICAgICAgICBpbWFnZXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG4gICAgfVxyXG59KTsiLCJ2YXIgbWFwO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTIuOTc0Mzk0LCAzNi4wNTkxMDUpLFxyXG4gICAgICAgICAgICB6b29tOiAxOCxcclxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImludmVydF9saWdodG5lc3NcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1tYVwiOiAwLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodWVcIjogXCIjNDM1MTU4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB2YXIgaWNvbiA9ICdodHRwOi8vZnJvbnRlbmQuZG9yb2hvdmRlc2lnbi5ydS9kZC9pbWcvbWFya2VyLnBuZyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uLFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgbWFwQmxvY2sgPSAkKCcjbWFwJylcclxuXHJcbiAgICAgICAgcmVzaXplTWFwKCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZU1hcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplTWFwKCkge1xyXG4gICAgICAgICAgICBpZihtYXBCbG9jay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1hcEJsb2NrLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJjYWxjKDEwMHZoIC0gXCIgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKSArIFwicHgpXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBjbG9zZVRpbWVyXHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDQ1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICB2YXIgaXNDbGljayA9IHRydWVcclxuXHJcbiAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tbW9ibWVudScpXHJcbiAgICAgICAgICAgIGlmKCFpc09wZW4gJiYgaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMTM1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbWltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGlzT3BlbiAmJiBpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig4MCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdG9nZ2xlRml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaXhlZE5hdmJhcigpXHJcbiAgICAgICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgMTMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdmJhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd05hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcvcG9ydGZvbGlvLycpO1xyXG5cclxuICAgICAgICBpZihpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy9wb3J0Zm9saW8vJylbMV0ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tdHJhbnNwYXJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLS1kYXJrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnByZXNlbnRhdGlvbl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLW5leHQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5wcmVzZW50YXRpb24nKS5jc3Moe1xyXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIHRlYW1BbmltYXRpb24oKSBcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICAgICAgICAgICAgdGVhbUFuaW1hdGlvbigpIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uX2VsZW1lbnQgPSAkKCcuX19hbmltJylcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbl9lbGVtZW50LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV90cmFuc2l0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHJhbnNpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2FuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnYW5pbXR5cGUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV9kZWxheSA9ICQodGhpcykuZGF0YSgnYW5pbWRlbGF5JylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGFfZV90cmFuc2l0aW9uICsgJ3MgYWxsIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncydcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYV9lX2FuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGVhbUFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJCgnLmFib3V0X190ZWFtX19jb250ZW50JykudmlzaWJsZSggdHJ1ZSApKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLmFkZENsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcHJvZiwgYW5pbWF0aW9uVGltZXJcclxuXHJcbiAgICAgICAgJCgnLnRlYW1QaWMnKS5ob3ZlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lcilcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKS5hdHRyKCdpZCcpXHJcbiAgICAgICAgICAgIHByb2YgPSAkKHRoaXMpLmF0dHIoJ2lkJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5hZGRDbGFzcygnaXMtLWFuaW1hdGUnKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2lubmVyJykucmVtb3ZlQ2xhc3MoJ2JndGV4dCcpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbV9fY29udGVudF9fY2xvdWQnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykuaHRtbCgkKHRoaXMpLmRhdGEoJ3Byb2ZuYW1lJykpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbScpLmFkZENsYXNzKCdpcy0tJyArIHByb2YpXHJcbiAgICAgICAgICAgICQoJy50ZWFtUGljJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignaWQnKSAhPSBfdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS11bmhvdmVyJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtJykucmVtb3ZlQ2xhc3MoJ2lzLS0nICsgcHJvZilcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19jb250ZW50X19jbG91ZCcpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5yZW1vdmVDbGFzcygnaXMtLWFuaW1hdGUnKVxyXG4gICAgICAgICAgICAkKCcudGVhbVBpYycpLnJlbW92ZUNsYXNzKCdpcy0tdW5ob3ZlcicpXHJcbiAgICAgICAgICAgICQoJyN0ZWFtSGVhZGluZyBzcGFuJykuaHRtbCgn0J3QsNGI0LAg0LrQvtC80LDQvdC00LAnKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2lubmVyJykuYWRkQ2xhc3MoJ2JndGV4dCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
