// --------------- background gradient -----------------
$(function(){
    var gradation = {
        $content: $(".js-target"),
        scroll: function(){
        bodyHeight = $(".js-target").height(),
            scrollTop = $(document).scrollTop();
        rate = scrollTop/bodyHeight+0.9763033175;
        grade = "linear-gradient("+(rate*45)+"deg, rgb(236, 70, 54) 0%, rgba(157,237,244,0) 70%),linear-gradient("+(rate*135)+"deg, rgb(255, 248, 81) 10%, rgba(235,170,236,0) 80%),linear-gradient("+(rate*225)+"deg, rgb(245, 153, 66) 10%, rgba(170,236,170,0) 80%),linear-gradient("+(rate*315)+"deg, rgb(83, 68, 255) 100%, rgba(244,234,122,0) 70%)";
        gradation.$content.css({
            background: grade
        });
        }
    };
    $(window).scroll(function(){
        gradation.scroll();
    });
});

// ------------------- card flip -------------------------
gsap.registerPlugin(Flip);

const activeClass = "is-active";
const inactiveClass = "is-inactive";
const cards = document.querySelectorAll(".card");

let stuImg = document.querySelector('.card img');

cards.forEach((card, idx) => {
card.addEventListener("click", () => {
    const state = Flip.getState(cards);
    const isCardActive = card.classList.contains(activeClass);

    cards.forEach((otherCard, otherIdx) => {
        otherCard.classList.remove(activeClass);
        otherCard.classList.remove(inactiveClass);
        if (!isCardActive && idx !== otherIdx)
        otherCard.classList.add(inactiveClass);
        
        // stuImg.style.display = 'none';
    });

    if (!isCardActive) {
        card.classList.add(activeClass);
        // stuImg.style.display = 'inline-block';
    }

    Flip.from(state, {
        duration: 1,
        ease: "expo.out",
        absolute: true });
    });
});

// ------------------
$('.cardVanilla').click( function() {
    $('.vanillaTxt').css('display', 'none');
}); 


