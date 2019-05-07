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