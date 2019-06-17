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