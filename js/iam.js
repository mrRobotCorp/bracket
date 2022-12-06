document.querySelector('.mainBanner article').insertAdjacentHTML('afterbegin', `
    <div class='introduce'>
        <p>탄탄한 마크업을 기초로 다양하고 새로운 시각을 가지고 바라보는 개발자 김윤아입니다.</p>
        <p>Hello, I’m developer who looks at various and new perspectives based on a solid markup.</p>
    </div>
`);

document.querySelector('.mainVisual').insertAdjacentHTML('afterbegin', `
    <p><span class="italic">C</span>reat<span class="italic">ive</span></p>
    <p>Fle<span class="italic">xible</span></p>
    <p><span class="italic">C</span>ontaina<span class="italic">ble</span></p>
    <p><span class="italic">Sm</span>ooth</p>
    <div class="visual_circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
`);

document.querySelector('.introBanner article').insertAdjacentHTML('afterbegin', `
    <p>
        저는 프론트 엔드를 목표로, <span class="bold">높은 이해도</span>를 가지고 <br>
        웹 퍼블리싱 작업을 하고 있는 개발자 <span class="bold">김윤아</span> 입니다.
    </p>
`);

// --------------------- original svg ------------------------

document.querySelector('.experience').insertAdjacentHTML('beforeend', `

    <svg width="810" height="2200" viewBox="0 0 822 2303" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="path" d="M18 18C18 67.9082 52.4999 163.437 263 201.186C402.068 226.125 548.612 231.108 613.5 235.671C690.5 241.085 825.5 252.456 800 444.136C775.5 575.713 554.782 628.361 385.5 653.5C277 669.612 55.5456 740.178 48.1316 899.289C44.6299 974.439 98.7078 1051.2 287 1105C357 1125 576.5 1159.74 716.5 1245C794.5 1292.5 838 1386.5 813 1485.5C763.193 1682.74 461.65 1623.4 392.5 1693C316.5 1769.5 379.363 1867.62 401.5 1919C428 1980.5 481 2041 441 2145.5C416 2224 406 2244 406 2301" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <line x1="387.071" y1="2271.13" x2="405.457" y2="2299.93" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <line x1="428.245" y1="2272.78" x2="406.107" y2="2300.75" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <circle id="startCircle" cx="18" cy="18" r="18" fill="#EC4636"/>
    </svg>
`);
    // <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
    //     <path class="line01 line" d="M 10 200  600 200" ></path>
    //     <path class="line02 line" d="M 10 400  600 400" ></path>
    //     <path class="line03 line" d="M 10 600  600 600" ></path>
    //     <path class="line04 line" d="M 10 800  600 800" ></path>
    //     <path class="line05 line" d="M 10 1000  600 1000" ></path>
    //     <text class="text01" x="30" y="190">2018</text>
    //     <text class="text02" x="30" y="390">2019</text>
    //     <text class="text03" x="30" y="590">2020</text>

    //     <path class="theLine" 
    //             d="M -5,0
    //             Q 450 230 300 450 
    //             T 130 750
    //             Q 100 850 300 1000
    //             T 150 1200"
    //             fill="none" stroke="white" stroke-width="10px" />
        
        
        
    //     <circle class="ball ball01" r="20" cx="50" cy="100"></circle>
    //     <circle class="ball ball02" r="20" cx="278" cy="201"></circle>
    //     <circle class="ball ball03" r="20" cx="327" cy="401"></circle>
    //     <circle class="ball ball04" r="20" cx="203" cy="601"></circle>

    // </svg>

// ------------------------- new svg animation ----------------
// console.clear();

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
// gsap.defaults({ease: "none"});



// const pulses = gsap.timeline({
// defaults: {
//     duration: 0.05, 
//     autoAlpha: 1, 
//     scale: 2, 
//     transformOrigin: 'center', 
//     ease: "elastic(2.5, 1)"
// }})
// .to(".ball02, .text01", {}, 0.2) 
// .to(".ball03, .text02", {}, 0.33)
// .to(".ball04, .text03", {}, 0.46)

// const main = gsap.timeline({defaults: {duration: 1},
// scrollTrigger: {
//     trigger: "#svg",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
// }})
// .to(".ball01", {duration: 0.01, autoAlpha: 1})
// .from(".theLine", {drawSVG: 0}, 0)
// .to(".ball01", {motionPath: {
// path: ".theLine", 
// align:".theLine",
// alignOrigin: [0.5, 0.5],
// }}, 0)
// .add(pulses, 0);


// --------------------- following line ----------------------
const path = document.getElementById('path');
const circle = document.getElementById('startCircle');

function update() {
    const d = document.querySelector('body').offsetHeight / path.getTotalLength();
    const offset = Math.floor(window.pageYOffset / d) + 450;
    const firePoint = path.getPointAtLength(1704 + 500 - offset);

    path.style.strokeDashoffset = offset;
    circle.setAttribute('cx', firePoint.x);
    circle.setAttribute('cy', firePoint.y);
}

update();

window.addEventListener('scroll', update);