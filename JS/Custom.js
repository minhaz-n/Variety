$(document).ready(function(){
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        console.log(scrolling);
        if(scrolling >=200){
            $(".navbar-cs").addClass("navbar-cs-fixed");
        }
        else{
            $(".navbar-cs").removeClass("navbar-cs-fixed");
        }
    });
});