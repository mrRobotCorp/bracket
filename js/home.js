// --------------------------- mainBanner bg ----------------------------
document.querySelector('.main').addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
})

// --------------------- floating -------------------------------

document.querySelector('.main article').insertAdjacentHTML('afterbegin', `
  <div class='shape a'>{ }</div>
  <div class='shape b'>{ }</div>
  <div class='shape c'>{ }</div>
  <div class='shape d'>{ }</div>
  <div class='shape e'>{ }</div>
  <div class='shape f'>{ }</div>
  <div class='shape g'>{ }</div>
`)


function makeNewPosition(){
  let shapeHeight = $('.main').height() - 50;
  let shapeWidth = $('.main').width() - 50;

  let nh = Math.floor(Math.random() * shapeHeight);
  let nw = Math.floor(Math.random() * shapeWidth);

  return [nh,nw];
}

let animate = function() {
  animateShape('.a');
  animateShape('.b');
  animateShape('.c');
  animateShape('.d');
  animateShape('.e');
  animateShape('.f');
  animateShape('.g');
};

animate();

// Set loop with interval
loop = window.setInterval(animate, 5000);

function animateShape(shapeClass){
  let newq = makeNewPosition();

  $(shapeClass).css({
    'transform' : 'translate(' + newq[1] +'px, ' + newq[0] + 'px)'});
}

function stopLoop(type) {
  // Breaks the loop
  clearInterval(loop);

  // Speed up shapes repositioning
  $('.shape').css({
      // 'transform' : 'translate(50px, 50px)',
      'transition': 'all 0.5s linear'
  });
}

function restartLoop() {
  // Reset animation speed after repositioning
  $('.shape').css({
      'transition': 'all 5s linear'
  });
  // Restarts animation without waiting
  animate();

  // Restarts loop on same instance
  loop = window.setInterval(animate, 5000);

}

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


