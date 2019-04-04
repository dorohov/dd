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
            if(!isOpen && isClick) {
                console.log('Сработало 1')
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
                console.log('Сработало 2')
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
                    }
                })
            }

        })

    })
})(jQuery);