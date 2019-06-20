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