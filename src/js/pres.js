(function($) {
    "use strict"
    $(function() {

        var index = window.location.href.indexOf('/portfolio/');
        if(index > 0) {
            $('.navbar').removeClass('is--transparent')
                        .addClass('is--dark')
        }

    })
})(jQuery);