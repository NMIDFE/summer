(function($) {
    
    $.getScript('js/customize/customize.js');
    
    /**
     * Escape html string, so that it is not parsed as HTML
     * 
     * @param str string
     */
    function dm3_escape_html(str) {
      return str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
    }
    
    
    /**
     * Popover
     * 
     * @param selector string
     * @param callback function
     */
    function dm3_popover(selector, callback) {
        var triggers = $(selector),
            trigger_event = 'click';
        
        triggers.each(function() {
            var trigger = $(this),
                popover = trigger.parent().find('.popover');
                
            popover.click(function(e) {
                e.stopPropagation();
            });
            
            trigger.bind(trigger_event, function(e) {
                var trigger = $(this),
                    popover = trigger.parent().find('.popover');
                
                e.preventDefault();
                e.stopPropagation();
                
                if (typeof callback === 'function') {
                    callback(trigger, popover);
                }
                
                if (popover.is(':visible')) {
                    popover.hide();
                    trigger.removeClass('active');
                } else {
                    popover.show();
                    trigger.addClass('active');
                    
                    $('body').one('click', function() {
                        popover.hide();
                        trigger.removeClass('active');
                    });
                }
            });
        });
    }
    
    
    /**
     * Focus on input field in popovers
     * 
     * @param trigger object
     * @param popover object
     */
    function dm3_popover_input_focus(trigger, popover) {
        setTimeout(function() { popover.find('input[type="text"]').trigger('focus'); }, 200)
    }
    
    
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
     * Load tweets into an html element
     * version 1.0.1
     */
    var dm3_tweets_requests = [];
    
    function dm3_load_tweets(el, default_num) {
        // One tweet by default
        default_num = (parseInt(default_num) == default_num) ? default_num : 1;
        
        el.each(function() {
            var el = $(this);
            
            // get parameters
            var params_str = el.text();
            var params = params_str.split(',');
            var userId = params[0];
    
            if (parseInt(params[1]) == params[1])
                num = parseInt(params[1]);
            else
                num = default_num;
            
            if (typeof dm3_tweets_requests[userId] != 'undefined') {
                var objects = dm3_tweets_requests[userId].objects;
                objects[objects.length] = {
                    el: el,
                    num: num
                };
                
                dm3_tweets_requests[userId].objects = objects;
            } else {
                var objects = [];
                objects[0] = {
                    el: el,
                    num: num
                };
                
                dm3_tweets_requests[userId] = {
                    url: "" + userId + ".json?count=10&callback=?",
                    objects: objects
                };
            }
        });
        
        for (key in dm3_tweets_requests) {
            var request = dm3_tweets_requests[key];
            
            $.ajax({
                url: request.url,
                dataType: "json",
                timeout: 15000,
                success: function(data) {
                    for (obj in request.objects) {
                        var obj = request.objects[obj];
                        var ul = $('<ul>');
                        var li = null;
                        
                        for (i = 0; i < data.length; ++i) {
                            if (i >= obj.num)
                                break;
                            
                            // Create html
                            li = document.createElement('li');
                            li.innerHTML = '@<a href="' + dm3_escape_html(data[i].user.screen_name)
                                + '">' + dm3_escape_html(data[i].user.screen_name) + '</a> ' + dm3_escape_html(data[i].text);
                            
                            ul.append(li);
                        }
                        
                        obj.el.html(ul);
                    }
                }
            });
        }
    }
    
    
    /**
     * Load <num> flickr photos from account ID <flickr_id> into ul element <el>
     * version 1.0
     */
    var dm3_flickr_requests = [];
    
    function dm3_load_flickr_photos(els, default_num, photo_class, li_count) {
        default_num = (parseInt(default_num) == default_num) ? default_num : 1;
        li_count = (parseInt(li_count) == li_count) ? li_count : 3;
        photo_class = (typeof photo_class == 'string') ? photo_class : 'flickr-photo';
        
        els.each(function() {
            var el = $(this);
            
            // Parse parameters
            var num = default_num;
            var params = el.text();
            params = params.split(',');
            var flickr_id = params[0]
            if (parseInt(params[1]) == params[1])
                num = parseInt(params[1]);
            var size = params[2];
            if (typeof size == 'undefined')
                size = 's';
            
            if (typeof dm3_flickr_requests[flickr_id] != 'undefined') {
                var objects = dm3_flickr_requests[flickr_id].objects;
                objects[objects.length] = {
                    el: el,
                    num: num,
                    size: size
                };
                
                dm3_flickr_requests[flickr_id].objects = objects;
            } else {
                var objects = [];
                objects[0] = {
                    el: el,
                    num: num,
                    size: size
                };
                
                dm3_flickr_requests[flickr_id] = {
                    url: "" + flickr_id + '&jsoncallback=?',
                    objects: objects
                };
            }
        });
        
        for (key in dm3_flickr_requests) {
            var request = dm3_flickr_requests[key];
            
            $.getJSON(request.url, function(data) {
                
                for (obj in request.objects) {
                    var obj = request.objects[obj];
                    var htmlString = '<ul>';
                    var count = 0;
                    var li_class = '';
                
                    $.each(data.items, function(i, item) {
                        if (i >= obj.num) {
                            return;
                        }
                            
                        if (count >= li_count) {
                            count = 1;
                        } else {
                            count += 1;
                        }
                        
                        li_class = 'flickr-photo-' + count;
                        
                        if (obj.size != 'm')
                            item.media.m = item.media.m.replace('_m', '_' + obj.size);
                        
                        htmlString += '<li class="'+li_class+'"><a class="'+photo_class+'" href="' + dm3_escape_html(item.link) + '" target="_blank">';
                        htmlString += '<img title="' + dm3_escape_html(item.title) + '" src="' + dm3_escape_html(item.media.m);
                        htmlString += '" alt="';
                        htmlString += dm3_escape_html(item.title) + '" />';
                        htmlString += '</a></li>';
                        
                        ++i;
                    });
                    
                    obj.el.html(htmlString + '</ul>');
                    obj.el.trigger('loaded');
                }
            });
        }
    }
    
    
    /**
     * Items fader (fade out unhovered items in a collection)
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
                items.not('.hovered').animate({ 'opacity': .3 }, { 'duration': 300, 'queue': false });
            }
        });
        
        container.mouseleave(function() {
            if (!container.hasClass('ignore')) {
                items.animate({ 'opacity': 1 }, { 'duration': 300, 'queue': false });
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
                itemPrev.animate({ 'opacity': .3 }, { 'duration': 300, 'queue': false });
                itemPrev.removeClass('hovered');
            }
            item.addClass('hovered');
            item.animate({ 'opacity': 1 }, { 'duration': 300, 'queue': false });
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
     * Services full area click
     * 
     * @param items_selector string
     * @param link_selector string
     */
    function dm3_full_area_click(items_selector, link_selector) {
        var items = $(items_selector);
            
        items.click(function() {
            var item = $(this),
                link = item.find(link_selector + ':first');
            window.location = link.attr('href');
        });
    }
    
    
    function dm3_gallery_filter(filter) {
        var filters = filter.find('a'),
            container = filter.next(),
            items = container.children('.gallery-item'),
            prevFilter = filter.find('.active:first');
        
        filters.click(function(e) {
            var filter = $(this),
                filter_val = filter.data('filter');
                
            prevFilter.removeClass('active');
            filter.addClass('active');
            
            if (filter_val !== 'all') {
                container.addClass('ignore');
            } else {
                container.removeClass('ignore');
            }
            
            e.preventDefault();
            
            items.each(function() {
                var item = $(this),
                    item_filter = item.data('filter');
                
                if (item_filter.indexOf(filter_val) != -1 || filter_val === 'all') {
                    item.animate({ 'opacity': 1 }, { 'duration': 300, 'queue': false });
                    item.removeClass('disabled');
                } else {
                    item.animate({ 'opacity': .3 }, { 'duration': 300, 'queue': false });
                    item.addClass('disabled');
                }
            });
            
            prevFilter = filter;
        });
    }
    
    
    /**
     * Toggle Boxes
     */
    function dm3_toggle_boxes() {
        
        $('.toggle-box').hide();
        
        $('.toggle-header').each(function() {
            var el = $(this);
            var content = el.next('.toggle-box');
            
            if (!content.length)
                return;
            
            this.toggle_open = false;
            
            // bind onclick event to the toggle header
            el.click(function() {
                if (this.toggle_open == true) {
                    el.removeClass('toggle-open');
                    this.toggle_open = false;
                } else {
                    el.addClass('toggle-open');
                    this.toggle_open = true;
                }
                
                content.slideToggle('slow');
            });
        });
    }
    
    
    /**
     * Activate main navigation select box for mobile devices
     */
    function dm3_nav_select() {
        var nav_select = $('#header .nav-select');
        
        nav_select.on('change', function() {
            window.location = $(this).val();
        });
    }
    
    
    /**
     * Initialization
     */
    $(document).ready(function() {
        
        // Select box main navigation for small screen widths
        dm3_nav_select();
        
        // Homepage slideshow
        $('.homepage .r-slider').dm3ResponsiveSlider({
            afterSlideCb: function() {
                var slide = this.slides.eq(this.curSlideNum-1),
                    desc = slide.find('.description:first').html(),
                    desc_container = $('.r-slider-container > .description:first');
                
                if (this.prevSlideNum === this.curSlideNum) {
                    return;
                }
                
                desc_container.fadeOut(300, function() {
                    desc_container.html(desc);
                    desc_container.fadeIn(300);
                });
            }
        });
        
        // Other sliders
        $('.r-slider').dm3ResponsiveSlider();
        
        // Popover
        dm3_popover('.trigger-popover', dm3_popover_input_focus);
        
        // Navigation
        dm3_nav('#header .nav-h:first');
        
        // Tabs
        $('.tabs').dm3Tabs();
        
        // Gallery
        $('.dm3-gallery-trigger').dm3Gallery({
            keyupCb: function(key_code) {
                if (key_code === 13) {
                    window.location = this.content.find('.btn-large:first').attr('href');
                }
            }
        });
        
        // Tweets
        dm3_load_tweets($('.twitter-widget'), 2);
        
        // Flickr
        dm3_load_flickr_photos($('.flickr-widget'));
        
        // Items fader (e.g. gallery fade effect)
        dm3_items_fader('.gallery-container', '.gallery-item');
        
        // Flickr items fader
        $('.flickr-widget').bind('loaded', function() {
            dm3_items_fader($(this), 'li');
        });
        
        // Full area click for services
        dm3_full_area_click('.services > li', '> a');
        
        // Gallery filter
        dm3_gallery_filter($('.gallery-filter'));
        
        // Toggles
        dm3_toggle_boxes();
        
        // Gallery item click
        $('.gallery-item').click(function(e) {
            var item = $(this);
            if (!$(e.target).is('img')) {
                item.find('.dm3-gallery-trigger:first').data('Dm3Gallery').show();
            }
        }).find('.gallery-title a').click(function(e) { e.preventDefault(); });
        
        // Carousel
        $('.dm3-carousel').dm3Carousel({
            afterInitCb: null,
            itemWidth: 140
        });
    });
    
}(jQuery));
