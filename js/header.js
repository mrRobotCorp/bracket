const gnbMenu = document.querySelectorAll('#gnb li');

document.querySelector('header').addEventListener('mouseover', (e) => {
    gnbMenu.forEach( function(menu) {
        menu.style.display = 'inline-block';
        menu.classList.add('show');
        menu.classList.remove('hide');
    })
});

document.querySelector('header').addEventListener('mouseout', (e) => {
    gnbMenu.forEach( function(menu) {
        menu.classList.add('hide');
        menu.classList.remove('show');
        menu.style.display = 'none';

        // function gnbHide() {
        //     setTimeout(() => menu.style.display = 'none', 400);
        // };
        // gnbHide();
        // clearTimeout(gnbHide);
    });
});

// ----------------- gnb active ---------------------------
var pageUrl = window.location.href;

$(window).on('load', function(){ 
    $('header #gnb > li').siblings('li').removeClass('active');
    if (pageUrl.indexOf('project') > -1) { 
        $('header #gnb > li').eq(1).addClass('active');
    } else if (pageUrl.indexOf('study') > -1) {
        $('header #gnb > li').eq(2).addClass('active');
    } else if (pageUrl.indexOf('iam') > -1) {
        $('header #gnb > li').eq(3).addClass('active');
    } else {
        $('header #gnb > li').eq(0).addClass('active'); 
        //메인 url은 main이라는 단어가 들어가지 않아서 모든 조건이 아닐때 실행
    }
});

// ----------------------- custom mouse --------------------------------
const cursor = document.createElement("div");
cursor.setAttribute("class", "cursor");
const follower = document.createElement("div");
follower.setAttribute("class", "cursor_follower");

document.querySelector("body").prepend(cursor, follower);

function myCursor(e) {
    cursor.style.top = e.pageY + 10 + "px";
    cursor.style.left = e.pageX + 10 + "px";
}

function Trailer(e) {
    gsap.to(follower, { duration: 0.5, left: e.pageX - 10, top: e.pageY - 10 });
}

window.addEventListener("mousemove", myCursor);
window.addEventListener("mousemove", Trailer);
