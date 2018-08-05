(function($) {
    /**
     * Process site navigation
     * 
     * @param selector string
     */
    function dm3_nav(selector) {
        var nav = $(selector);

        nav.find('ul').each(function() {
            var ul = $(this),
            pointer = $('<span class="nav-pointer">&raquo;</span>'),
            arrow = $('<span class="pointer"></span>');

            arrow.insertAfter(ul);
            ul.parent().find('a:first').append(pointer);
        });
    }

    /**
     * Items fader 
     * 
     * @param container_selector string
     * @param item_selector string
     */
    function dm3_items_fader(container_selector, item_selector) {
        var container = (typeof container_selector == 'string') ? $(container_selector) : container_selector,
        items = container.find(item_selector),
        itemPrev = null,
        ignore = false;

        container.mouseenter(function() {
            if (!container.hasClass('ignore')) {
                items.not('.hovered').animate({
                    'opacity': .3
                },
                {
                    'duration': 200,
                    'queue': false
                });
            }
        });

        container.mouseleave(function() {
            if (!container.hasClass('ignore')) {
                items.animate({
                    'opacity': 1
                },
                {
                    'duration': 200,
                    'queue': false
                });
                items.removeClass('hovered');
            }
        });

        var item_hover = function(item) {
            if (container.hasClass('ignore')) {
                if (itemPrev) {
                    itemPrev.removeClass('hovered');
                    itemPrev = null;
                }
                return;
            }

            if (itemPrev) {
                itemPrev.animate({
                    'opacity': .3
                },
                {
                    'duration': 200,
                    'queue': false
                });
                itemPrev.removeClass('hovered');
            }
            item.addClass('hovered');
            item.animate({
                'opacity': 1
            },
            {
                'duration': 200,
                'queue': false
            });
            itemPrev = item;
        };

        items.each(function() {
            var item = $(this);

            item.hover(function() {
                item_hover($(this));
            });
        });
    }

    /**
     * Activate main navigation select box for mobile devices
     */
    function dm3_nav_select() {
        var nav_select = $('#box .nav-select');

        nav_select.on('change',
        function() {
            window.location = $(this).val();
        });
    }

    /**
     * Initialization
     */
    $(document).ready(function() {

        // Select box main navigation for small screen widths
        dm3_nav_select();

        // box slideshow
        $('.box .r-slider').dm3ResponsiveSlider({
            afterSlideCb: function() {
                var slide = this.slides.eq(this.curSlideNum - 1),
                desc = slide.find('.description:first').html(),
                desc_container = $('.r-slider-container > .description:first');

                if (this.prevSlideNum === this.curSlideNum) {
                    return;
                }

                desc_container.fadeOut(100,
                function() {
                    desc_container.html(desc);
                    desc_container.fadeIn(100);
                });
            }
        });

        // Other sliders
        $('.r-slider').dm3ResponsiveSlider();

        // Navigation
        dm3_nav('#box .nav-h:first');

    });

} (jQuery));