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
            var home = new Vivus(thisId, {
                type: 'scenario',
                animTimingFunction: Vivus.EASE,
                onReady: function() {
                    console.log('onReady')
                },
            });
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
            if(nameValidation(_form, name) && phoneValidation(_form, phone) && emailValidation(_form, email)) {

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
            jobsTimer = setTimeout(function() {
                $('.jobsImageHidden').addClass('jobsImageHidden-visible')
            }, 1000)
        }, function() {
            clearTimeout(jobsTimer)
            $('.jobsImageHidden').removeClass('jobsImageHidden-visible')
        })
        
        $('.banner__down button').on('click', function() {
            $('html, body').animate({
                scrollTop: $('.banner').innerHeight()
            }, 1000, "swing");
        })

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
                    }
                })
            }else if(isOpen && isClick) {
                isClick = false
                $('#mobileMenu').removeClass('is--active')
                anime({
                    targets: '.__mobLink',
                    translateY: 45, // -> '250px'
                    delay: anime.stagger(150),
                    complete: function(anim) {
                        anime({
                            targets: '.mobile__container',
                            translateX: '100vw',
                        })
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
        $(document).scroll(function() {
            startAnimation()
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
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiY2FyZHNfaG92ZXIuanMiLCJmb290ZXIuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhenkuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJwcmVzZW50YXRpb25fY2Fyb3VzZWwuanMiLCJzY3JvbGxfYW5pbWF0aW9uLmpzIiwidGVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFjY29yZGlvbih0eXBlLCBib3gpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnbm9uQ3VycmVudCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpWzBdICE9ICQoYm94KVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkFjY29yZGlvbihib3gpIHtcclxuICAgICAgICAgICAgY2xvc2VBY2NvcmRpb24oJ25vbkN1cnJlbnQnLCAkKGJveCkucGFyZW50KCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpKVxyXG4gICAgICAgICAgICAkKGJveCkuc2libGluZ3MoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX19jb250ZW50Jykuc2xpZGVUb2dnbGUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChib3gpLnBhcmVudCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvc2VBY2NvcmRpb24oJ2FsbCcpXHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBmYWxzZVxyXG5cclxuICAgICAgICAkKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoaXNPcGVuID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBvcGVuQWNjb3JkaW9uKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXlCZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcGxheUJnKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGxheUJnKCkge1xyXG4gICAgICAgICAgICAkKCcuYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaGVhZGluZy5pcy0tYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGMgPSAxXHJcbiAgICAgICAgLy8gdmFyIHIgPSAuNlxyXG5cclxuICAgICAgICAvLyB2YXIgY2VudGVyVHJhbnNmb3JtID0gY1xyXG4gICAgICAgIC8vIHZhciByaWdodFRyYW5zZm9ybSA9IHJcclxuICAgICAgICAvLyB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAvLyAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcCArICQoXCIucG9ydGZvbGlvX19pbm5lclwiKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAvLyAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgtJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgcmlnaHRUcmFuc2Zvcm0gKyAncHgpJ1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGNlbnRlclRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKCcgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2VudGVyVHJhbnNmb3JtICs9IGNcclxuICAgICAgICAvLyAgICAgICAgIHJpZ2h0VHJhbnNmb3JtICs9IHJcclxuICAgICAgICAvLyAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tY2VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2suaXMtLXJpZ2h0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXJUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjZW50ZXJUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dCbG9jaygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Jsb2NrKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9ydGZvbGlvX19ibG9jayAgPSAkKCcudmlzYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgcG9ydGZvbGlvX19ibG9jay5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICdibHVlJyxcclxuICAgICAgICAgICAgJ2RibHVlJyxcclxuICAgICAgICAgICAgJ3B1cnBsZScsXHJcbiAgICAgICAgICAgICdwaW5rJ1xyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRDb2xvclxyXG5cclxuICAgICAgICAkKCcuaXMtLWwtaG92JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKGdldFJhbmRvbUFyYml0cmFyeSgwLCBjb2xvcnMubGVuZ3RoKSldXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1ob3Zlcl8nICsgY3VycmVudENvbG9yKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0taG92ZXJfJyArIGN1cnJlbnRDb2xvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuc2VydmljZXMtaWNvbnNfX2Jsb2NrJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ2ljb25pZCcpXHJcbiAgICAgICAgICAgIHZhciBob21lID0gbmV3IFZpdnVzKHRoaXNJZCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NjZW5hcmlvJyxcclxuICAgICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRSxcclxuICAgICAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblJlYWR5JylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciB0aW1lclxyXG5cclxuICAgICAgICAvLyAkKCcuZm9vdGVyX19tZW51c19faW5uZXIgdWwgbGkgYScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyAkKCcuZm9vdGVyX19tZW51c19faW5uZXIgdWwgbGkgYScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB2YXIgdGhpc0xpbmsgPSAkKHRoaXMpXHJcbiAgICAgICAgLy8gICAgIHRoaXNMaW5rLmFkZENsYXNzKCdpcy0taGlkZScpXHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzTGluay5hZnRlcigpLm9uKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzTGluay5yZW1vdmVDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmZvcm1fX2dyb3VwLmlzLS10ZXh0IGlucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1mb2N1cycpXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjcmVzdW1lJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBmbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGZuLm1hdGNoKC9bXlxcXFwvXSokLylbMF07XHJcblxyXG4gICAgICAgICAgICAkKCdsYWJlbC5pcy0tcmVzdW1lJykuaHRtbChmaWxlbmFtZSlcclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yKGZvcm0sIGlucHV0LCBlcnJvciwgaW5wdXROYW1lKSB7XHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5wYXJlbnQoJy5mb3JtX19ncm91cCcpLmFkZENsYXNzKCdpcy0tZXJyb3InKVxyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkuc2libGluZ3MoJ2xhYmVsJykuaHRtbChpbnB1dE5hbWUgKyAnIDxzcGFuIGNsYXNzPVwiaXMtLWVycm9yXCI+KCcgKyBlcnJvciArICcpPHNwYW4+JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3IoZm9ybSwgaW5wdXQsIGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkucGFyZW50KCcuZm9ybV9fZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtLWVycm9yJylcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnNpYmxpbmdzKCdsYWJlbCcpLmh0bWwoaW5wdXROYW1lKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbmFtZVZhbGlkYXRpb24oX2Zvcm0sIG5hbWUpIHtcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRvci5pc0xlbmd0aChuYW1lLCB7bWluOjMsIG1heDoyMH0pKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoX2Zvcm0sICduYW1lJywgJ9Ce0YIgM9GFINC00L4gMjAg0YHQuNC80LLQvtC70L7QsicsICfQmNC80Y8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICduYW1lJywgJ9CY0LzRjycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwaG9uZVZhbGlkYXRpb24oX2Zvcm0sIHBob25lKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNNb2JpbGVQaG9uZShwaG9uZSwgJ3J1LVJVJykpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihfZm9ybSwgJ3Bob25lJywgJ9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsICfQotC10LvQtdGE0L7QvScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFcnJvcihfZm9ybSwgJ3Bob25lJywgJ9Ci0LXQu9C10YTQvtC9JylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGVtYWlsVmFsaWRhdGlvbihfZm9ybSwgZW1haWwpIHtcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKF9mb3JtLCAnbWFpbCcsICfQktCy0LXQtNC40YLQtSDQv9C+0YfRgtGDJywgJ9Cf0L7Rh9GC0LAnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICdtYWlsJywgJ9Cf0L7Rh9GC0LAnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB2YXIgX2Zvcm0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNuYW1lJykudmFsKClcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gJCh0aGlzKS5maW5kKCdpbnB1dCNtYWlsJykudmFsKClcclxuICAgICAgICAgICAgdmFyIHBob25lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNwaG9uZScpLnZhbCgpXHJcbiAgICAgICAgICAgIGlmKG5hbWVWYWxpZGF0aW9uKF9mb3JtLCBuYW1lKSAmJiBwaG9uZVZhbGlkYXRpb24oX2Zvcm0sIHBob25lKSAmJiBlbWFpbFZhbGlkYXRpb24oX2Zvcm0sIGVtYWlsKSkge1xyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtLmlzLS12YWxpZGF0aW9uIGlucHV0I25hbWUnKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lVmFsaWRhdGlvbigkKCdmb3JtLmlzLS12YWxpZGF0aW9uJyksIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24gaW5wdXQjcGhvbmUnKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwaG9uZVZhbGlkYXRpb24oJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtLmlzLS12YWxpZGF0aW9uIGlucHV0I21haWwnKS5vbignaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbWFpbFZhbGlkYXRpb24oJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudHMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJCgnLmdlb21ldHJ5JyksXHJcbiAgICAgICAgICAgIGNpcmNsZTogJCgnLmdlb21ldHJ5X19jaXJjbGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRHZW9tZXRyeSgpIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQod2luZG93KS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmNpcmNsZS5jc3MoJ3dpZHRoJywgaGVpZ2h0KVxyXG4gICAgICAgICAgICBlbGVtZW50cy5jaXJjbGUuY3NzKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIGlmKCQoJy5mb290ZXInKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5jb250YWluZXIuYWRkQ2xhc3MoJ2lzLS1zdG9wJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gZS5jbGllbnRYIC8gJCh3aW5kb3cpLmlubmVyV2lkdGgoKSAqIDEwMFxyXG5cclxuICAgICAgICAgICAgJCgnI3N2Z0RhdmlkJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoLVwiICsgZS5jbGllbnRYIC8gNDAgKyBcInB4LCAwLCAwKVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21UcmFuc2Zvcm0oeF9taW4sIHhfbWF4LCB5X21pbiwgeV9tYXgsIHNjYWxlX21pbiwgc2NhbGVfbWF4LCByb3RhdGVfbWluLCByb3RhdGVfbWF4KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeCA9IGdldFJhbmRvbUFyYml0cmFyeSh4X21pbiwgeF9tYXgpXHJcbiAgICAgICAgICAgIHZhciB5ID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHlfbWluLCB5X21heClcclxuICAgICAgICAgICAgdmFyIHNjYWxlID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHNjYWxlX21pbiwgc2NhbGVfbWF4KVxyXG4gICAgICAgICAgICB2YXIgcm90YXRlID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHJvdGF0ZV9taW4sIHJvdGF0ZV9tYXgpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgMCkgc2NhbGUoJyArIHNjYWxlICsgJykgcm90YXRlKCcgKyByb3RhdGUgKyAnZGVnKSdcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAkKCcuYmFubmVyJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmltYXRpb25TdmcgcGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc1RyYW5zZm9ybSA9IGdldFJhbmRvbVRyYW5zZm9ybSgtMTUwMCwgMTUwMCwgLTE1MDAsIDE1MDAsIDAsIDEsIC00MDAsIDQwMClcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpc1RyYW5zZm9ybSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICQoJy50ZWFtSWxsJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNUcmFuc2Zvcm0gPSBnZXRSYW5kb21UcmFuc2Zvcm0oLTEwLCAxMCwgLTEwLCAxMCwgMSwgMSwgMCwgMClcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJyAgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigncGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYW5pbWF0aW9uU3ZnIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgICAgIC8vIHZhciBpbGxfcyA9ICQoJy5zZXJ2aWNlc2N1cl9fdG9wX19pbGwgc3BhbicpLnRpbHQoKVxyXG4gICAgICAgIC8vIGlsbF9zLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlLCB0cmFuc2Zvcm1zKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZSwgdHJhbnNmb3JtcylcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdmFyIGpvYnNUaW1lclxyXG5cclxuICAgICAgICAkKCcuam9ic0ltYWdlVGFyZ2V0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChqb2JzVGltZXIpXHJcbiAgICAgICAgICAgIGpvYnNUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuam9ic0ltYWdlSGlkZGVuJykuYWRkQ2xhc3MoJ2pvYnNJbWFnZUhpZGRlbi12aXNpYmxlJylcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGpvYnNUaW1lcilcclxuICAgICAgICAgICAgJCgnLmpvYnNJbWFnZUhpZGRlbicpLnJlbW92ZUNsYXNzKCdqb2JzSW1hZ2VIaWRkZW4tdmlzaWJsZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKCcuYmFubmVyX19kb3duIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJy5iYW5uZXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0sIDEwMDAsIFwic3dpbmdcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eScpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbWFnZXNbaV0uc3JjID0gaW1hZ2VzW2ldLmRhdGFzZXQuc3JjO1xyXG4gICAgICAgIGltYWdlc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcbiAgICB9XHJcbn0pOyIsInZhciBtYXA7XHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbiAgICAgICAgICAgIHpvb206IDE4LFxyXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW52ZXJ0X2xpZ2h0bmVzc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbW1hXCI6IDAuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiM0MzUxNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBpY29uID0gJ2h0dHA6Ly9mcm9udGVuZC5kb3JvaG92ZGVzaWduLnJ1L2RkL2ltZy9tYXJrZXIucG5nJztcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk3NDM5NCwgMzYuMDU5MTA1KSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBtYXBCbG9jayA9ICQoJyNtYXAnKVxyXG5cclxuICAgICAgICByZXNpemVNYXAoKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzaXplTWFwKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVNYXAoKSB7XHJcbiAgICAgICAgICAgIGlmKG1hcEJsb2NrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbWFwQmxvY2suY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcImNhbGMoMTAwdmggLSBcIiArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpICsgXCJweClcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogJzEwMHZ3JywgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBpc09wZW4gPSBmYWxzZVxyXG4gICAgICAgIHZhciBpc0NsaWNrID0gdHJ1ZVxyXG5cclxuICAgICAgICAkKCcjbW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tb2JtZW51JylcclxuICAgICAgICAgICAgaWYoIWlzT3BlbiAmJiBpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1aW50JyxcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnI21vYmlsZU1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAxMzUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFtaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbW9iaWxlTWVudScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGljayA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2UgaWYoaXNPcGVuICYmIGlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDQ1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMTUwKSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLm1vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcjbW9iaWxlTWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IDAsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGljayA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1tb2JtZW51JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIHRvZ2dsZUZpeGVkTmF2YmFyKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRml4ZWROYXZiYXIoKVxyXG4gICAgICAgICAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAgICAgLy8gaGlkZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TmF2YmFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3RcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVGaXhlZE5hdmJhcigpIHtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArIDEzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZiYXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5wcmVzZW50YXRpb25fX2Nhcm91c2VsX19hcnJvdy5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5wcmVzZW50YXRpb25fX2Nhcm91c2VsX19hcnJvdy5pcy0tbmV4dCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnByZXNlbnRhdGlvbicpLmNzcyh7XHJcbiAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25fZWxlbWVudCA9ICQoJy5fX2FuaW0nKVxyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uX2VsZW1lbnQuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX3RyYW5zaXRpb24gPSAkKHRoaXMpLmRhdGEoJ2FuaW10cmFuc2l0aW9uJylcclxuICAgICAgICAgICAgICAgIHZhciBhX2VfYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHlwZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogYV9lX3RyYW5zaXRpb24gKyAncyBhbGwgZWFzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItbW96LWFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGFfZV9hbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcHJvZiwgYW5pbWF0aW9uVGltZXJcclxuXHJcbiAgICAgICAgJCgnLnRlYW1QaWMnKS5ob3ZlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lcilcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKS5hdHRyKCdpZCcpXHJcbiAgICAgICAgICAgIHByb2YgPSAkKHRoaXMpLmF0dHIoJ2lkJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5hZGRDbGFzcygnaXMtLWFuaW1hdGUnKVxyXG5cclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19jb250ZW50X19jbG91ZCcpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5odG1sKCQodGhpcykuZGF0YSgncHJvZm5hbWUnKSlcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtJykuYWRkQ2xhc3MoJ2lzLS0nICsgcHJvZilcclxuICAgICAgICAgICAgJCgnLnRlYW1QaWMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdpZCcpICE9IF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLXVuaG92ZXInKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW0nKS5yZW1vdmVDbGFzcygnaXMtLScgKyBwcm9mKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2NvbnRlbnRfX2Nsb3VkJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcjdGVhbUhlYWRpbmcgc3BhbicpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICQoJy50ZWFtUGljJykucmVtb3ZlQ2xhc3MoJ2lzLS11bmhvdmVyJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5odG1sKCfQndCw0YjQsCDQutC+0LzQsNC90LTQsCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
