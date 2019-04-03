/*! spyeye - v1.0.1 - 2017-04-20
* https://ifnull.ru
* Copyright (c) 2017 GovNoCoder; Licensed GPLv3 */

;( function ( $, window, document ) {
    var spyEye = function ( elem, options ) {
        this.elem = elem;
        this.$elem = $( elem );
        this.parent = $( elem ).parent();
        this.options = options;
    };
    spyEye.prototype = {
        defaults: {
            a: '', //ellipse semi-major axis
            b: '', // ellipse semi-minor axis
            x: '', // ellipse center left position
            y: '', // ellipse center top position
            rotation: 0 // rotation angle
        },
        init: function ( ) {
            this.settings = $.extend( { }, this.defaults, this.options );
            $( document ).on( 'mousemove', $.proxy( this.move, this ) );
            return this;
        },
        move: function ( e ) {
            this.position( e.pageX, e.pageY );
        },
        position: function ( x, y ) {
            var fi = this.angle( x, y ),
                alpha = this.settings.rotation,
                eyeX = this.settings.a * Math.cos( fi ),
                eyeY = this.settings.b * Math.sin( fi ),
                left = eyeX,
                top = eyeY;
            if ( alpha ) {
                left = eyeX * Math.cos( alpha ) - eyeY * Math.sin( alpha );
                top = eyeX * Math.sin( alpha ) + eyeY * Math.cos( alpha );
            }
            this.$elem.css( {
                left: this.settings.x - this.$elem.width() / 2 + left,
                top: this.settings.y - this.$elem.height() / 2 - top
            } );
        },
        angle: function ( x, y ) {
            var offset = this.parent.offset();
            var dx = x - this.settings.x - offset.left;
            var dy = y - this.settings.y - offset.top;
            var fi = -Math.atan2( dy, dx ) - this.settings.rotation;
            if ( fi < 0 ) {
                fi += 2 * Math.PI;
            }
            return fi;
        }
    };
    $.fn.spyEye = function ( options ) {
        return this.each( function ( ) {
            new spyEye( this, options ).init( );
        } );
    };
} )( jQuery, window, document );
