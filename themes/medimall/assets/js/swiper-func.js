(function($) {
    "use strict";

    //function Load
    function medimall_swiper_scripts_load() {
        var $ = jQuery;

        /*---------------------------------------
        // rt-slider-style-1
        ----------------------------------------*/
        $(".rt-slider-style-1").each(function(i) {
            let rt_slider1opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle1 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);
            let pagination = $(this)
                .parents(".rt-slide-wrap")
                .find(".rt-slider-pagination")
                .get(0);

            let rtslider1 = new Swiper(rtSliderStyle1, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                slideToClickedSlide: false,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider1opt['col_xs'],
                    },
                    576: {
                        slidesPerView: rt_slider1opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider1opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider1opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider1opt['col_xl'],
                    },
                },
            });

            if (rt_slider1opt['autoplay']) {
                rtslider1.params.autoplay.delay = rt_slider1opt['speed'];
            }

            if (rt_slider1opt['autoplay'] == true) {
                rtslider1.autoplay.start();
            } else {
                rtslider1.autoplay.stop();
            }

        });

        /*---------------------------------------
        //    rt-slider-style-2
        ---------------------------------------*/
        $(".rt-slider-style-2").each(function(i) {
            let rt_slider2opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle2 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

            let rtslider2 = new Swiper(rtSliderStyle2, {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 24,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider2opt['col_xs'],
                    },
                    576: {
                        slidesPerView: rt_slider2opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider2opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider2opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider2opt['col_xl'],
                    },
                },
            });

            if (rt_slider2opt['autoplay']) {
                rtslider2.params.autoplay.delay = rt_slider2opt['speed'];
            }

            if (rt_slider2opt['autoplay'] == true) {
                rtslider2.autoplay.start();
            } else {
                rtslider2.autoplay.stop();
            }

        });

        /*---------------------------------------
        //    rt-slider-style-3
        ---------------------------------------*/
        $(".rt-slider-style-3").each(function(i) {
            let rt_slider3opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle3 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

            let rtslider3 = new Swiper(rtSliderStyle3, {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 24,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider3opt['col_xs'],
                    },
                    576: {
                        slidesPerView: rt_slider3opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider3opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider3opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider3opt['col_xl'],
                    },
                },
            });

            if (rt_slider3opt['autoplay']) {
                rtslider3.params.autoplay.delay = rt_slider3opt['speed'];
            }

            if (rt_slider3opt['autoplay'] == true) {
                rtslider3.autoplay.start();
            } else {
                rtslider3.autoplay.stop();
            }

        });

        /*---------------------------------------
        //    rt-slider-style-4
        ---------------------------------------*/

        $(".rt-slider-style-4").each(function(i) {
            let rt_slider4opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle4 = $(this).get(0);

            let rtslider4 = new Swiper(rtSliderStyle4, {
                slidesPerView: 2,
                loop: true,
                spaceBetween: 24,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 2000,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider4opt['col_xs'],
                    },
                    576: {
                        slidesPerView: rt_slider4opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider4opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider4opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider4opt['col_xl'],
                    },
                },
            });

            if (rt_slider4opt['autoplay']) {
                rtslider4.params.autoplay.delay = rt_slider4opt['speed'];
            }

            if (rt_slider4opt['autoplay'] == true) {
                rtslider4.autoplay.start();
            } else {
                rtslider4.autoplay.stop();
            }

        });

        /*--------------------------------------
        //    rt-slider-style-5
        --------------------------------------*/

        $(".rt-slider-style-5").each(function(i) {
            let rt_slider5opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle5 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

            let rtslider5 = new Swiper(rtSliderStyle5, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 3000,
                },
                speed: 1200,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
            });

            if (rt_slider5opt['autoplay']) {
                rtslider5.params.autoplay.delay = rt_slider5opt['speed'];
            }

            if (rt_slider5opt['autoplay'] == true) {
                rtslider5.autoplay.start();
            } else {
                rtslider5.autoplay.stop();
            }

        });

        /*--------------------------------------
        //    rt-slider-style-7
        --------------------------------------*/

        $(".rt-slider-style-7").each(function(i) {
            let rt_slider7opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle7 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

            let rtslider7 = new Swiper(rtSliderStyle7, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 5000,
                },
                speed: 800,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider7opt['col_xs'],
                    },
                    575: {
                        slidesPerView: rt_slider7opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider7opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider7opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider7opt['col_xl'],
                    },
                },
            });

            if (rt_slider7opt['autoplay']) {
                rtslider7.params.autoplay.delay = rt_slider7opt['speed'];
            }

            if (rt_slider7opt['autoplay'] == true) {
                rtslider7.autoplay.start();
            } else {
                rtslider7.autoplay.stop();
            }

        });

        /*--------------------------------------
        //    rt-slider-style-6
        --------------------------------------*/

        $(".rt-slider-style-6").each(function(i) {
            let rtSliderStyle6 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);
            new Swiper(rtSliderStyle6, {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerColumn: 3,
                slidesPerColumnFill: "row",
                loop: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    576: {
                        slidesPerView: 1,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    992: {
                        slidesPerView: 2,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                        spaceBetween: 24,
                    },
                    1200: {
                        slidesPerView: 2,
                        slidesPerColumn: 3,
                        slidesPerColumnFill: "row",
                        spaceBetween: 24,
                    },
                },
            });
        });

        /*--------------------------------------
        //    rt-slider-style-8
        --------------------------------------*/

        $(".rt-slider-style-8").each(function(i) {
            let rtSliderStyle8 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);
            new Swiper(rtSliderStyle8, {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerColumn: 2,
                slidesPerColumnFill: "row",
                loop: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    576: {
                        slidesPerView: 1,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                    },
                    992: {
                        slidesPerView: 2,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                        spaceBetween: 24,
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: "row",
                        spaceBetween: 24,
                    },
                },
            });
        });

        /*---------------------------------------
        // rt-slider-style-9 Brand
        ----------------------------------------*/
        $(".rt-slider-style-9").each(function(i) {
            let rt_slider9opt = $(this).find('.swiper-wrapper').data('carousel-options');
            let rtSliderStyle9 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);
            let pagination = $(this)
                .parents(".rt-slide-wrap")
                .find(".rt-slider-pagination")
                .get(0);

            let rtslider9 = new Swiper(rtSliderStyle9, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                slideToClickedSlide: false,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: rt_slider9opt['col_xs'],
                    },
                    576: {
                        slidesPerView: rt_slider9opt['col_sm'],
                    },
                    768: {
                        slidesPerView: rt_slider9opt['col_md'],
                    },
                    992: {
                        slidesPerView: rt_slider9opt['col_lg'],
                    },
                    1200: {
                        slidesPerView: rt_slider9opt['col_xl'],
                    },
                },
            });

            if (rt_slider9opt['autoplay']) {
                rtslider9.params.autoplay.delay = rt_slider9opt['speed'];
            }

            if (rt_slider9opt['autoplay'] == true) {
                rtslider9.autoplay.start();
            } else {
                rtslider9.autoplay.stop();
            }

        });

        /*---------------------------------------
        //	rt-slider-style-10
        ---------------------------------------*/
        $(".rt-slider-style-10").each(function(i) {
            let rtSliderStyle10 = $(this).get(0);
            let prev = $(this).parents(".rt-slide-wrap").find(".btn-prev").get(0);
            let next = $(this).parents(".rt-slide-wrap").find(".btn-next").get(0);

            new Swiper(rtSliderStyle10, {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 24,
                slideToClickedSlide: true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });
        });

        /*-------------------------------------
          // rt-thumbnail-slider-thumb-style-1
          ------------------------------------*/
        let rtThumbnailTliderThumbStyle1 = new Swiper(
            ".rt-thumbnail-slider-thumb-style-1", {
                loop: true,
                spaceBetween: 15,
                slidesPerView: 3,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                },
            }
        );
        let rtThumbnailTliderStyle1 = new Swiper(".rt-thumbnail-slider-style-1", {
            loop: true,
            spaceBetween: 15,
            speed: 800,
            thumbs: {
                swiper: rtThumbnailTliderThumbStyle1,
            },
        });
        /*-------------------------------------
          // rt-thumbnail-slider-thumb-style-2
          ------------------------------------*/
        let rtThumbnailTliderThumbStyle2 = new Swiper(
            ".rt-thumbnail-slider-thumb-style-2", {
                loop: true,
                spaceBetween: 20,
                slidesPerView: 4,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                speed: 800,
                direction: "vertical",
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                },
            }
        );
        let rtThumbnailTliderStyle2 = new Swiper(".rt-thumbnail-slider-style-2", {
            loop: true,
            spaceBetween: 15,
            speed: 800,
            thumbs: {
                swiper: rtThumbnailTliderThumbStyle2,
            },
        });
        /*-------------------------------------
          // rt-thumbnail-slider-thumb-style-3
          ------------------------------------*/
        let rtThumbnailTliderThumbStyle3 = new Swiper(
            ".rt-thumbnail-slider-thumb-style-3", {
                loop: true,
                spaceBetween: 20,
                slidesPerView: 4,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                speed: 800,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                },
            }
        );
        let rtThumbnailTliderStyle3 = new Swiper(".rt-thumbnail-slider-style-3", {
            loop: true,
            spaceBetween: 15,
            speed: 800,
            thumbs: {
                swiper: rtThumbnailTliderThumbStyle3,
            },
        });

    }


    // Window Load+Resize
    $(window).on('load resize', function() {
        // Elementor Frontend Load
        $(window).on('elementor/frontend/init', function() {
            if (elementorFrontend.isEditMode()) {
                elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
                    medimall_swiper_scripts_load();
                });
            }
        });
    });

    $(document).ready(function() {
        medimall_swiper_scripts_load();
    });

})(jQuery);