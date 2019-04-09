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


        $('.banner').mousemove(function(e) {
            setPosititionForDavid(e)
        })

        $('.navbar').mousemove(function(e) {
            setPosititionForDavid(e)
        })

        $('.animationSvg path').each(function() {

            var thisTransform = 'translate3d(' + getRandomArbitrary(-1500, 1500) + 'px, ' + getRandomArbitrary(-1500, 1500) + 'px, 0) scale(' + getRandomArbitrary(0, 1) + ') rotate(' + getRandomArbitrary(-400, 400) + 'deg)'

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

        setTimeout(function() {
            $('.animationSvg path').each(function() {
                $(this).css({
                    'transform': 'translate3d(0, 0, 0)'
                })
            })
        }, 1000)

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnX3RleHQuanMiLCJibG9ja3MuanMiLCJibG9nLmpzIiwiZm9vdGVyLmpzIiwiZm9ybS5qcyIsImdlb21ldHJ5LmpzIiwiaWxsX2FuaW0uanMiLCJsYXp5LmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXlCZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcGxheUJnKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGxheUJnKCkge1xyXG4gICAgICAgICAgICAkKCcuYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaGVhZGluZy5pcy0tYmd0ZXh0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGMgPSAxXHJcbiAgICAgICAgLy8gdmFyIHIgPSAuNlxyXG5cclxuICAgICAgICAvLyB2YXIgY2VudGVyVHJhbnNmb3JtID0gY1xyXG4gICAgICAgIC8vIHZhciByaWdodFRyYW5zZm9ybSA9IHJcclxuICAgICAgICAvLyB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAvLyAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcCArICQoXCIucG9ydGZvbGlvX19pbm5lclwiKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAvLyAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgtJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgcmlnaHRUcmFuc2Zvcm0gKyAncHgpJ1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGNlbnRlclRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKCcgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2VudGVyVHJhbnNmb3JtICs9IGNcclxuICAgICAgICAvLyAgICAgICAgIHJpZ2h0VHJhbnNmb3JtICs9IHJcclxuICAgICAgICAvLyAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tY2VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2suaXMtLXJpZ2h0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXJUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjZW50ZXJUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd0Jsb2NrKClcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dCbG9jaygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Jsb2NrKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9ydGZvbGlvX19ibG9jayAgPSAkKCcudmlzYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgcG9ydGZvbGlvX19ibG9jay5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tdmlzaWJsZScpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgdGltZXJcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gJCgnLmZvb3Rlcl9fbWVudXNfX2lubmVyIHVsIGxpIGEnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdmFyIHRoaXNMaW5rID0gJCh0aGlzKVxyXG4gICAgICAgIC8vICAgICB0aGlzTGluay5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG5cclxuICAgICAgICAvLyAgICAgdGhpc0xpbmsuYWZ0ZXIoKS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc0xpbmsucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLXRleHQgaW5wdXQnKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtLWZvY3VzJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy0tbm90ZW1wdHknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI3Jlc3VtZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZm4gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBmbi5tYXRjaCgvW15cXFxcL10qJC8pWzBdO1xyXG5cclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmh0bWwoZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICQoJ2xhYmVsLmlzLS1yZXN1bWUnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAkKCcuZ2VvbWV0cnknKSxcclxuICAgICAgICAgICAgY2lyY2xlOiAkKCcuZ2VvbWV0cnlfX2NpcmNsZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHZW9tZXRyeSgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnd2lkdGgnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmNpcmNsZS5jc3MoJ2hlaWdodCcsIGhlaWdodClcclxuICAgICAgICAgICAgaWYoJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5hZGRDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLS1zdG9wJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBlLmNsaWVudFggLyAkKHdpbmRvdykuaW5uZXJXaWR0aCgpICogMTAwXHJcblxyXG4gICAgICAgICAgICAkKCcjc3ZnRGF2aWQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUzZCgtXCIgKyBlLmNsaWVudFggLyA0MCArIFwicHgsIDAsIDApXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAkKCcuYmFubmVyJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aXRpb25Gb3JEYXZpZChlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmltYXRpb25TdmcgcGF0aCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc1RyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KC0xNTAwLCAxNTAwKSArICdweCwgJyArIGdldFJhbmRvbUFyYml0cmFyeSgtMTUwMCwgMTUwMCkgKyAncHgsIDApIHNjYWxlKCcgKyBnZXRSYW5kb21BcmJpdHJhcnkoMCwgMSkgKyAnKSByb3RhdGUoJyArIGdldFJhbmRvbUFyYml0cmFyeSgtNDAwLCA0MDApICsgJ2RlZyknXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJyAgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGdldFJhbmRvbUFyYml0cmFyeSguNSwgMykgKyAncyBhbGwgZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNUcmFuc2Zvcm0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmFuaW1hdGlvblN2ZyBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwidmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5Jyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGltYWdlc1tpXS5zcmMgPSBpbWFnZXNbaV0uZGF0YXNldC5zcmM7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuICAgIH1cclxufSk7IiwidmFyIG1hcDtcclxuICAgICAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk3NDM5NCwgMzYuMDU5MTA1KSxcclxuICAgICAgICAgICAgem9vbTogMTgsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnZlcnRfbGlnaHRuZXNzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogMC41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHVlXCI6IFwiIzQzNTE1OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIGljb24gPSAnaHR0cDovL2Zyb250ZW5kLmRvcm9ob3ZkZXNpZ24ucnUvZGQvaW1nL21hcmtlci5wbmcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTIuOTc0Mzk0LCAzNi4wNTkxMDUpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hcEJsb2NrID0gJCgnI21hcCcpXHJcblxyXG4gICAgICAgIHJlc2l6ZU1hcCgpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNpemVNYXAoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZU1hcCgpIHtcclxuICAgICAgICAgICAgaWYobWFwQmxvY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBCbG9jay5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiY2FsYygxMDB2aCAtIFwiICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KCkgKyBcInB4KVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiAnMTAwdncnLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiA0NSwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGlzT3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdmFyIGlzQ2xpY2sgPSB0cnVlXHJcblxyXG4gICAgICAgICQoJyNtb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICBpZighaXNPcGVuICYmIGlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVpbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcjbW9iaWxlTWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IDEzNSwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDE1MCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW1pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihpc09wZW4gJiYgaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAkKCcjbW9iaWxlTWVudScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdG9nZ2xlRml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaXhlZE5hdmJhcigpXHJcbiAgICAgICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbFRvcCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgMTMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdmJhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd05hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0taGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
