(function($) {
    "use strict";
    /*------------------------------------
	// Header
	------------------------------------*/
    // Fixed header
    $(window).on("scroll", function() {
        if ($("header").hasClass("sticky-on")) {
            let stickyPlaceHolder = $("#sticky-placeholder"),
                menu = $("#navbar-wrap"),
                menuH = menu.outerHeight(),
                topbarH = $("#topbar-wrap").outerHeight() || 0,
                targrtScroll = topbarH,
                header = $("header");
            if ($(window).scrollTop() > 400) {
                header.addClass("sticky");
                stickyPlaceHolder.height(menuH);
            } else {
                header.removeClass("sticky");
                stickyPlaceHolder.height(0);
            }
        }

        $(window).on("scroll", function() {
            const stickyPlaceHolder = $("#mobile-sticky-placeholder"),
                menu = $("#mobile-menu-bar-wrap"),
                menuH = menu.outerHeight(),
                topbarH = $("#mobile-top-bar").outerHeight() || 0,
                topAdminH = $('#wpadminbar').outerHeight() || 0,
                targrtScroll = topbarH + topAdminH;
            if ($(window).scrollTop() > targrtScroll) {
                $("#meanmenu").addClass("mobile-sticky");
                stickyPlaceHolder.height(menuH);
            } else {
                $("#meanmenu").removeClass("mobile-sticky");
                stickyPlaceHolder.height(0);
            }
        });
    });

    /*-------------------------------------
  Theia Side Bar
	-------------------------------------*/
    if (typeof($.fn.theiaStickySidebar) !== "undefined") {
        $('.sticky-coloum-wrap .sticky-coloum-item').theiaStickySidebar({
            additionalMarginTop: 130
        });
    }

    // humburger
    $(".humburger").on("click", function() {
        $(".humburger").toggleClass("active");
    });

    /*-------------------------------------
      Mobile Menu Toggle
      -------------------------------------*/
    $(".sidebarBtn").on("click", function(e) {
        e.preventDefault();
        if ($(".rt-slide-nav").is(":visible")) {
            $(".rt-slide-nav").slideUp();
            $("body").removeClass("slidemenuon");
        } else {
            $(".rt-slide-nav").slideDown();
            $("body").addClass("slidemenuon");
        }
    });

    /*-------------------------------------
      Mobile Menu Dropdown
      -------------------------------------*/
    let rtMobileMenu = $(".offscreen-navigation .menu");

    if (rtMobileMenu.length) {
        rtMobileMenu.children("li").addClass("menu-item-parent");
        rtMobileMenu.find(".menu-item-has-children > a").on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("opened");
            let n = $(this).next(".sub-menu"),
                s = $(this).closest(".menu-item-parent").find(".sub-menu");
            rtMobileMenu
                .find(".sub-menu")
                .not(s)
                .slideUp(250)
                .prev("a")
                .removeClass("opened"),
                n.slideToggle(250);
        });
        rtMobileMenu
            .find(".menu-item:not(.menu-item-has-children) > a")
            .on("click", function(e) {
                $(".rt-slide-nav").slideUp();
                $("body").removeClass("slidemenuon");
            });
    }

    /*-------------------------------------
	// count down
	------------------------------------*/
    let eventCounter4 = $("#count-down-4");
    if (eventCounter4.length) {
        eventCounter4.countdown("2022/09/30", function(e) {
            $(this).html(
                e.strftime(
                    '<div class="count-down-block"><span>%D</span> :</div> <div class="count-down-block"> <span>%H</span> :</div><div class="count-down-block"> <span>%M </span>:</div><div class="count-down-block"> <span> %S </span></div>'
                )
            );
        });
    }


    /*-------------------------------------
	// Price range filter 
	-------------------------------------*/
    let rtCheckListItem = $(".rt-check-list li.item");
    rtCheckListItem &&
        rtCheckListItem.on("click", function() {
            $(this).siblings("li.item").removeClass("active");
            $(this).addClass("active");
        });

    /*-----------------------------------
    // counter up
    ----------------------------------*/
    let counter = true;
    $(".counter-appear").appear();
    $(".counter-appear").on("appear", function() {
        if (counter) {
            // with skill bar
            $(".skill-per").each(function() {
                let $this = $(this);
                let per = $this.attr("data-per");
                $this.css("width", per + "%");
                $({
                    animatedValue: 0
                }).animate({
                    animatedValue: per
                }, {
                    duration: 1000,
                    step: function() {
                        $this.attr("data-per", Math.floor(this.animatedValue) + "%");
                    },
                    complete: function() {
                        $this.attr("data-per", Math.floor(this.animatedValue) + "%");
                    },
                });
            });
            counter = false;
        }
    });

    /*=======================================
    //  Custom btn
    ========================================*/

    let rtCsFilteBtn = $(".rt-cs-filter-btn");

    if (rtCsFilteBtn) {
        $(rtCsFilteBtn).on("click", function() {
            $(this).toggleClass("active");
        });
    }
    /*=======================================
    //  Isotope initialization
    ========================================*/
    let rtIsotopeWrap1 = $(".rt-isotope-wrap-1");
    if (rtIsotopeWrap1.length > 0) {
        let $isotope;
        let blogGallerIso = $(
            ".rt-isotope-container-1",
            rtIsotopeWrap1
        ).imagesLoaded(function() {
            $isotope = $(".rt-isotope-container-1", rtIsotopeWrap1).isotope({
                filter: "*",
                transitionDuration: "1s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)",
                },
                visibleStyle: {
                    transform: "scale(1)",
                    opacity: 1,
                },
            });
        });
        rtIsotopeWrap1.find(".rt-isotope-menu-1").on("click", "a", function() {
            let $this = $(this);
            $this.parent(".rt-isotope-menu-1").find("a").removeClass("current");
            $this.addClass("current");
            let selector = $this.attr("data-filter");
            $isotope.isotope({
                filter: selector,
            });
            return false;
        });
    }

    /*-------------------------------------
       Input Quantity Up & Down activation code
       -------------------------------------*/
    $("#quantity-holder,#quantity-holder2")
        .on("click", ".quantity-plus", function() {
            let $holder = $(this).parents(".quantity-holder");
            let $target = $holder.find("input.quantity-input");
            let $quantity = parseInt($target.val(), 10);
            if ($.isNumeric($quantity) && $quantity > 0) {
                $quantity = $quantity + 1;
                $target.val($quantity);
            } else {
                $target.val($quantity);
            }
        })
        .on("click", ".quantity-minus", function() {
            let $holder = $(this).parents(".quantity-holder");
            let $target = $holder.find("input.quantity-input");
            let $quantity = parseInt($target.val(), 10);
            if ($.isNumeric($quantity) && $quantity >= 2) {
                $quantity = $quantity - 1;
                $target.val($quantity);
            } else {
                $target.val(1);
            }
        });

    /*================================== start Utilities ========================================*/
    function parallaxIt(e, target_class, movement) {
        let $wrap = $(e.target).parents(".motion-effects-wrap");
        if (!$wrap.length) return;
        let $target = $wrap.find(target_class);
        let relX = e.pageX - $wrap.offset().left;
        let relY = e.pageY - $wrap.offset().top;
        TweenMax.to($target, 1, {
            x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
            y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
        });
    }

    /*-------------------------------------
      Theia Side Bar
      -------------------------------------*/
    if (typeof $.fn.theiaStickySidebar !== "undefined") {
        $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
            additionalMarginTop: 130,
        });
    }

    /*-------------------------------------
	// Read more button
	------------------------------------*/
    $(".rt-read-more").hover(
        function() {
            $(this).removeClass("qodef-button-animation-out");
        },
        function() {
            $(this).addClass("qodef-button-animation-out");
        }
    );

    /*------------------------------------
    //  Offcanvas Menu activation code
    -----------------------------------*/
    $("#wrapper").on("click", ".offcanvas-menu-btn", function(e) {
        e.preventDefault();
        let $this = $(this),
            wrapper = $(this).parents("body").find(">#wrapper"),
            wrapMask = $("<div />").addClass("offcanvas-mask"),
            offCancas = $("#offcanvas-wrap"),
            position = offCancas.data("position") || "left";

        if ($this.hasClass("menu-status-open")) {
            wrapper.addClass("open").append(wrapMask);
            $this.removeClass("menu-status-open").addClass("menu-status-close");
            offCancas.css({
                transform: "translateX(0)",
            });
        } else {
            removeOffcanvas();
        }

        function removeOffcanvas() {
            wrapper.removeClass("open").find("> .offcanvas-mask").remove();
            $this.removeClass("menu-status-close").addClass("menu-status-open");
            if (position === "left") {
                offCancas.css({
                    transform: "translateX(-105%)",
                });
            } else {
                offCancas.css({
                    transform: "translateX(105%)",
                });
            }
        }
        $(".offcanvas-mask, .offcanvas-close").on("click", function() {
            removeOffcanvas();
        });

        return false;
    });


    /*-----------------------------------
    //	Jquery Serch Box
    -----------------------------------*/
    $('a[href="#template-search"]').on("click", function(event) {
        event.preventDefault();
        let target = $("#template-search");
        target.addClass("open");
        setTimeout(function() {
            target.find("input").focus();
        }, 600);
        return false;
    });

    $("#template-search, #template-search button.close").on(
        "click keyup",
        function(event) {
            if (
                event.target === this ||
                event.target.className === "close" ||
                event.keyCode === 27
            ) {
                $(this).removeClass("open");
            }
        }
    );


    /*-------------------------------
     //  WOW
    -------------------------------*/
    let wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null,
    });
    wow.init();

    /*-------------------------------
     //  Back to Top
    -------------------------------*/
    const backToTop = document.getElementById("back-to-top");
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (backToTop != null) {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        }
    }
    if (backToTop != null) {
        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    /*-------------------------------------
      Window Load and Resize
      -------------------------------------*/
    $(window).on("load", function() {
        // Page Preloader
        let preloader = $("#preloader");
        preloader &&
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });

        // video pop up
        let videoPopUp = $(".play-btn");
        if (videoPopUp.length) {
            videoPopUp.magnificPopup({
                type: "iframe",
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                        "</div>",
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: "https://www.youtube.com/embed/%id%?autoplay=1",
                        },
                        vimeo: {
                            index: "vimeo.com/",
                            id: "/",
                            src: "//player.vimeo.com/video/%id%?autoplay=1",
                        },
                        gmaps: {
                            index: "//maps.google.",
                            src: "%id%&output=embed",
                        },
                    },
                    srcAction: "iframe_src",
                },
            });
        }
    });

    /*-----------------------------------
	 // Section background image 
	----------------------------------*/

    function imageFunction() {
        $("[data-bg-image]").each(function() {
            let img = $(this).data("bg-image");
            $(this).css({
                backgroundImage: "url(" + img + ")",
            });
        });
    }
    /*================================== end Utilities ========================================*/

    /*--------------------------------
    // currentYear
    -------------------------------*/
    let currentYear = document.getElementById("currentYear");
    if (currentYear) {
        let date = new Date();
        let currYear = date.getFullYear();
        currentYear.innerText = currYear;
    }

    function category_search_dropdown() {
        $('.category-search-dropdown-js .dropdown-menu li').on('click', function(e) {
            var root_parent = $(this).parents('.product-search');
            var $parent = $(this).closest('.category-search-dropdown-js'),
                slug = $(this).data('slug'),
                name = $(this).text();
            $parent.find('.cat-toggle .cat-label').text($.trim(name));
            $parent.find('input[name="product_cat"]').val(slug);
            root_parent.find('.product-autocomplete-js').data('tax', slug);
            root_parent.find('.product-autocomplete-js').trigger('keyup');
        });

        $(document).on('keyup', '.product-autocomplete-js', function() {

            var root_parent = $(this).parents('.product-search');
            var keyword = root_parent.find('.product-autocomplete-js').val();
            var taxonomy = root_parent.find('.product-autocomplete-js').data('tax');

            if (keyword.length > 1) {
                $.ajax({
                    url: MedimallObj.ajaxurl,
                    type: 'POST',
                    data: {
                        'action': 'medimall_product_search_autocomplete',
                        'category_val': taxonomy,
                        'keyword': keyword,
                    },
                    beforeSend: function() {
                        root_parent.find('.product-autoaomplete-spinner').css('opacity', '1');
                    },
                    success: function(data) {
                        root_parent.find('.result').html(data);
                    },
                    complete: function() {
                        root_parent.find('.product-autoaomplete-spinner').css('opacity', '0');
                    }
                });
            } else {
                root_parent.find('.result').empty();
            }
        });

        $(document).on('click', function(e) {
            var t = e.srcElement || e.target;
            if ($(t).attr('class')) {
                $('.result-wrap').remove();
            } else {

            }

        });

    }

    function rt_countdown() {
        // Countdown Style 1
        if ($('.count-down-style-1').length) {
            $('.count-down-style-1').each(function() {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $(this).data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function(event) {
                    $(this).html(
                        event.strftime(
                            '<div class="count-down-block"><span>%D</span> :</div> <div class="count-down-block"> <span>%H</span> :</div><div class="count-down-block"> <span>%M </span>:</div><div class="count-down-block"> <span> %S </span></div>'
                        )
                    );
                }).on('finish.countdown', function(event) {
                    $(this).html(event.strftime(''));
                });
            });
        }
        // Countdown Style 2
        if ($('.count-down-style-2').length) {
            $('.count-down-style-2').each(function() {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $(this).data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function(event) {
                    $(this).html(
                        event.strftime(
                            '<div class="count-down-block hr"><span class="count">%D</span><span class="count-text">Days</span></div><div class="count-down-block hr"><span class="count">%H</span><span class="count-text">Hours</span></div><div class="count-down-block min"><span class="count">%M</span><span class="count-text">Minutes</span></div><div class="count-down-block sec"><span class="count">%S</span><span class="count-text">Seconds</span></div>'
                        )
                    );
                }).on('finish.countdown', function(event) {
                    $(this).html(event.strftime(''));
                });
            });
        }
        // Countdown Style 3
        if ($('.count-down-style-3').length) {
            $('.count-down-style-3').each(function() {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $(this).data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function(event) {
                    $(this).html(
                        event.strftime(
                            '<div class="count-down-block hr"><span class="count">%D</span><span class="count-text">Days</span></div><div class="count-down-block hr"><span class="count">%H</span><span class="count-text">Hrs</span></div><div class="count-down-block min"><span class="count">%M</span><span class="count-text">Min</span></div><div class="count-down-block sec"><span class="count">%S</span><span class="count-text">Secs</span></div>'
                        )
                    );
                }).on('finish.countdown', function(event) {
                    $(this).html(event.strftime(''));
                });
            });
        }
    }

    //Add to Wishlist Ajax
    $(document).on('click', '.rdtheme-wishlist-icon', function() {
        if ($(this).hasClass('rdtheme-add-to-wishlist') && typeof yith_wcwl_l10n != "undefined") {
            var $obj = $(this),
                productId = $obj.data('product-id'),
                afterTitle = $obj.data('title-after');
            var data = {
                'action': 'revieweb_add_to_wishlist',
                'context': 'frontend',
                'nonce': $obj.data('nonce'),
                'add_to_wishlist': productId
            };

            $.ajax({
                url: yith_wcwl_l10n.ajax_url,
                type: 'POST',
                data: data,
                success: function success(data) {
                    if (data['result'] != 'error') {
                        $obj.removeClass('ajaxloading');
                        $obj.find('.wishlist-icon').removeClass('fa fa-heart').addClass('fas fa-heart').show();
                        $obj.removeClass('rdtheme-add-to-wishlist').addClass('rdtheme-remove-from-wishlist');
                        $obj.find('span').html(afterTitle);
                        $('body').trigger('rt_added_to_wishlist', [productId]);
                        $('body').trigger('added_to_wishlist', [productId]);
                    } else {
                        console.log(data['message']);
                    }
                }
            });

            return false;
        }
    });
    //Remove From Wishlist Ajax
    $(document).on('added_to_wishlist removed_from_wishlist', function() {
        $.get(yith_wcwl_l10n.ajax_url, {
            action: 'yith_wcwl_update_wishlist_count'
        }, function(data) {
            console.log(data);
            $('.wishlist-icon span.wishlist-icon-num').html(data.count);
        });
    });

    let WooCommerce = {
        quantity_change: function quantity_change() {
            $(document).on('click', '.quantity .input-group-btn .quantity-btn', function() {
                var $input = $(this).closest('.quantity').find('.input-text');

                if ($(this).hasClass('quantity-plus')) {
                    $input.trigger('stepUp').trigger('change');
                }

                if ($(this).hasClass('quantity-minus')) {
                    $input.trigger('stepDown').trigger('change');
                }
            });
        }
    }

    function loadmore_n_infinityscroll() {
        var loadMoreWrapper = $('.rdtheme-loadmore-wrapper'),
            infinityScrollWrapper = $('.rdtheme-infscroll-wrapper');

        if (loadMoreWrapper.length) {
            loadMore(loadMoreWrapper);
        }

        if (infinityScrollWrapper.length) {
            infinityScroll(infinityScrollWrapper);
        }

        function loadMore($wrapper) {
            //$('#loa-dmore').addClass('loader-icon');
            var button = $('.rdtheme-loadmore-btn'),
                shopData = $('.rdtheme-loadmore-data');
            button.on('click', button, function() {
                var maxPage = Number.parseInt(shopData.attr('data-max')),
                    query = shopData.attr('data-query'),
                    CurrentPage = Number.parseInt(shopData.attr('data-paged')),
                    order_by = $(".woocommerce-ordering .orderby").find(':selected').val();

                var data = {

                    'action': 'rdtheme_loadmore',
                    'context': 'frontend',
                    'nonce': shopData.data('nonce'),
                    'query': query,
                    'view': $('body').hasClass('product-list-view') ? 'list' : 'grid',
                    'paged': CurrentPage,
                    'filter_query_url': window.location.href,
                    'order': order_by
                };
                $.ajax({
                    url: MedimallObj.ajaxurl,
                    type: 'POST',
                    dataType: 'json',
                    data: data,
                    beforeSend: function beforeSend() {
                        disableBtn(button);
                        $('#loa-dmore').addClass('loader-icon');
                    },
                    success: function success(data) {

                        if (data) {
                            $('#loa-dmore').removeClass('loader-icon');
                            CurrentPage++;
                            shopData.attr('data-paged', CurrentPage);
                            $wrapper.append(data.data.output);
                            WcUpdateResultCount($wrapper);

                            if (Number.parseInt(shopData.attr('data-max')) == Number.parseInt(shopData.attr('data-paged'))) {
                                removeBtn(button);
                            } else {
                                button.show();
                                enableBtn(button);
                            }

                            $(document).trigger("afterLoadMore");
                        } else {
                            removeBtn(button);
                        }
                    }
                });
                return false;
            });
        }

        function infinityScroll($wrapper) {
            var canBeLoaded = true,
                shopData = $('.rdtheme-loadmore-data'),
                icon = $('.rdtheme-infscroll-icon'),
                query = shopData.attr('data-query'),
                CurrentPage = 1;
            $(window).on('scroll load', function() {
                if (!canBeLoaded) {
                    return;
                }
                var data = {
                    'action': 'rdtheme_loadmore',
                    'context': 'frontend',
                    'nonce': shopData.data('nonce'),
                    'query': query,
                    'paged': CurrentPage
                };

                if (isScrollable($wrapper)) {
                    $.ajax({
                        url: MedimallObj.ajaxurl,
                        type: 'POST',
                        dataType: 'json',
                        data: data,
                        beforeSend: function beforeSend() {
                            canBeLoaded = false;
                            icon.show();
                        },
                        success: function success(data) {
                            if (data) {
                                CurrentPage++;
                                canBeLoaded = true;
                                $wrapper.append(data.data.output);
                                WcUpdateResultCount($wrapper);
                                icon.hide();
                                $(document).trigger("afterInfinityScroll");
                            } else {
                                icon.remove();
                            }
                        }
                    });
                }
            });
        }

        function isScrollable($wrapper) {
            var ajaxVisible = $wrapper.offset().top + $wrapper.outerHeight(true),
                ajaxScrollTop = $(window).scrollTop() + $(window).height();

            if (ajaxVisible <= ajaxScrollTop && ajaxVisible + $(window).height() > ajaxScrollTop) {
                return true;
            }
            return false;
        }

        function WcUpdateResultCount($wrapper) {
            var count = $($wrapper).find('.product').length;
            $('.wc-last-result-count').text(count);
        }

        function disableBtn(button) {
            button.attr('disabled', 'disabled');
            button.find('.rdtheme-loadmore-btn-text').hide();
            button.find('.rdtheme-loadmore-btn-icon').show();
        }

        function enableBtn(button) {
            button.find('.rdtheme-loadmore-btn-icon').hide();
            button.find('.rdtheme-loadmore-btn-text').show();
            button.removeAttr('disabled');
        }

        function removeBtn(button) {
            button.parent('.rdtheme-loadmore-btn-area').hide();
        }
    }

    loadmore_n_infinityscroll();

    $(document).ready(function() {
        category_search_dropdown();
        WooCommerce.quantity_change();
    });

    //Medimall Functions
    function medimall_content_load_scripts() {

        /*-----------------------------------
        // Deal Section
        ----------------------------------*/
        $(".deal-section-style-5").each(function(i) {
            let productBox = $(this).children().find(".rt-product-box");
            $(window)
                .resize(function() {
                    if ($(window).width() <= 1199) {
                        $(productBox).addClass("layout-1 position-relative overflow-hidden");
                        $(productBox).removeClass(
                            "layout-7 position-relative overflow-hidden motion-effects-wrap"
                        );
                    } else {
                        $(productBox).addClass(
                            "layout-7 position-relative overflow-hidden motion-effects-wrap"
                        );
                        $(productBox).removeClass(
                            "layout-1 position-relative overflow-hidden"
                        );
                    }
                })
                .resize(); // trigger resize event initially
        });

        /*----------------------------------
        //TweenMax Mouse Effect
        -----------------------------------*/
        $(".motion-effects-wrap").mousemove(function(e) {
            parallaxIt(e, ".motion-effects1", -100);
            parallaxIt(e, ".motion-effects2", -200);
            parallaxIt(e, ".motion-effects3", 100);
            parallaxIt(e, ".motion-effects4", 200);
            parallaxIt(e, ".motion-effects5", -50);
            parallaxIt(e, ".motion-effects6", 50);
        });

        /*------------------------------
        // Tooltip
        ------------------------------*/
        $(function() {
            $('[data-bs-toggle="tooltip"]').tooltip({
                offset: [0, 5],
            });

            $('[data-bs-toggle-2="tooltip"]').tooltip({
                offset: [0, 15],
            });

        });

        imageFunction();
        rt_countdown();

        $('.hover-content-1 .compare').attr('data-bs-toggle', 'tooltip');
        $('.hover-content-1 .yith-wcqv-button').attr('data-bs-toggle', 'tooltip');
        $('.hover-content-1 .rdtheme-wishlist-icon').attr('data-bs-toggle', 'tooltip');

        $('[data-bs-toggle="tooltip"]').on('click', function() {
            $(this).tooltip('hide')
        });

        $('.action-btn-area-2 .yith-wcqv-button').attr('data-bs-toggle', 'tooltip');
        $('.action-btn-area-2 .rdtheme-wishlist-icon').attr('data-bs-toggle', 'tooltip');

        $('.hover-content-2 .cart-icon').attr('data-bs-toggle-2', 'tooltip');
        $('.hover-content-2 .compare').attr('data-bs-toggle-2', 'tooltip');
        $('.hover-content-2 .yith-wcqv-button').attr('data-bs-toggle-2', 'tooltip');
        $('.hover-content-2 .rdtheme-wishlist-icon').attr('data-bs-toggle-2', 'tooltip');
    }

    // Window Load+Resize
    $(window).on('load resize', function() {
        // Elementor Frontend Load
        $(window).on('elementor/frontend/init', function() {
            if (elementorFrontend.isEditMode()) {
                elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
                    medimall_content_load_scripts();
                });
            }
        });
    });

    // Window Load
    $(window).on('load', function() {
        medimall_content_load_scripts();
    });

    //======= Mini Cart JS =========
    $(document).ready(function() {
        var context = {
            container: ".drawer-container",
            close: ".close",
            overlay: ".drawer-overlay"
        };
        $("".concat(context.container, " ").concat(context.close)).on('click', function(e) {
            rt_close_cart();
        });
        $(context.overlay).on('click', rt_close_cart);

        function rt_close_cart() {
            $(context.container).removeClass('show-sidebar');
            $('body').removeClass('sidebar-open');
            $('.close.filter-drawer').trigger('click');
            $(context.overlay).animate({
                opacity: 0
            }, 500, 'swing', function() {
                $(context.overlay).hide();
            });
        }

        function rt_open_side_cart() {
            $(context.container).addClass('show-sidebar');
            $('body').addClass('sidebar-open');
            $(context.overlay).show('fast', function() {
                $(context.overlay).animate({
                    opacity: 0.5
                }, 500, 'swing');
            });
            rt_get_side_cart_content();
        }

        function rt_get_side_cart_content() {
            $.ajax({
                url: MedimallObj.ajaxurl,
                data: {
                    action: 'load_template',
                    template: 'cart/mini',
                    part: 'cart'
                },
                type: "POST",
                success: function success(data) {
                    $("#side-content-area-id").html(data);
                },
                error: function error(MLHttpRequest, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        }

        $('.cart-menu-btn.menu-open-btn').click(function(e) {
            e.preventDefault();
            rt_open_side_cart();
        });

        $(document).on('added_to_cart', function() {
            $('#yith-quick-view-close').trigger("click");
            if ($("body").hasClass("has-ajax-sidebar")) {
                rt_open_side_cart();
            }

        });

        $(document).on('removed_from_cart', rt_get_side_cart_content);
        $('.mobile-filter-button').on('click', function() {
            $('.woocommerce-top-bar-widget-wrapper').addClass('show-drawer');
            $('.drawer-overlay').css({
                'display': 'block'
            }).animate({
                opacity: 0.5
            }, 500, 'swing');
        });

        $('.close.filter-drawer').on('click', function() {
            $('.woocommerce-top-bar-widget-wrapper').removeClass('show-drawer');
            $('.drawer-overlay').animate({
                opacity: 0
            }, 500, 'swing', function() {
                $('.drawer-overlay').css({
                    'display': 'none'
                });
            });
        });
    });

})(jQuery);