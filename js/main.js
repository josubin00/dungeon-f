$(document).ready(function () {

    $(".scrollBox").niceScroll({
        cursorcolor:"#777",
        cursorwidth:5,
        scrollspeed:40,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"#c1c1c1",
        cursorborder:"none",
        autohidemode:false,
        boxzoom:false,
        smoothscroll:true,
        zindex:99999
    });



    $("#scene06").niceScroll({
        cursorcolor:"transparent",
        cursorwidth:0,
        scrollspeed:40,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"transparent",
        cursorborder:"none",
        autohidemode:false,
        boxzoom:false,
        smoothscroll:true,
        zindex:99999
    });



    $('#header .ham').on('click',function () {
        $('#scene02').fadeIn();
    });


    $('#scene02 .close').on('click',function () {
        $('#scene02').fadeOut();
    });

    $('#spin_off .comics').on('click',function () {
        $('#scene03').fadeIn();
    });


    $('#scene03 .close').on('click',function () {
        $('#scene03').fadeOut();
    });


    $('#spin_off .movie').on('click',function () {
        $('#scene04').fadeIn();
    });

    $('#scene04 .close').on('click',function () {
        $('#scene04').fadeOut();
    });

    $('#cast .bryan').on('click',function () {
        $('#scene05').fadeIn();
        multiScroll();

        // $(function () {
        //     var king_text = document.getElementById('right_king_text');
        //     var king_text1 = document.getElementById('king_text1');
        //     var king_text2 = document.getElementById('king_text2');
        //     var king_text3 = document.getElementById('king_text3');
        //
        //     var parallaxInstance = new Parallax(king_text, {
        //         scalarX: 5.5,
        //         scalarY: 10.0
        //     });
        //     var parallaxInstance = new Parallax(king_text1, {
        //         scalarX: 5.5
        //     });
        //     var parallaxInstance = new Parallax(king_text2, {
        //         scalarX: 6.5
        //     });
        //     var parallaxInstance = new Parallax(king_text3, {
        //         scalarX: 7.5
        //     });
        //     parallaxInstance;
        //     parallaxInstance.friction(0.2, 0.2);
        //     parallaxInstance.scalar(5, 5);
        // });
    });

    $('#scene05 .close').on('click',function () {
        $('#scene05').fadeOut();
    });

    $('#season .season_01').on('click',function () {
        $('#main_menu').fadeOut();
        $('#scene06').fadeIn();
        // getNiceScroll();
        // scroll_side();
    });

    $('#scene06 .close').on('click',function () {
        $('#main_menu').fadeIn();
        $('#scene06').fadeOut();
    });

    function multiScroll(){
        var top = 0;

        $(document).ready(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;

            top = (0 - 2373);
            // top = (0 - 6556);
            $('.scroll_right').css('top', top + 'px');
        });

        $(window).resize(function () {
            var contentHeight = $('.scroll_right').height(),
                contents = $('.scroll_right .scroll_content').length;

            top = (0 - 2373);
            // top = (0 - 6556);
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
        });

        $(window).scroll(function () {
            $('.scroll_right').css('top', (top + $(window).scrollTop()) + 'px');
            // $('#king_text3').stop().animate({'margin-Top':},100)
        });
    }

    $('#music .track').on('click',function () {
        $('#scene07').fadeIn();
        $('#scene07').ready(function() {
            $('#music_track').multiscroll({
                // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
                // anchors: ['first', 'second', 'third'],
                // menu: '#menu',
                // navigation: true,
                // navigationTooltips: ['One', 'Two', 'Three'],
                loopBottom: true,
                loopTop: true
            });
        });
    });

    $('#scene07 .close').on('click',function () {
        $('#scene07').fadeOut();
    });

    $('#spin_off .spin').on('click',function () {
        $('#scene08').fadeIn();
    });

    $('#scene08 .close').on('click',function () {
        $('#scene08').fadeOut();
    });


    // $("#slider").slick({
    //     dots: true, //네이베이션 사용여부
    //     arrows: true, //화살표 사용여부
    //     prevArrow: $('.prev'), //이전 화살표
    //     nextArrow: $('.next'), //다음 화살표
    //     autoplay:false, //자동넘김
    //     autoplaySpeed: 2000, //자동넘김 속도
    //     pauseOnHover:false, //마우스 오버시 자동재생 멈춤
    //     fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    //     speed: 900, // 슬라이드 속도
    //     infinite: true, // 무한슬라이
    //     asNavFor: '#slider2', //다른 슬라이드 연동 여부
    //     centerMode: false, //센터모드
    //     centerPadding: '0%', //센터 모드 시 여백
    //     slidesToShow: 3, //보여질 슬라이드 갯수
    //     slidesToScroll: 1, //넘겨질 슬라이드 갯수
    //     draggable:true,
    //     vertical: true, //세로 슬라이드
    //     verticalSwiping:true, //세로 스와이프
    //     initialSlide:0,//슬라이드 시작순서
    //     // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    // });
    //
    // $("#scene07").on("mousewheel", function (u, v) {
    //     if (v > 0) {
    //         $("#slider").slick("slickPrev");
    //         $("#slider2").slick("slickNext");
    //
    //     } else {
    //         if (v < 0) {
    //             $("#slider").slick("slickNext");
    //             $("#slider2").slick("slickPrev");
    //         }
    //     }
    // });
    //
    //
    // $("#slider2").slick({
    //     dots: true, //네이베이션 사용여부
    //     arrows: true, //화살표 사용여부
    //     prevArrow: $('.prev'), //이전 화살표
    //     nextArrow: $('.next'), //다음 화살표
    //     autoplay:true, //자동넘김
    //     autoplaySpeed: 2000, //자동넘김 속도
    //     pauseOnHover:false, //마우스 오버시 자동재생 멈춤
    //     fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    //     speed: 900, // 슬라이드 속도
    //     infinite: true, // 무한슬라이
    //     asNavFor: '#slider', //다른 슬라이드 연동 여부
    //     centerMode: false, //센터모드
    //     centerPadding: '0%', //센터 모드 시 여백
    //     slidesToShow: 3, //보여질 슬라이드 갯수
    //     slidesToScroll: 1, //넘겨질 슬라이드 갯수
    //     vertical: true, //세로 슬라이드
    //     verticalSwiping: true, //세로 스와이프
    //     initialSlide:2,//슬라이드 시작순서
    //     // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    // });







});




