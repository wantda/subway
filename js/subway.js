$("document").ready(function () {

    $(".main-popup *").click(function(){
        $(".main-popup").hide();
    })

    $(".slide-section .indicator ul li a").eq(0).addClass("on")
    $(".subway-menu .top ul li a").eq(0).addClass("on")

    $(".header .nav ul li").mouseover(function(){
        let nav_list = $(this).index();
        $(".header .nav ul li a").removeClass("on").eq(nav_list).addClass("on")
    }).mouseout(function(){
        $(".header .nav ul li a").removeClass("on")
    })

    // $(".header .nav ul li a").mouseover(function(){
        
    //     $(".header .submenu").addClass("open");
    //     $(".header .submenu ul li").addClass("open");
    // }).mouseout(function(){
    //     $(".header .submenu").removeClass("open");
    //     $(".header .submenu ul li").removeClass("open");
    // })
    $(".header .nav ul").hover(function () {
        $(".header .submenu").addClass("open");
        $(".header .submenu ul li").addClass("open");
    }, function () {
        $(".header .submenu").removeClass("open");
        $(".header .submenu ul li").removeClass("open");
    })
    $(".header .submenu").hover(function(){
        $(".header .submenu").addClass("open");
        $(".header .submenu ul li").addClass("open") 
    }, function(){
        $(".header .submenu").removeClass("open");
        $(".header .submenu ul li").removeClass("open");
    })
    $(".header .submenu ul").mouseover(function(){
        let sub_list = $(this).index();
        $(".header .nav ul li a").removeClass("on").eq(sub_list).addClass("on")
    }).mouseout(function(){
        $(".header .nav ul li a").removeClass("on")
    })
 

    let i = 0;
    $(".slide-section .indicator ul li").mouseover(function(){
        clearInterval(timer)
    })
    $(".slide-section .indicator ul li").mouseout(function(){
        clearInterval(timer)
        timer = setInterval(auto_play, 3000);
        
    })

    $(".slide-section .indicator ul li").click(function(e){
        e.preventDefault();
        

        if(i < $(this).index()){
            $(".slide-section > ul > li").eq(i).stop().animate({
                left: "-100%"
            }, 1000)
            i = $(this).index();
            $(".slide-section > ul > li").eq(i).stop().css("left", "100%").animate({
                        left: "0%"
                    }, 1000)
        }else if(i == $(this).index()){
            return;
        }else{
            $(".slide-section > ul > li").eq(i).stop().animate({
                left: "100%"
            }, 1000)
            i = $(this).index();
            $(".slide-section > ul > li").eq(i).stop().css("left", "-100%").animate({
                        left: "0%"
                    }, 1000)
        }
        
        $(".slide-section .indicator ul li a").removeClass("on").eq(i).addClass("on")




    })

    let timer = setInterval(auto_play, 3000);
    function auto_play(){

        $(".slide-section > ul > li").stop().eq(i).animate({
            left: "-100%"
        }, 1000)
        i++;
        if(i > $(".slide-section .indicator ul li").length - 1){
            i = 0;
        }
        $(".slide-section > ul > li").eq(i).stop().css("left", "100%").animate({
            left: "0%"
        }, 1000)
        $(".slide-section .indicator ul li a").removeClass("on").eq(i).addClass("on")

       
    }

    let prev_index = 0;
    $(".subway-menu .top ul li").click(function(e){
        e.preventDefault();
        let top_index = $(this).index();
        if(prev_index == top_index){
            return;
        }
        $(".subway-menu .top ul li a").removeClass("on").eq(top_index).addClass("on")
        $(".subway-menu .menu-content .menu-content-wrap").eq(prev_index).fadeOut(500);
        $(".subway-menu .menu-content .menu-content-wrap").eq(top_index).find(".menu-wrap .menu-area").css("left", "0")
        $(".subway-menu .menu-content .menu-content-wrap").eq(top_index).show().stop().css("margin-left", "100%").animate({
            marginLeft: 0
        }, 500)
        prev_index = top_index;

    })

    let menu_time = false;

    $(".subway-menu .menu-content .arrow a").click(function(e){
        e.preventDefault();
        let arrow = $(".subway-menu .menu-content .arrow a").index(this)
        if(menu_time == true){
            return;
        }
        setTimeout(() => {
            menu_time = false;
        }, 1000);
        menu_time = true;

        if(arrow == 6 || arrow == 7){
            return;
        }
        
        if(arrow == 0 || arrow == 2 || arrow == 4 ){
            $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area").stop().animate({
                left: "0%"
            }, 500)
        }else{
            $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area").stop().animate({
                left: "-100%"
            }, 500)
        }
    })
})