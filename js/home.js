// --------------------------- mainBanner bg ----------------------------
document.querySelector('.main').addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
})

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


