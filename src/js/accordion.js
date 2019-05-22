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