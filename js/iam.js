document.querySelector('.mainBanner article').insertAdjacentHTML('afterbegin', `
    <div class='introduce'>
        <p>탄탄한 마크업을 기초로 <span class="text-highlight">다양하고 새로운 시각</span>을 가지고 바라보는 <span class="text-highlight">개발자 김윤아</span>입니다.</p>
        <p>Hello, I’m developer who looks at various and new perspectives based on a solid markup.</p>
    </div>
`);

// ------------------- text highlight --------------------------
const highlight = document.querySelectorAll(".text-highlight");

window.addEventListener('load', function () {
    highlight.forEach( function(line) {
        line.classList.add("lineActive");
    })
    
});

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

// ------------------ skill hover ------------------------
const skillJs = document.querySelector(".skillJs");
const skillCCS = document.querySelector(".skillCCS");

skillJs.addEventListener("mouseover", function () {
    cursor.classList.add("jsHover");
    follower.classList.remove("cursor_follower");
    function myCursor(e) {
        cursor.style.top = e.pageY + 80 + "px";
        cursor.style.left = e.pageX + 60 + "px";
    }
    window.addEventListener("mousemove", myCursor);
});
skillJs.addEventListener("mouseleave", function () {
    cursor.classList.remove("jsHover");
    follower.classList.add("cursor_follower");
    function myCursor(e) {
        cursor.style.top = e.pageY + 10 + "px";
        cursor.style.left = e.pageX + 10 + "px";
    }
    window.addEventListener("mousemove", myCursor);
});

skillCCS.addEventListener("mouseover", function () {
    cursor.classList.add("cssHover");
    follower.classList.remove("cursor_follower");
    function myCursor(e) {
        cursor.style.top = e.pageY - 160 + "px";
        cursor.style.left = e.pageX + 80 + "px";
    }
    window.addEventListener("mousemove", myCursor);
});
skillCCS.addEventListener("mouseleave", function () {
    cursor.classList.remove("cssHover");
    follower.classList.add("cursor_follower");
    function myCursor(e) {
        cursor.style.top = e.pageY + 10 + "px";
        cursor.style.left = e.pageX + 10 + "px";
    }
    window.addEventListener("mousemove", myCursor);
});



// --------------------- original svg ------------------------

document.querySelector('.experience').insertAdjacentHTML('beforeend', `

    <svg class='svgLine' width="810" height="2200" viewBox="0 0 822 2303" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="path" fill='none' stroke="#EC4D36" stroke-width='3' d="M18 18C18 67.9082 52.4999 163.437 263 201.186C402.068 226.125 548.612 231.108 613.5 235.671C690.5 241.085 825.5 252.456 800 444.136C775.5 575.713 554.782 628.361 385.5 653.5C277 669.612 55.5456 740.178 48.1316 899.289C44.6299 974.439 98.7078 1051.2 287 1105C357 1125 576.5 1159.74 716.5 1245C794.5 1292.5 838 1386.5 813 1485.5C763.193 1682.74 461.65 1623.4 392.5 1693C316.5 1769.5 379.363 1867.62 401.5 1919C428 1980.5 481 2041 441 2145.5C416 2224 406 2244 406 2301" stroke-linecap="round"/>
        <line x1="387.071" y1="2271.13" x2="405.457" y2="2299.93" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <line x1="428.245" y1="2272.78" x2="406.107" y2="2300.75" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <circle id="startCircle" cx="18" cy="18" r="18" fill="#EC4636"/>
    </svg>
`);

// --------------------- svg line --------------------------
var $doc = $(document),
    $win = $(window),
    $svg = $('.svgLine').drawsvg(),
    max = $doc.height() - $win.height();

$win.on('scroll', function() {
    var p = $win.scrollTop() / max;
    $svg.drawsvg('progress', p);
});

// --------------------- following line ----------------------
// const path = document.getElementById('path');
// const circle = document.getElementById('startCircle');

// function update() {
//     const d = document.querySelector('body').offsetHeight / path.getTotalLength();
//     const offset = Math.floor(window.pageYOffset / d) + 500;
//     const firePoint = path.getPointAtLength(offset -5750);

//     path.style.strokeDashoffset = offset;
//     circle.setAttribute('cx', firePoint.x);
//     circle.setAttribute('cy', firePoint.y);
// }

// update();

// window.addEventListener('scroll', update);