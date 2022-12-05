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
        menu.style.display = 'none';
        menu.classList.add('hide');
        menu.classList.remove('show');
    })
});

// ----------------- gnb active ---------------------------
var pageUrl = window.location.href; //창의 url을 가져온다.

$(window).on('load', function(){ //load가 되었을때 실행
    $('header #gnb > li').siblings('li').removeClass('active'); //다른 active가 있으면 지워준다.
    if (pageUrl.indexOf('project') > -1) { //url에 about이라는 글자가 있으면 실행
        $('header #gnb > li').eq(1).addClass('active');
    } else if (pageUrl.indexOf('study') > -1) { //url에 contact라는 글자가 있으면 실행
        $('header #gnb > li').eq(2).addClass('active');
    } else if (pageUrl.indexOf('iam') > -1) {
        $('header #gnb > li').eq(3).addClass('active');
    } else {
        $('header #gnb > li').eq(0).addClass('active'); 
        //메인 url은 main이라는 단어가 들어가지 않아서 모든 조건이 아닐때 실행하도록 함
    }
});