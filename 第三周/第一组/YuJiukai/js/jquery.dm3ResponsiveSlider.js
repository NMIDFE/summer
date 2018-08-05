/*
 Dm3ResponsiveSlider
 v 1.0
 05.20.2012
 */

(function($) {
    
    "use strict";
    
    /**
     * Dm3ResponsiveSlider Constructor
     */
    function Dm3ResponsiveSlider(scroller, options) {
        this.o = options;
        this.scroller = scroller;
        if (this.scroller.hasClass('r-slider-processed')) {
            return;
        }
        this.scroller.addClass('r-slider-processed');
        this.inner = scroller.find('.r-slider-inner:first');
        this.slides = this.inner.children();
        this.numSlides = this.slides.length;
        this.slideWidth = 0;
        this.sliderWidth = 0;
        this.curSlideNum = 1;
        this.prevSlideNum = 1;
        
        this.startX;
        this.scrollFrom;
        this.activateScroll = this.slideWidth / 2;
        this.curScrollLeft = 0;
        this.triggerWidth = options.triggerWidth;
        this.dx;
        
        this.moving;
        this.sliding;
        
        this.points = null;
        
        this.autoscroll = parseInt(options.autoscroll) * 1000;
        this.autoscrollTimeout = null;
        
        this.init();
    }
    
    
    /**
     * Prototype
     */
    Dm3ResponsiveSlider.prototype = {
        /**
         * Initialize
         */
        init: function() {
            var that = this,
                win = $(window);
            
            /**
             * When window size changes
             */
            win.resize(function() {
                that.resize();
            });
            
            that.resize();
            
            /**
             * User initiated the movement
             */
            that.inner.bind('mousedown touchstart', function(e) {
                e.preventDefault();
                that.dx = 0;
                
                if (that.sliding) { return; }
                
                that.startX = e.clientX || e.originalEvent.touches[0].pageX;
                that.scrollFrom = parseInt(that.inner.css('marginLeft'));
                that.moving = true;
            });
            
            /**
             * User is moving the slide
             */
            that.inner.bind('mousemove touchmove', function(e) {
                var x, scrollTo;
                
                e.preventDefault();
                
                if (!that.moving || that.sliding) { return; }
                
                x = e.clientX || e.originalEvent.touches[0].pageX;
                
                that.dx = that.startX - x;
                scrollTo = that.scrollFrom - that.dx;
                
                if (that.curSlideNum <= 1 && that.dx < that.slideWidth * (-.2)) {
                    return;
                } else if (that.curSlideNum >= that.numSlides && that.dx > that.slideWidth * .2) {
                    return;
                }
                
                that.inner.css('marginLeft', scrollTo + 'px');
            });
            
            /**
             * User released the slide
             */
            $('body').bind('mouseup mouseleave touchend', function(e) {
                that.onMouseUp(e);
            });
            
            this.setupControls();
            this.startAutoscroll();
        },
        
        
        /**
         * Start autoscroll
         */
        startAutoscroll: function() {
            var that = this;
            
            if (this.autoscroll) {
                this.autoscrollTimeout = setInterval(function() {
                    that.processAutoscroll();
                }, this.autoscroll);
            }
        },
        
        
        /**
         * Process autoscroll
         */
        processAutoscroll: function() {
            if (this.moving) {
                return;
            }
            
            this.go('next');
        },
        
        
        /**
         * Stop autoscroll
         */
        stopAutoscroll: function() {
            clearInterval(this.autoscrollTimeout);
            this.autoscrollTimeout = null;
        },
        
        
        /**
         * Setup controls
         */
        setupControls: function() {
            var that = this,
                controls = $('<div class="r-slider-controls"></div>'),
                points = $('<div class="r-slider-points"></div>');
            
            if (this.scroller.data('prevnext') != 'no') {
                if (this.o.navPrevHtml) {
                    controls.append($(this.o.navPrevHtml));
                } else {
                    controls.append($('<a class="r-slider-prev" href="#">prev</a>'));
                }
                
                if (this.o.navNextHtml) {
                    controls.append($(this.o.navNextHtml));
                } else {
                    controls.append($('<a class="r-slider-prev" href="#">prev</a>'));
                }
                
                controls.insertAfter(this.scroller);
                
                controls.children().click(function(e) {
                    var control = $(this);
                    
                    that.stopAutoscroll();
                    
                    if (control.is(':first-child')) {
                        // left
                        that.go('prev');
                    } else {
                        // right
                        that.go('next');
                    }
                    
                    e.preventDefault();
                });
            }
            
            points.insertAfter(this.scroller);
            
            this.points = points;
            
            this.slides.each(function(i) {
                var slide = $(this),
                    point = $('<a class="r-slider-point" href="#" data-slidenum="' + (i+=1) + '">' + i + '</a>');
                
                points.append(point);
                
                if (i == that.curSlideNum) {
                    point.addClass('r-slider-current');
                }
                
                point.click(function(e) {
                    var point = $(this);
                    that.stopAutoscroll();
                    that.go(point.attr('data-slidenum'));
                    e.preventDefault();
                });
            });
        },
        
        
        /**
         * Adjust dimensions according to window size
         */
        resize: function() {
            var w = this.scroller.width(),
                ratio = (w / this.slideWidth);
                
            this.curScrollLeft = -1 * (this.curSlideNum * w - w);
            
            if (ratio !== 0) {
                this.inner.css('marginLeft', this.curScrollLeft + 'px');
            }
            
            this.slideWidth = w;
            this.sliderWidth = w * this.numSlides;
            
            this.inner.find('img').css({ width: w + 'px' });
        },
        
        
        /**
         * User releases the slide
         */
        onMouseUp: function(e) {
            e.preventDefault();
            
            if (this.sliding || this.dx === null) { return; }
            
            this.moving = false;
            
            this.stopAutoscroll();
            
            if ((this.curSlideNum >= this.numSlides && this.dx > 0) || (this.curSlideNum <= 1 && this.dx < 0)) {
                this.go(this.curSlideNum);                
                return;
            }
            
            if (Math.abs(this.dx) > this.triggerWidth) {
                if (this.dx > 0) {
                    this.go('next');
                } else {
                    this.go('prev');
                }
            } else {
                this.go(this.curSlideNum);
            }
            
            this.dx = null;
        },
        
        
        /**
         * Move to another slide
         */
        go: function(dir) {
            var that = this,
                slideNum,
                scrollVal;
        
            slideNum = this.curSlideNum;
        
            this.sliding = true;
            
            if (dir == 'next') {
                slideNum += 1;
            } else if (dir == 'prev') {
                slideNum -= 1;
            } else {
                slideNum = parseInt(dir);
            }
            
            if (slideNum > this.numSlides) {
                slideNum = 1;
            }
            
            if (slideNum < 1) {
                slideNum = this.numSlides;
            }
            
            scrollVal = slideNum * this.slideWidth - this.slideWidth;
            scrollVal *= -1;
            
            if (parseInt(this.inner.css('marginLeft')) == scrollVal) {
                this.sliding = false;
                return;
            }
           
            that.inner.animate({ marginLeft: scrollVal + 'px' }, { duration: 300, complete: function() {
                that.curScrollLeft = scrollVal;
                that.sliding = false;
                
                if (typeof that.o.afterSlideCb == 'function') {
                    that.o.afterSlideCb.apply(that);
                }
                
                if (that.autoscrollTimeout === null) {
                    that.startAutoscroll();
                }
            }});
            
            if (this.points) {
                this.points.children().eq(this.curSlideNum - 1).removeClass('r-slider-current');
            }
            
            this.prevSlideNum = this.curSlideNum;
            this.curSlideNum = slideNum;
            
            if (this.points) {
                this.points.children().eq(this.curSlideNum - 1).addClass('r-slider-current');
            }
        }
        
    };
    
    
    /**
     * Register jQuery plugin
     */
    $.fn.dm3ResponsiveSlider = function(options) {
        options = $.extend({
            triggerWidth: 60,
            autoscroll: 7,
            navPrevHtml: '<a href="#">&laquo;</a>',
            navNextHtml: '<a href="#">&raquo;</a>'
        }, options);
        
        this.each(function() {
            var slider = new Dm3ResponsiveSlider($(this), options);
        });
    };
    
})(jQuery);