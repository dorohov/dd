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

        setHeightInCarousel()

        $(window).resize(function() {
            setHeightInCarousel()
        })

        function setHeightInCarousel() {
            var block = $('.bl-sx__item__block')
            var windowWidth = $(window).outerWidth()
            if(windowWidth <= 768) {
                $('.bl-sx__item').css({
                    minHeight: block.outerHeight() + 230
                })
            }else {
                $('.bl-sx__item').css({
                    minHeight: '100vh'
                })
            }
        }

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
// var map;
//         function initMap() {
//           map = new google.maps.Map(document.getElementById('map'), {
//             center: new google.maps.LatLng(52.974394, 36.059105),
//             zoom: 18,
//             disableDefaultUI: true,
//             styles: [
//                 {
//                     "featureType": "all",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "invert_lightness": true
//                         },
//                         {
//                             "saturation": 10
//                         },
//                         {
//                             "lightness": 30
//                         },
//                         {
//                             "gamma": 0.5
//                         },
//                         {
//                             "hue": "#435158"
//                         }
//                     ]
//                 }
//             ]
//           });
//           var icon = 'http://frontend.dev.dorohovdesign.ru/dd/img/marker.png';

//             var marker = new google.maps.Marker({
//                 position: new google.maps.LatLng(52.974394, 36.059105),
//                 icon: icon,
//                 map: map
//             });
//         }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiY2FyZHNfaG92ZXIuanMiLCJmb290ZXIuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhbmRpbmdfYi5qcyIsImxhenkuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJvci5qcyIsInByZXMuanMiLCJwcmVzZW50YXRpb25fY2Fyb3VzZWwuanMiLCJzY3JvbGxfYW5pbWF0aW9uLmpzIiwic2tyb2xsci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEhBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFjY29yZGlvbih0eXBlLCBib3gpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnbm9uQ3VycmVudCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpWzBdICE9ICQoYm94KVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9ja19fY29udGVudCcpLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkFjY29yZGlvbihib3gpIHtcclxuICAgICAgICAgICAgY2xvc2VBY2NvcmRpb24oJ25vbkN1cnJlbnQnLCAkKGJveCkucGFyZW50KCcuc2VydmljZXMtYWNjb3JkaW9uX19ibG9jaycpKVxyXG4gICAgICAgICAgICAkKGJveCkuc2libGluZ3MoJy5zZXJ2aWNlcy1hY2NvcmRpb25fX2Jsb2NrX19jb250ZW50Jykuc2xpZGVUb2dnbGUoe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChib3gpLnBhcmVudCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2snKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsb3NlQWNjb3JkaW9uKCdhbGwnKVxyXG5cclxuICAgICAgICB2YXIgaXNPcGVuID0gZmFsc2VcclxuXHJcbiAgICAgICAgJCgnLnNlcnZpY2VzLWFjY29yZGlvbl9fYmxvY2tfX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKGlzT3BlbiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgb3BlbkFjY29yZGlvbih0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwbGF5QmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHBsYXlCZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlCZygpIHtcclxuICAgICAgICAgICAgJCgnLmJndGV4dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5oZWFkaW5nLmlzLS1iZ3RleHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyB2YXIgYyA9IDFcclxuICAgICAgICAvLyB2YXIgciA9IC42XHJcblxyXG4gICAgICAgIC8vIHZhciBjZW50ZXJUcmFuc2Zvcm0gPSBjXHJcbiAgICAgICAgLy8gdmFyIHJpZ2h0VHJhbnNmb3JtID0gclxyXG4gICAgICAgIC8vIHZhciBsYXN0U2Nyb2xsVG9wID0gMFxyXG5cclxuICAgICAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKFwiLnBvcnRmb2xpb19faW5uZXJcIikub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKFwiLnBvcnRmb2xpb19faW5uZXJcIikub2Zmc2V0KCkudG9wICsgJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgIC8vICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBjZW50ZXJUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgY2VudGVyVHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgICAgIHZhciByaWdodFRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoLScgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgnICsgY2VudGVyVHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgICAgIHZhciByaWdodFRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIHJpZ2h0VHJhbnNmb3JtICsgJ3B4KSdcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjZW50ZXJUcmFuc2Zvcm0gKz0gY1xyXG4gICAgICAgIC8vICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gKz0gclxyXG4gICAgICAgIC8vICAgICBsYXN0U2Nyb2xsVG9wID0gc3RcclxuICAgICAgICBcclxuICAgICAgICAvLyAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrLmlzLS1jZW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tcmlnaHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2snKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybScgICAgICA6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICdub25lJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlclRyYW5zZm9ybSA9IDBcclxuICAgICAgICAvLyAgICAgICAgICAgICByaWdodFRyYW5zZm9ybSA9IDBcclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNlbnRlclRyYW5zZm9ybSlcclxuXHJcbiAgICAgICAgLy8gfSlcclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBcclxuICAgICAgICBzaG93QmxvY2soKVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93QmxvY2soKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCbG9jaygpIHtcclxuICAgICAgICAgICAgdmFyIHBvcnRmb2xpb19fYmxvY2sgID0gJCgnLnZpc2Jsb2NrJylcclxuXHJcbiAgICAgICAgICAgIHBvcnRmb2xpb19fYmxvY2suZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLXZpc2libGUnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyB2YXIgYmxvY2tMID0gYDxkaXYgY2xhc3M9XCJibG9nX19ibG9jayBpcy0tbGVmdCB2aXNibG9jayBpcy0tbC1ob3ZcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIkBAcGFnZXMuYXJ0aWNsZVwiIGNsYXNzPVwiYmxvZ19fYmxvY2tfX2lubmVyXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2ltZ1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5XCIgZGF0YS1zcmM9XCJpbWcvYmxvZzIuanBnXCIgYWx0PVwiQEB0aXRsZVwiIHNyYz1cImltZy9ibG9nX3BsYWNlaG9sZGVyLmpwZ1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2luZm9cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX3RpdGxlXCI+PHNwYW4+QEB0aXRsZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2tfX2Rlc2NcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QEBkZXNjPC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19fYnRuXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGlzLS1ibGFja1wiPtCn0LjRgtCw0YLRjDwvc3Bhbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgLy8gdmFyIGJsb2NrUiA9IGA8ZGl2IGNsYXNzPVwiYmxvZ19fYmxvY2sgaXMtLXJpZ2h0IHZpc2Jsb2NrIGlzLS1sLWhvdlwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiQEBwYWdlcy5hcnRpY2xlXCIgY2xhc3M9XCJibG9nX19ibG9ja19faW5uZXJcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19faW1nXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlcIiBkYXRhLXNyYz1cImltZy9ibG9nMi5qcGdcIiBhbHQ9XCJAQHRpdGxlXCIgc3JjPVwiaW1nL2Jsb2dfcGxhY2Vob2xkZXIuanBnXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19faW5mb1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19fdGl0bGVcIj48c3Bhbj5AQHRpdGxlPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9nX19ibG9ja19fZGVzY1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5AQGRlc2M8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dfX2Jsb2NrX19idG5cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gaXMtLWJsYWNrXCI+0KfQuNGC0LDRgtGMPC9zcGFuPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAvLyAkKCcuYmxvZ19fbG9hZCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgJCgnLmJsb2dfX2Jsb2NrJykuYWRkQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F3ZXJ0eScpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYmxvY2tMKTtcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F3ZXJ0eScpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYmxvY2tSKTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICdibHVlJyxcclxuICAgICAgICAgICAgJ2RibHVlJyxcclxuICAgICAgICAgICAgJ3B1cnBsZScsXHJcbiAgICAgICAgICAgICdwaW5rJ1xyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRDb2xvclxyXG5cclxuICAgICAgICAkKCcuaXMtLWwtaG92JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKGdldFJhbmRvbUFyYml0cmFyeSgwLCBjb2xvcnMubGVuZ3RoKSldXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1ob3Zlcl8nICsgY3VycmVudENvbG9yKVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0taG92ZXJfJyArIGN1cnJlbnRDb2xvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuc2VydmljZXMtaWNvbnNfX2Jsb2NrJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ2ljb25pZCcpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgaG9tZSA9IG5ldyBWaXZ1cyh0aGlzSWQsIHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGU6ICdzY2VuYXJpbycsXHJcbiAgICAgICAgICAgIC8vICAgICBhbmltVGltaW5nRnVuY3Rpb246IFZpdnVzLkVBU0UsXHJcbiAgICAgICAgICAgIC8vICAgICBvblJlYWR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnb25SZWFkeScpXHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgdGltZXJcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdmFyIHRoaXNMaW5rID0gJCh0aGlzKVxyXG4gICAgICAgIC8vICAgICB0aGlzTGluay5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG5cclxuICAgICAgICAvLyAgICAgdGhpc0xpbmsuYWZ0ZXIoKS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc0xpbmsucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLXRleHQgaW5wdXQnKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtLWZvY3VzJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3Jlc3VtZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZm4gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBmbi5tYXRjaCgvW15cXFxcL10qJC8pWzBdO1xyXG5cclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmh0bWwoZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICQoJ2xhYmVsLmlzLS1yZXN1bWUnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dFcnJvcihmb3JtLCBpbnB1dCwgZXJyb3IsIGlucHV0TmFtZSkge1xyXG4gICAgICAgICAgICBmb3JtLmZpbmQoJ2lucHV0IycgKyBpbnB1dCkucGFyZW50KCcuZm9ybV9fZ3JvdXAnKS5hZGRDbGFzcygnaXMtLWVycm9yJylcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnNpYmxpbmdzKCdsYWJlbCcpLmh0bWwoaW5wdXROYW1lICsgJyA8c3BhbiBjbGFzcz1cImlzLS1lcnJvclwiPignICsgZXJyb3IgKyAnKTxzcGFuPicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGVhckVycm9yKGZvcm0sIGlucHV0LCBpbnB1dE5hbWUpIHtcclxuICAgICAgICAgICAgZm9ybS5maW5kKCdpbnB1dCMnICsgaW5wdXQpLnBhcmVudCgnLmZvcm1fX2dyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLS1lcnJvcicpXHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnaW5wdXQjJyArIGlucHV0KS5zaWJsaW5ncygnbGFiZWwnKS5odG1sKGlucHV0TmFtZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG5hbWVWYWxpZGF0aW9uKF9mb3JtLCBuYW1lKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNMZW5ndGgobmFtZSwge21pbjozLCBtYXg6MjB9KSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKF9mb3JtLCAnbmFtZScsICfQntGCIDPRhSDQtNC+IDIwINGB0LjQvNCy0L7Qu9C+0LInLCAn0JjQvNGPJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKF9mb3JtLCAnbmFtZScsICfQmNC80Y8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGhvbmVWYWxpZGF0aW9uKF9mb3JtLCBwaG9uZSkge1xyXG4gICAgICAgICAgICBpZighdmFsaWRhdG9yLmlzTW9iaWxlUGhvbmUocGhvbmUpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoX2Zvcm0sICdwaG9uZScsICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLCAn0KLQtdC70LXRhNC+0L0nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRXJyb3IoX2Zvcm0sICdwaG9uZScsICfQotC10LvQtdGE0L7QvScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBlbWFpbFZhbGlkYXRpb24oX2Zvcm0sIGVtYWlsKSB7XHJcbiAgICAgICAgICAgIGlmKCF2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihfZm9ybSwgJ21haWwnLCAn0JLQstC10LTQuNGC0LUg0L/QvtGH0YLRgycsICfQn9C+0YfRgtCwJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVycm9yKF9mb3JtLCAnbWFpbCcsICfQn9C+0YfRgtCwJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNtYWluRm9ybSBmb3JtJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHZhciBfZm9ybSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5maW5kKCdpbnB1dCNuYW1lJykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9ICQodGhpcykuZmluZCgnaW5wdXQjbWFpbCcpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcGhvbmUgPSAkKHRoaXMpLmZpbmQoJ2lucHV0I3Bob25lJykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bWUgPSAkKHRoaXMpLmZpbmQoJ2lucHV0I3Jlc3VtZScpLnZhbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihuYW1lVmFsaWRhdGlvbihfZm9ybSwgbmFtZSkgJiYgcGhvbmVWYWxpZGF0aW9uKF9mb3JtLCBwaG9uZSkgJiYgZW1haWxWYWxpZGF0aW9uKF9mb3JtLCBlbWFpbCkpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2Zvcm1zYXZlLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bWU6IHJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNmb3JtX21vZGFsJykubW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2Zvcm1zYXZlLycgLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvL9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDRg9GB0L/QtdGI0L3QvlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0nMScpe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Zvcm1fbW9kYWwnKS5tb2RhbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21haW5Gb3JtIGZvcm0nKS5maW5kKCdpbnB1dCNuYW1lJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluRm9ybSBmb3JtJykuZmluZCgnaW5wdXQjbWFpbCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbWFpbkZvcm0gZm9ybScpLmZpbmQoJ2lucHV0I3Bob25lJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYWluRm9ybSBmb3JtJykuZmluZCgnaW5wdXQjcmVzdW1lJykudmFsKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQp9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6KCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJCgnI3Jlc3VsdF9mb3JtJykuaHRtbCgn0JjQvNGPOiAnK3Jlc3VsdC5uYW1lKyc8YnI+0KLQtdC70LXRhNC+0L06ICcrcmVzdWx0LnBob25lbnVtYmVyKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvLyDQlNCw0L3QvdGL0LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Ri1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyQoJyNyZXN1bHRfZm9ybScpLmh0bWwoJ9Ce0YjQuNCx0LrQsC4g0JTQsNC90L3Ri9C1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90YsuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQp9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6KCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNuYW1lJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZVZhbGlkYXRpb24oJCgnZm9ybS5pcy0tdmFsaWRhdGlvbicpLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtLmlzLS12YWxpZGF0aW9uIGlucHV0I3Bob25lJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGhvbmVWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybS5pcy0tdmFsaWRhdGlvbiBpbnB1dCNtYWlsJykub24oJ2lucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW1haWxWYWxpZGF0aW9uKCQoJ2Zvcm0uaXMtLXZhbGlkYXRpb24nKSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICQoJy5nZW9tZXRyeScpLFxyXG4gICAgICAgICAgICBjaXJjbGU6ICQoJy5nZW9tZXRyeV9fY2lyY2xlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEdlb21ldHJ5KClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0R2VvbWV0cnkoKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICBlbGVtZW50cy5jaXJjbGUuY3NzKCd3aWR0aCcsIGhlaWdodClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgICAgICBpZigkKCcuZm9vdGVyJykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFkZENsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigkKCcucHJlc2VudGF0aW9uX19uZXh0JykudmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICB8fCAkKCcuZm9ybScpLnZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgfHwgJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcmVzZW50YXRpb25fX2Fycm93cycpLmFkZENsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5wcmVzZW50YXRpb25fX2Fycm93cycpLnJlbW92ZUNsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEdlb21ldHJ5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gZS5jbGllbnRYIC8gJCh3aW5kb3cpLmlubmVyV2lkdGgoKSAqIDEwMFxyXG5cclxuICAgICAgICAgICAgJCgnI3N2Z0RhdmlkJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoLVwiICsgZS5jbGllbnRYIC8gNDAgKyBcInB4LCAwLCAwKVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21UcmFuc2Zvcm0oeF9taW4sIHhfbWF4LCB5X21pbiwgeV9tYXgsIHNjYWxlX21pbiwgc2NhbGVfbWF4LCByb3RhdGVfbWluLCByb3RhdGVfbWF4KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeCA9IGdldFJhbmRvbUFyYml0cmFyeSh4X21pbiwgeF9tYXgpXHJcbiAgICAgICAgICAgIHZhciB5ID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHlfbWluLCB5X21heClcclxuICAgICAgICAgICAgdmFyIHNjYWxlID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHNjYWxlX21pbiwgc2NhbGVfbWF4KVxyXG4gICAgICAgICAgICB2YXIgcm90YXRlID0gZ2V0UmFuZG9tQXJiaXRyYXJ5KHJvdGF0ZV9taW4sIHJvdGF0ZV9tYXgpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgMCkgc2NhbGUoJyArIHNjYWxlICsgJykgcm90YXRlKCcgKyByb3RhdGUgKyAnZGVnKSdcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAkKCcuYmFubmVyJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmltYXRpb25TdmcgcGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc1RyYW5zZm9ybSA9IGdldFJhbmRvbVRyYW5zZm9ybSgtMTUwMCwgMTUwMCwgLTE1MDAsIDE1MDAsIDAsIDEsIC00MDAsIDQwMClcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpc1RyYW5zZm9ybSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICQoJy50ZWFtSWxsJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNUcmFuc2Zvcm0gPSBnZXRSYW5kb21UcmFuc2Zvcm0oLTEwLCAxMCwgLTEwLCAxMCwgMSwgMSwgMCwgMClcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJyAgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigncGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYW5pbWF0aW9uU3ZnIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgICAgIC8vIHZhciBpbGxfcyA9ICQoJy5zZXJ2aWNlc2N1cl9fdG9wX19pbGwgc3BhbicpLnRpbHQoKVxyXG4gICAgICAgIC8vIGlsbF9zLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlLCB0cmFuc2Zvcm1zKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZSwgdHJhbnNmb3JtcylcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdmFyIGpvYnNUaW1lclxyXG5cclxuICAgICAgICAkKCcuam9ic0ltYWdlVGFyZ2V0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChqb2JzVGltZXIpXHJcbiAgICAgICAgICAgICQoJy5qb2JzSW1hZ2VIaWRkZW4nKS5hZGRDbGFzcygnam9ic0ltYWdlSGlkZGVuLXZpc2libGUnKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlTGFiZWwnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChqb2JzVGltZXIpXHJcbiAgICAgICAgICAgICQoJy5qb2JzSW1hZ2VIaWRkZW4nKS5yZW1vdmVDbGFzcygnam9ic0ltYWdlSGlkZGVuLXZpc2libGUnKVxyXG4gICAgICAgICAgICAkKCcuam9ic0ltYWdlTGFiZWwnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKCcuYmFubmVyX19kb3duIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGFTY3JvbGxJdGVtID0gJCh0aGlzKS5kYXRhKCdzY3JvbGxpdGVtJylcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJChkYXRhU2Nyb2xsSXRlbSkuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB9LCAxMDAwLCBcInN3aW5nXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhLl9hbmNob3JbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuYmwtc3hfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuYmwtc3hfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5ibC1zeF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0SGVpZ2h0SW5DYXJvdXNlbCgpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodEluQ2Fyb3VzZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEhlaWdodEluQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9jayA9ICQoJy5ibC1zeF9faXRlbV9fYmxvY2snKVxyXG4gICAgICAgICAgICB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpXHJcbiAgICAgICAgICAgIGlmKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmJsLXN4X19pdGVtJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGJsb2NrLm91dGVySGVpZ2h0KCkgKyAyMzBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5ibC1zeF9faXRlbScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwibGF6eUxvYWRJbWFnZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGxhenlMb2FkSW1hZ2VzKCkge1xyXG4gICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5Jyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGltYWdlc1tpXS5zcmMgPSBpbWFnZXNbaV0uZGF0YXNldC5zcmM7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8vIHZhciBtYXA7XHJcbi8vICAgICAgICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuLy8gICAgICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbi8vICAgICAgICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbi8vICAgICAgICAgICAgIHpvb206IDE4LFxyXG4vLyAgICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzdHlsZXM6IFtcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW52ZXJ0X2xpZ2h0bmVzc1wiOiB0cnVlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAxMFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAzMFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbW1hXCI6IDAuNVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiM0MzUxNThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgIHZhciBpY29uID0gJ2h0dHA6Ly9mcm9udGVuZC5kZXYuZG9yb2hvdmRlc2lnbi5ydS9kZC9pbWcvbWFya2VyLnBuZyc7XHJcblxyXG4vLyAgICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45NzQzOTQsIDM2LjA1OTEwNSksXHJcbi8vICAgICAgICAgICAgICAgICBpY29uOiBpY29uLFxyXG4vLyAgICAgICAgICAgICAgICAgbWFwOiBtYXBcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgbWFwQmxvY2sgPSAkKCcjbWFwJylcclxuXHJcbiAgICAgICAgcmVzaXplTWFwKCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZU1hcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplTWFwKCkge1xyXG4gICAgICAgICAgICBpZihtYXBCbG9jay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1hcEJsb2NrLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJjYWxjKDEwMHZoIC0gXCIgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKSArIFwicHgpXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBjbG9zZVRpbWVyXHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDQ1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaXNPcGVuID0gZmFsc2VcclxuICAgICAgICB2YXIgaXNDbGljayA9IHRydWVcclxuXHJcbiAgICAgICAgJCgnI21vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tbW9ibWVudScpXHJcbiAgICAgICAgICAgIGlmKCFpc09wZW4gJiYgaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMTM1LCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcuX19tb2JMaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbWltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGlzT3BlbiAmJiBpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig4MCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdG9nZ2xlRml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaXhlZE5hdmJhcigpXHJcbiAgICAgICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgMTMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdmJhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd05hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcvcG9ydGZvbGlvLycpO1xyXG5cclxuICAgICAgICBpZihpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy9wb3J0Zm9saW8vJylbMV0ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tdHJhbnNwYXJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLS1kYXJrJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnByZXNlbnRhdGlvbl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJlc2VudGF0aW9uX19jYXJvdXNlbF9fYXJyb3cuaXMtLW5leHQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5wcmVzZW50YXRpb24nKS5jc3Moe1xyXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIHRlYW1BbmltYXRpb24oKSBcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICAgICAgICAgICAgdGVhbUFuaW1hdGlvbigpIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uX2VsZW1lbnQgPSAkKCcuX19hbmltJylcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbl9lbGVtZW50LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV90cmFuc2l0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHJhbnNpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2FuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnYW5pbXR5cGUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV9kZWxheSA9ICQodGhpcykuZGF0YSgnYW5pbWRlbGF5JylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGFfZV90cmFuc2l0aW9uICsgJ3MgYWxsIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncydcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYV9lX2FuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGVhbUFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJCgnLmFib3V0X190ZWFtX19jb250ZW50JykudmlzaWJsZSggdHJ1ZSApKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLmFkZENsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGVhbVBpYycpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiLy8gdmFyIHMgPSBza3JvbGxyLmluaXQoKTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBwcm9mLCBhbmltYXRpb25UaW1lclxyXG5cclxuICAgICAgICAkKCcudGVhbVBpYycpLmhvdmVyKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvblRpbWVyKVxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpLmF0dHIoJ2lkJylcclxuICAgICAgICAgICAgcHJvZiA9ICQodGhpcykuYXR0cignaWQnKVxyXG4gICAgICAgICAgICAkKCcjdGVhbUhlYWRpbmcgc3BhbicpLmFkZENsYXNzKCdpcy0tYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbV9faW5uZXInKS5yZW1vdmVDbGFzcygnYmd0ZXh0JylcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtX19jb250ZW50X19jbG91ZCcpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5odG1sKCQodGhpcykuZGF0YSgncHJvZm5hbWUnKSlcclxuICAgICAgICAgICAgJCgnLmFib3V0X190ZWFtJykuYWRkQ2xhc3MoJ2lzLS0nICsgcHJvZilcclxuICAgICAgICAgICAgJCgnLnRlYW1QaWMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdpZCcpICE9IF90aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLXVuaG92ZXInKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW0nKS5yZW1vdmVDbGFzcygnaXMtLScgKyBwcm9mKVxyXG4gICAgICAgICAgICAkKCcuYWJvdXRfX3RlYW1fX2NvbnRlbnRfX2Nsb3VkJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcjdGVhbUhlYWRpbmcgc3BhbicpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICQoJy50ZWFtUGljJykucmVtb3ZlQ2xhc3MoJ2lzLS11bmhvdmVyJylcclxuICAgICAgICAgICAgJCgnI3RlYW1IZWFkaW5nIHNwYW4nKS5odG1sKCfQndCw0YjQsCDQutC+0LzQsNC90LTQsCcpXHJcbiAgICAgICAgICAgICQoJy5hYm91dF9fdGVhbV9faW5uZXInKS5hZGRDbGFzcygnYmd0ZXh0JylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
