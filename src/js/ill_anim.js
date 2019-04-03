(function($) {
    "use strict"
    $(function() {

        $('.banner').mousemove(function(e) {
            // var horizontal 
            if(e.offsetX / $(window).innerWidth() > .5) {
                // console.log('right')
            }else {
                // console.log('left')
            }

            if(e.offsetY / $(window).innerHeight() > .5) {
                // console.log('bottom')
            }else {
                // console.log('top')
            }

        })

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }

        $('#svgDavid path').each(function() {
            $(this).css({
                'transform': 'translate3d(' + getRandomArbitrary(-1500, 1500) + 'px, ' + getRandomArbitrary(-1500, 1500) + 'px, 0) scale(' + getRandomArbitrary(0, 1) + ') rotate(' + getRandomArbitrary(-400, 400) + 'deg)',
                "transition": getRandomArbitrary(.5, 3) + 's all ease'
            })
        })

        setTimeout(function() {
            $('#svgDavid path').each(function() {
                $(this).css({
                    'transform': 'translate3d(0, 0, 0)'
                })
            })
        }, 1000)

    })
})(jQuery);