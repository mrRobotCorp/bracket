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
    <div class="c_inner"></div>
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
  $layer.append(new Array(num + 1).join('<span class="bracket">{  }</span>'));
}

$(function() {
  makeConfetti(7, 'front');
  makeConfetti(10, 'mid');
  makeConfetti(11, 'back');
  
  $('.bracket').each(function() {
    let colorIndex = Math.floor(Math.random()*(confettiColors.length));

    $(this).attr('data-color', colorIndex).css({
      'color': confettiColors[colorIndex]
    });

    // random position 범위 조절
    let x = (Math.random()*500) - 400;
    let y = (Math.random()*600) - 290;
    let scale = 1.6 - Math.random();

    $(this).css({
      'transform': 'translateX('+x+'%) translateY('+y+'%) scale('+scale+')'
    });
    
  });
  
  $.stellar();
  $('.main').addClass('active');
});

let confettiColors = [
  '#fff',
  '#ffe4e2',
  '#ffe9da',
  '#ffdcc5',
  '#ffdcc0'
];

// -------------------------------------------------------------
document.querySelector('.overview_pro').insertAdjacentHTML('beforeend', `
  <img class='overview_img0' src='./source/overview_img0.png'>
`)

document.querySelector('.overview_stu').insertAdjacentHTML('beforeend', `
  <img class='overview_img1' src='./source/overview_img0.png'>
`)

document.querySelector('.overview_iam').insertAdjacentHTML('beforeend', `
  <img class='overview_img2' src='./source/overview_img2.png'>
`)

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


// ----------------- thumbnail img change --------------------------
const overview_img0 = document.querySelector('.overview_img0');
const overview_img2 = document.querySelector('.overview_img2');

overview_img0.addEventListener('mouseover', (e) => {
  overview_img0.setAttribute('src', './source/overview_img2.png');
});

overview_img0.addEventListener('mouseout', (e) => {
  overview_img0.setAttribute('src', './source/overview_img0.png');
});

overview_img2.addEventListener('mouseover', (e) => {
  overview_img2.setAttribute('src', './source/overview_img0.png');
});

overview_img2.addEventListener('mouseout', (e) => {
  overview_img2.setAttribute('src', './source/overview_img2.png');
});


