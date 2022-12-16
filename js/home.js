AOS.init();
// --------------------------- mainBanner bg ----------------------------
document.querySelector('.main').addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
})

// ----------------------- floating bracket  -------------------------------
document.querySelector('.main').insertAdjacentHTML('afterbegin', `
  <div class="confetti-layer front" data-stellar-ratio="1.25">
    <div class="c_inner">
      <span class="bracket firstShow">{<p class="bracketInner show">안녕하세요 프론트엔드 개발자<br> <span class="name">김윤아</span> 입니다.</p> }</span>
    </div>
  </div>
  <div class="confetti-layer mid">
    <div class="c_inner"></div>
  </div>
  <div class="confetti-layer back" data-stellar-ratio="0.75">
    <div class="c_inner"></div>
  </div>
`);

function makeConfetti(num, layer) {
  var $layer = $('.confetti-layer.'+layer+' .c_inner');
  $layer.append(new Array(num + 1).join('<span class="bracket">{<p class="bracketInner"><span class="innerColor">무한한 가능성</span>을 가진<br>괄호 안 자유로운 개발자입니다.</p> }</span>'));
}

$(function() {
  makeConfetti(5, 'front');
  makeConfetti(10, 'mid');
  makeConfetti(11, 'back');
  
  $('.bracket').each(function() {
    let colorIndex = Math.floor(Math.random()*(confettiColors.length));

    $(this).attr('data-color', colorIndex).css({
      'color': confettiColors[colorIndex]
    });

    // random position 범위 조절
    let x = (Math.random()*450) - 200;
    let y = (Math.random()*600) - 280;
    let scale = 1.5 - Math.random();
    
    $(this).css({
      'transform': 'translateX('+x+'%) translateY('+y+'%) scale('+scale+')'
    });
    
  });
  
  // $.stellar();
  // $('.main').addClass('active');
});

let confettiColors = [
  '#fff',
  '#ffe4e2',
  '#ffe9da',
  '#ffdcc5',
  '#ffdcc0'
];

// ---------------- bracket hover --------------------
const frontBracket = document.querySelectorAll(".front .bracket");

frontBracket.forEach(function (inner) {
  inner.addEventListener("mouseover", function () {
        // cursor.classList.add("projectHover");
        follower.classList.remove("cursor_follower");

        window.addEventListener("mousemove", myCursor);
    });
	
    inner.addEventListener("mouseleave", function () {
        // cursor.classList.remove("projectHover");
        follower.classList.add("cursor_follower");

        window.addEventListener("mousemove", myCursor);
    });
});

// ------------------------- keyword scrollTrigger -----------------------------------
gsap.registerPlugin(ScrollTrigger);

const showTxt = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);

  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelectorAll('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', 0] : ['-100%', 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5 } });
  });
  };

showTxt();

// ----------------------- keyword mouseover ------------------------------


$('.k0').hover( function() {
  $(this).addClass('active'); 
  $('.keywordOver0').addClass('active');
  $('.keyword0').addClass('active');
}, function() {
  $(this).removeClass('active'); 
  $('.keywordOver0').removeClass('active');
  $('.keyword0').removeClass('active');
});

$('.k1').hover( function() {
  $(this).addClass('active'); 
  $('.keywordOver1').addClass('active');
  $('.keyword1').addClass('active');
}, function() {
  $(this).removeClass('active'); 
  $('.keywordOver1').removeClass('active');
  $('.keyword1').removeClass('active');
});

$('.k2').hover( function() {
  $(this).addClass('active'); 
  $('.keywordOver2').addClass('active');
  $('.keyword2').addClass('active');
}, function() {
  $(this).removeClass('active'); 
  $('.keywordOver2').removeClass('active');
  $('.keyword2').removeClass('active');
});

$('.k3').hover( function() {
  $(this).addClass('active'); 
  $('.keywordOver3').addClass('active');
  $('.keyword3').addClass('active');
}, function() {
  $(this).removeClass('active'); 
  $('.keywordOver3').removeClass('active');
  $('.keyword3').removeClass('active');
});

$('.k4').hover( function() {
  $(this).addClass('active'); 
  $('.keywordOver4').addClass('active');
  $('.keyword4').addClass('active');
}, function() {
  $(this).removeClass('active'); 
  $('.keywordOver4').removeClass('active');
  $('.keyword4').removeClass('active');
});


// ---------------- btn page location ------------------
const projectBtn = document.querySelector('.projectBtn');
const studyBtn = document.querySelector('.studyBtn');
const iamBtn = document.querySelector('.iamBtn');

projectBtn.onclick = function() {
  window.location.replace('project.html');
};
studyBtn.onclick = function() {
  window.location.replace('study.html');
};
iamBtn.onclick = function() {
  window.location.replace('iam.html');
};

// ------------------------- thumbnail img change ------------------------------------
document.querySelector('.overview_pro').insertAdjacentHTML('beforeend', `
  <div class="overview_img overview_img0" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
    <img src='./source/project0.png'>
    <img src='./source/overview_img0.png'>
    <img src='./source/project2.png'>
  </div>
`);

document.querySelector('.overview_stu').insertAdjacentHTML('beforeend', `
  <div class="overview_img overview_img1" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
  <img src='./source/overview_img0.png'>
  <img src='./source/project2.png'>
  <img src='./source/project0.png'>
  </div>
`);

document.querySelector('.overview_iam').insertAdjacentHTML('beforeend', `
  <div class="overview_img overview_img2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
    <img src='./source/project0.png'>
    <img src='./source/project2.png'>
    <img src='./source/overview_img0.png'>
  </div>
`);

// ----------------- thumbnail img change --------------------------
const overview_img0 = document.querySelector('.overview_img0');
const overview_img1 = document.querySelector('.overview_img1');
const overview_img2 = document.querySelector('.overview_img2');

$('.overview_img0 > img:gt(0)').hide();

setInterval(function() {
  $('.overview_img0 > img:first')
        .fadeOut(800)
        .next()
        .fadeIn(800)
        .end()
        .appendTo('.overview_img0');
}, 2500);

$('.overview_img1 > img:gt(0)').hide();

setInterval(function() {
  $('.overview_img1 > img:first')
        .fadeOut(800)
        .next()
        .fadeIn(800)
        .end()
        .appendTo('.overview_img1');
}, 2500);

$('.overview_img2 > img:gt(0)').hide();

setInterval(function() {
  $('.overview_img2 > img:first')
        .fadeOut(800)
        .next()
        .fadeIn(800)
        .end()
        .appendTo('.overview_img2');
}, 2500);
