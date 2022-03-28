$(function (e) {
    e.preventDefault;

    //menu
    $(".main>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });
    
    //toggle
    $(".tg").click(function () {
        $(".tg").toggleClass("on");
        $(".clo").toggleClass("on");
        $("nav").addClass("on");
    });
    
    $(".clo").click(function(){
        $(".tg").toggleClass("on");
        $(".clo").toggleClass("on");
        $("nav").removeClass("on");
        
    })


    //mainPage
    $("#mainPage").mouseenter(function () {
        $(".bg_txt img").animate({
            opacity: 1
        }, 2000);
        $("#mainPage .tit").animate({
            opacity: 1
        }, 500);
        $(".mp_txt").animate({
            opacity: 1
        }, 800);
        $(".line").animate({
            width: 40 + "%"
        }, 2000);
    });

    
    //bs_slide
    $(".right").click(function () {
        $(".bs_slide ul").stop().animate({
            left: -300
        }, 1000, function () {
            $(this).append($(".bs_slide ul li").first());
            $(this).css({
                left: 0
            })
        });
        return false;
    });

    $(".left").click(function () {
        $(".bs_slide ul").prepend($(".bs_slide ul li").last());
        $(".bs_slide ul").css({
            left: -300
        });
        $(".bs_slide ul").stop().animate({
            left: 0
        }, 1000);
        return false;
    });

    
    //hover

    $(".bs_slide ul li").mouseenter(function(){
        $(this).children(".hover").stop().show();
        return false;
    })
    $(".bs_slide ul li").mouseleave(function(){
        $(this).children(".hover").stop().hide(500);
        return false;
    })
    

    //popup
    $(".popup").click(function () {
        $(".bg").stop().show();
        $(".pop").stop().show();
        return false;
    });
    $(".close").click(function () {
        $(".bg").stop().hide();
        $(".pop").stop().hide();
        return false;
    });
    
    //review 
    $(function(){
        var n = 0;
        $(".slider li").click(function(){
            $(".slider li").removeClass("on");
            $(this).addClass("on");
            
            
            n = $(this).index();
            
            $(".rS").removeClass("active");
            $(".rS").eq(n).addClass("active");
            return false;
        });
    });
    
});
