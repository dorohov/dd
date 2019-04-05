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
        }

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
    }
});
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

        $(document).scroll(function() {
            var portfolio__block  = $('.portfolio__block')

            portfolio__block.each(function() {
                if($(this).visible(true)) {
                    $(this).addClass('is--visible')
                }else {
                    $(this).removeClass('is--visible')
                }
            })
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnX3RleHQuanMiLCJmb3JtLmpzIiwiZ2VvbWV0cnkuanMiLCJpbGxfYW5pbS5qcyIsImxhenkuanMiLCJuYXZiYXIuanMiLCJwb3J0Zm9saW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwbGF5QmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHBsYXlCZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlCZygpIHtcclxuICAgICAgICAgICAgJCgnLmJndGV4dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5mb3JtX19ncm91cC5pcy0tdGV4dCBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy0tZm9jdXMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmZvcm1fX2dyb3VwLmlzLS10ZXh0IGlucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1mb2N1cycpXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLS1ub3RlbXB0eScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjcmVzdW1lJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBmbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGZuLm1hdGNoKC9bXlxcXFwvXSokLylbMF07XHJcblxyXG4gICAgICAgICAgICAkKCdsYWJlbC5pcy0tcmVzdW1lJykuaHRtbChmaWxlbmFtZSlcclxuICAgICAgICAgICAgJCgnbGFiZWwuaXMtLXJlc3VtZScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICQoJy5nZW9tZXRyeScpLFxyXG4gICAgICAgICAgICBjaXJjbGU6ICQoJy5nZW9tZXRyeV9fY2lyY2xlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEdlb21ldHJ5KClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0R2VvbWV0cnkoKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICBlbGVtZW50cy5jaXJjbGUuY3NzKCd3aWR0aCcsIGhlaWdodClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgICAgICBpZigkKCcuZm9vdGVyJykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuY29udGFpbmVyLmFkZENsYXNzKCdpcy0tc3RvcCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRHZW9tZXRyeSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRHZW9tZXRyeSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGUuY2xpZW50WCAvICQod2luZG93KS5pbm5lcldpZHRoKCkgKiAxMDBcclxuXHJcbiAgICAgICAgICAgICQoJyNzdmdEYXZpZCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKC1cIiArIGUuY2xpZW50WCAvIDQwICsgXCJweCwgMCwgMClcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXInKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRQb3NpdGl0aW9uRm9yRGF2aWQoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpdGlvbkZvckRhdmlkKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuaW1hdGlvblN2ZyBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBnZXRSYW5kb21BcmJpdHJhcnkoLTE1MDAsIDE1MDApICsgJ3B4LCAnICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KC0xNTAwLCAxNTAwKSArICdweCwgMCkgc2NhbGUoJyArIGdldFJhbmRvbUFyYml0cmFyeSgwLCAxKSArICcpIHJvdGF0ZSgnICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KC00MDAsIDQwMCkgKyAnZGVnKSdcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogdGhpc1RyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiB0aGlzVHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRoaXNUcmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpc1RyYW5zZm9ybSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuYW5pbWF0aW9uU3ZnIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenknKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnNyYyA9IGltYWdlc1tpXS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiAnMTAwdncnLCAvLyAtPiAnMjUwcHgnXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiA0NSwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGlzT3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdmFyIGlzQ2xpY2sgPSB0cnVlXHJcblxyXG4gICAgICAgICQoJyNtb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICBpZighaXNPcGVuICYmIGlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGlzQ2xpY2sgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVpbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcjbW9iaWxlTWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IDEzNSwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJy5fX21vYkxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDE1MCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oYW1pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihpc09wZW4gJiYgaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgaXNDbGljayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAkKCcjbW9iaWxlTWVudScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAnLl9fbW9iTGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNDUsIC8vIC0+ICcyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6ICcubW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogJyNtb2JpbGVNZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gLT4gJzI1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9ICFpc09wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsaWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1vYm1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZpeGVkTmF2YmFyKClcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGVOYXZiYXIoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd05hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRml4ZWROYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZihzY3JvbGxUb3AgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsVG9wID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAxMzApIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2YmFyKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93TmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1oaWRlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWhpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIGMgPSAxXHJcbiAgICAgICAgLy8gdmFyIHIgPSAuNlxyXG5cclxuICAgICAgICAvLyB2YXIgY2VudGVyVHJhbnNmb3JtID0gY1xyXG4gICAgICAgIC8vIHZhciByaWdodFRyYW5zZm9ybSA9IHJcclxuICAgICAgICAvLyB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAvLyAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJChcIi5wb3J0Zm9saW9fX2lubmVyXCIpLm9mZnNldCgpLnRvcCArICQoXCIucG9ydGZvbGlvX19pbm5lclwiKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKClcclxuICAgICAgICAvLyAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY2VudGVyVHJhbnNmb3JtRmluYWwgPSAndHJhbnNsYXRlWSgtJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKC0nICsgcmlnaHRUcmFuc2Zvcm0gKyAncHgpJ1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGNlbnRlclRyYW5zZm9ybUZpbmFsID0gJ3RyYW5zbGF0ZVkoJyArIGNlbnRlclRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgcmlnaHRUcmFuc2Zvcm1GaW5hbCA9ICd0cmFuc2xhdGVZKCcgKyByaWdodFRyYW5zZm9ybSArICdweCknXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2VudGVyVHJhbnNmb3JtICs9IGNcclxuICAgICAgICAvLyAgICAgICAgIHJpZ2h0VHJhbnNmb3JtICs9IHJcclxuICAgICAgICAvLyAgICAgbGFzdFNjcm9sbFRvcCA9IHN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgLy8gICAgICAgICAkKCcucG9ydGZvbGlvX19ibG9jay5pcy0tY2VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJyAgICA6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybScgICAgIDogY2VudGVyVHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiBjZW50ZXJUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGNlbnRlclRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgJCgnLnBvcnRmb2xpb19fYmxvY2suaXMtLXJpZ2h0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nICAgIDogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nICAgICA6IHJpZ2h0VHJhbnNmb3JtRmluYWwsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiByaWdodFRyYW5zZm9ybUZpbmFsLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogcmlnaHRUcmFuc2Zvcm1GaW5hbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Jsb2NrJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybScgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJyAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXJUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmlnaHRUcmFuc2Zvcm0gPSAwXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjZW50ZXJUcmFuc2Zvcm0pXHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHBvcnRmb2xpb19fYmxvY2sgID0gJCgnLnBvcnRmb2xpb19fYmxvY2snKVxyXG5cclxuICAgICAgICAgICAgcG9ydGZvbGlvX19ibG9jay5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLXZpc2libGUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLS12aXNpYmxlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
