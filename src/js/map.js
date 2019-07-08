// var map;
//         function initMap() {
//           map = new google.maps.Map(document.getElementById('map'), {
//             center: new google.maps.LatLng(52.974394, 36.059105),
//             zoom: 18,
//             disableDefaultUI: true,
//             styles: [
//                 {
//                     "featureType": "all",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "invert_lightness": true
//                         },
//                         {
//                             "saturation": 10
//                         },
//                         {
//                             "lightness": 30
//                         },
//                         {
//                             "gamma": 0.5
//                         },
//                         {
//                             "hue": "#435158"
//                         }
//                     ]
//                 }
//             ]
//           });
//           var icon = 'http://frontend.dev.dorohovdesign.ru/dd/img/marker.png';

//             var marker = new google.maps.Marker({
//                 position: new google.maps.LatLng(52.974394, 36.059105),
//                 icon: icon,
//                 map: map
//             });
//         }

(function($) {
    "use strict"
    $(function() {

        var mapBlock = $('#map')

        resizeMap();

        $(window).resize(function() {
            resizeMap()
        })

        function resizeMap() {
            if(mapBlock.length) {
                mapBlock.css({
                    "height": "calc(100vh - " + $('.footer').innerHeight() + "px)"
                })
            }
        }

    })
})(jQuery);