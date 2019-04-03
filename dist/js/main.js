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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb21ldHJ5LmpzIiwiaWxsX2FuaW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAkKCcuZ2VvbWV0cnknKSxcclxuICAgICAgICAgICAgY2lyY2xlOiAkKCcuZ2VvbWV0cnlfX2NpcmNsZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRHZW9tZXRyeSgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgZWxlbWVudHMuY2lyY2xlLmNzcygnd2lkdGgnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmNpcmNsZS5jc3MoJ2hlaWdodCcsIGhlaWdodClcclxuICAgICAgICAgICAgaWYoJCgnLmZvb3RlcicpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmNvbnRhaW5lci5hZGRDbGFzcygnaXMtLXN0b3AnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLS1zdG9wJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0R2VvbWV0cnkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5iYW5uZXInKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyB2YXIgaG9yaXpvbnRhbCBcclxuICAgICAgICAgICAgaWYoZS5vZmZzZXRYIC8gJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA+IC41KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVmdCcpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGUub2Zmc2V0WSAvICQod2luZG93KS5pbm5lckhlaWdodCgpID4gLjUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdib3R0b20nKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndG9wJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI3N2Z0RhdmlkIHBhdGgnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBnZXRSYW5kb21BcmJpdHJhcnkoLTE1MDAsIDE1MDApICsgJ3B4LCAnICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KC0xNTAwLCAxNTAwKSArICdweCwgMCkgc2NhbGUoJyArIGdldFJhbmRvbUFyYml0cmFyeSgwLCAxKSArICcpIHJvdGF0ZSgnICsgZ2V0UmFuZG9tQXJiaXRyYXJ5KC00MDAsIDQwMCkgKyAnZGVnKScsXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogZ2V0UmFuZG9tQXJiaXRyYXJ5KC41LCAzKSArICdzIGFsbCBlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyNzdmdEYXZpZCBwYXRoJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
