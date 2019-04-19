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