$(document).ready(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }

     
    });
    
    
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });
    


    $('.depth2').hide();
    $('.gnb>li').mouseenter(function(){
    $(this).children('.depth2').stop().fadeIn();
    });


    $('.gnb>li').mouseleave(function(){
        $(this).children('.depth2').stop().fadeOut();
    });
    

    $('.mb_list').slick({
        autoplay:true
    });
    
 
    



    $('.retail_r a').eq(0).show().siblings().hide();

    var i = 0;
    $('.retail_l ul li ').click(function(){
        // i++;

        // if(i >2 ){
        //     i=0;
        // };
        const index = $(this).index()
        // $('.retail_r a').eq(i).siblings().fadeOut();
        $('.retail_r a').eq(index).siblings().fadeOut();
        // $('.retail_r a').eq(i).fadeIn();
        $('.retail_r a').eq(index).fadeIn();
        // $(this).eq(i).addClass('active')
        $(this).addClass('active')
        // $(this).eq(i).siblings().removeClass('active')
         $(this).siblings().removeClass('active')
       

    });
 
 
    // setInterval(function(){
    //     $('.retail_l ul li').trigger('click')
    // },4000);

})