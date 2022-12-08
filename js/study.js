$(function(){
    var gradation = {
        $content: $(".js-target"),
        scroll: function(){
        bodyHeight = $(".js-target").height(),
            scrollTop = $(document).scrollTop();
        rate = scrollTop/bodyHeight+0.9763033175;
        grade = "linear-gradient("+(rate*45)+"deg, rgb(251, 189, 54) 0%, rgba(157,237,244,0) 70%),linear-gradient("+(rate*135)+"deg, rgb(255, 248, 81) 10%, rgba(235,170,236,0) 80%),linear-gradient("+(rate*225)+"deg, rgb(245, 153, 66) 10%, rgba(170,236,170,0) 80%),linear-gradient("+(rate*315)+"deg, rgb(83, 68, 255) 100%, rgba(244,234,122,0) 70%)";
        gradation.$content.css({
            background: grade
        });
        }
    };
    $(window).scroll(function(){
        gradation.scroll();
        console.log('test')
    });
});