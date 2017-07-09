/**
 * Created by griffin on 7/9/17.
 */
$(document).ready(function(){

    var target = $('.background-sunset');
    var targetHeight = target.outerHeight();


            $(window).scroll(function(e) {
                var moveOne = $(window).scrollTop()/2;
                $('.js-sun').css({top:moveOne, "margin-top" : "10%"});
                var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
                if(scrollPercent >= 0){
                    target.css('opacity', scrollPercent);
                    $('.js-sun').css({"background-color" : scrollPercent});
                }
            });
});