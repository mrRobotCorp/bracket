document.querySelector('.main').addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
})

document.querySelector('.overview_pro').insertAdjacentHTML('beforeend', `
  <img class='overview_img0' src='./source/overview_img0.png'>
`)

document.querySelector('.overview_stu').insertAdjacentHTML('beforeend', `
  <img class='overview_img1' src='./source/overview_img0.png'>
`)

document.querySelector('.overview_iam').insertAdjacentHTML('beforeend', `
  <img class='overview_img2' src='./source/overview_img2.png'>
`)

// ----------------- hover img change --------------------------
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


