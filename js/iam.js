document.querySelector('.mainBanner article').insertAdjacentHTML('afterbegin', `
    <div class='introduce'>
        <p>탄탄한 마크업을 기초로 <span class="text-highlight">다양하고 새로운 시각</span>을 가지고 바라보는 <span class="text-highlight">개발자 김윤아</span>입니다.</p>
        <p>Hello, I’m developer who looks at various and new perspectives based on a solid markup.</p>
    </div>
`);

// ------------------- text highlight --------------------------
const highlight = document.querySelectorAll(".text-highlight");

window.addEventListener('load', function () {
    highlight.forEach(function (line) {
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

// ----------------- skill page location -----------------
// const skillL = document.querySelectorAll('.skillL');

// skillL.forEach( function() {
//     this.onclick = function() {
//         window.location.replace('study.html');
//     };
// });

// ------------------ skill hover ------------------------
// const skillJs = document.querySelector(".skillJs");
// const skillCCS = document.querySelector(".skillCCS");

// skillJs.addEventListener("mouseover", function () {
//     cursor.classList.add("jsHover");
//     follower.classList.remove("cursor_follower");
//     function myCursor(e) {
//         cursor.style.top = e.pageY + 80 + "px";
//         cursor.style.left = e.pageX + 60 + "px";
//     }
//     window.addEventListener("mousemove", myCursor);
// });
// skillJs.addEventListener("mouseleave", function () {
//     cursor.classList.remove("jsHover");
//     follower.classList.add("cursor_follower");
//     function myCursor(e) {
//         cursor.style.top = e.pageY + 10 + "px";
//         cursor.style.left = e.pageX + 10 + "px";
//     }
//     window.addEventListener("mousemove", myCursor);
// });

// skillCCS.addEventListener("mouseover", function () {
//     cursor.classList.add("cssHover");
//     follower.classList.remove("cursor_follower");
//     function myCursor(e) {
//         cursor.style.top = e.pageY - 160 + "px";
//         cursor.style.left = e.pageX + 80 + "px";
//     }
//     window.addEventListener("mousemove", myCursor);
// });
// skillCCS.addEventListener("mouseleave", function () {
//     cursor.classList.remove("cssHover");
//     follower.classList.add("cursor_follower");
//     function myCursor(e) {
//         cursor.style.top = e.pageY + 10 + "px";
//         cursor.style.left = e.pageX + 10 + "px";
//     }
//     window.addEventListener("mousemove", myCursor);
// });


// --------------------- original svg ------------------------

document.querySelector('.experience').insertAdjacentHTML('beforeend', `
    <svg class='svgLine' x='0' y='0' width="810" height="2200" viewBox="0 0 822 2303" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path" fill='none' stroke="#EC4D36" stroke-width='3' d="M18 18C18 67.9082 52.4999 163.437 263 201.186C402.068 226.125 548.612 231.108 613.5 235.671C690.5 241.085 825.5 252.456 800 444.136C775.5 575.713 554.782 628.361 385.5 653.5C277 669.612 55.5456 740.178 48.1316 899.289C44.6299 974.439 98.7078 1051.2 287 1105C357 1125 576.5 1159.74 716.5 1245C794.5 1292.5 838 1386.5 813 1485.5C763.193 1682.74 461.65 1623.4 392.5 1693C316.5 1769.5 379.363 1867.62 401.5 1919C428 1980.5 481 2041 441 2145.5C416 2224 406 2244 406 2301" stroke-linecap="round"/>
        <line x1="387.071" y1="2271.13" x2="405.457" y2="2299.93" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <line x1="428.245" y1="2272.78" x2="406.107" y2="2300.75" stroke="#EC4D36" stroke-width="3" stroke-linecap="round"/>
        <circle id="startCircle" cx="18" cy="18" r="18" fill="#EC4636"/>
    </svg>
`);

// --------------------- jquery draw svg --------------------------
let $doc = $(document),
    $win = $(window),
    $svg = $('.svgLine').drawsvg(),
    max = $doc.height() - $win.height();

$win.on('scroll', function () {
    var p = $win.scrollTop() / max;
    $svg.drawsvg('progress', p);
});



// ------------- responsive ---------------------

if (window.innerWidth < 768) {
    let mainProfile = document.querySelector(".mainProfile");
    let exArticle = document.querySelector(".mystory .experience");

    mainProfile.innerHTML = `<div class="circle"></div> <div class="profileImg"></div`;
    exArticle.innerHTML = `
    <h3 class="blind"></h3>
    <svg display="none">
    <symbol id="arrow">
        <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" />
    </symbol>
</svg>

<div id="timeline" class="timeline">
    <div class="timeBtns">
        <button class="timeBtn" type="button" data-action="expand">전체보기</button>
        <button class="timeBtn" type="button" data-action="collapse">전체닫기</button>
    </div>

    <div class="exStudy">
        <div class="timelineHead">
            <button class="timeArrow" type="button" id="item1" aria-labelledby="item1-name" aria-expanded="false"
                aria-controls="item1-ctrld" aria-haspopup="true" data-item="1">
                <svg class="timeArrowIcon" viewBox="0 0 24 24" width="24px" height="24px">
                    <use href="#arrow" />
                </svg>
            </button>
            <span class="timeDot"></span>
            <span id="item1-name" class="timeline__meta">
                <time class="timeline__date" datetime="2016-03-02">2016</time>
                <h4>studied financial</h4>
            </span>
        </div>
        <div class="tlBody" id="item1-ctrld" role="region" aria-labelledby="item1" aria-hidden="true">
            <p class="tlContent">
                저는 처음 경제 분야의 진로를 목표로 회계 금융 공부를 하였습니다.
                이 공부를 계기로 숫자의 정확성을 알게되고 수치를 정밀하게 보는 습관을 가지게 되었습니다.
            </p>
        </div>
    </div>
    <div class="exStudy">
        <div class="timelineHead">
            <button class="timeArrow" type="button" id="item2" aria-labelledby="item2-name" aria-expanded="false"
                aria-controls="item2-ctrld" aria-haspopup="true" data-item="2">
                <svg class="timeArrowIcon" viewBox="0 0 24 24" width="24px" height="24px">
                    <use href="#arrow" />
                </svg>
            </button>
            <span class="timeDot"></span>
            <span id="item2-name" class="timeline__meta">
                <time class="timeline__date" datetime="2019-03-03">2019</time><br>
                <h4>studied public nature health</h4>
            </span>
        </div>
        <div class="tlBody" id="item2-ctrld" role="region" aria-labelledby="item2" aria-hidden="true">
            <p class="tlContent">
                적성을 찾아보는 과정에서 저는 보건 분야를 경험해보았습니다.
                화학 계산식을 배우면서 숫자를 계산하고 이를 여러 화학 물질에 직접 대입하여 실험을 진행하였습니다.
                이를 통해 자신의 계산과 활용의 절차에 익숙해졌습니다.
            </p>
        </div>
    </div>
    <div class="exStudy">
        <div class="timelineHead">
            <button class="timeArrow" type="button" id="item3" aria-labelledby="item3-name" aria-expanded="false"
                aria-controls="item3-ctrld" aria-haspopup="true" data-item="3">
                <svg class="timeArrowIcon" viewBox="0 0 24 24" width="24px" height="24px">
                    <use href="#arrow" />
                </svg>
            </button>
            <span class="timeDot"></span>
            <span id="item3-name" class="timeline__meta">
                <time class="timeline__date" datetime="2020-03-02">2020</time><br>
                <h4>studied ui/ux design</h4>
            </span>
        </div>
        <div class="tlBody" id="item3-ctrld" role="region" aria-labelledby="item3" aria-hidden="true">
            <p class="tlContent">
                디자인 분야의 공부를 시작하였을 때는 uiux로 시작하여 영상과 3D 디자인 등 다양한 미디어 디자인을 경험하였습니다.
                그 중 웹페이지의 ui 디자인에 가장 관심을 가지고 공부하였습니다.
            </p>
        </div>
    </div>
    <div class="exStudy">
        <div class="timelineHead">
            <button class="timeArrow" type="button" id="item4" aria-labelledby="item4-name" aria-expanded="false"
                aria-controls="item4-ctrld" aria-haspopup="true" data-item="4">
                <svg class="timeArrowIcon" viewBox="0 0 24 24" width="24px" height="24px">
                    <use href="#arrow" />
                </svg>
            </button>
            <span class="timeDot"></span>
            <span id="item4-name" class="timeline__meta">
                <time class="timeline__date" datetime="2022-03-03">2022</time><br>
                <h4>and programming</h4>
            </span>
        </div>
        <div class="tlBody" id="item4-ctrld" role="region" aria-labelledby="item4" aria-hidden="true">
            <p class="tlContent">
                숫자의 정확성과 학습의 응용, 웹페이지 기획에 관심을 가졌던 제가 정착한 마지막 종착지는 프로그래밍이었습니다.
            </p>
        </div>
    </div>
</div>
    
    `;



    window.addEventListener("DOMContentLoaded", () => {
        const ctl = new CollapsibleTimeline("#timeline");
    });

    class CollapsibleTimeline {
        constructor(el) {
            this.el = document.querySelector(el);

            this.init();
        }
        init() {
            this.el?.addEventListener("click", this.itemAction.bind(this));
        }
        animateItemAction(button, ctrld, contentHeight, shouldCollapse) {
            const expandedClass = "tlBody--expanded";
            const animOptions = {
                duration: 300,
                easing: "cubic-bezier(0.65,0,0.35,1)"
            };

            if (shouldCollapse) {
                button.ariaExpanded = "false";
                ctrld.ariaHidden = "true";
                ctrld.classList.remove(expandedClass);
                animOptions.duration *= 2;
                this.animation = ctrld.animate([
                    { height: `${contentHeight}px` },
                    { height: `${contentHeight}px` },
                    { height: "0px" }
                ], animOptions);
            } else {
                button.ariaExpanded = "true";
                ctrld.ariaHidden = "false";
                ctrld.classList.add(expandedClass);
                this.animation = ctrld.animate([
                    { height: "0px" },
                    { height: `${contentHeight}px` }
                ], animOptions);
            }
        }
        itemAction(e) {
            const { target } = e;
            const action = target?.getAttribute("data-action");
            const item = target?.getAttribute("data-item");

            if (action) {
                const targetExpanded = action === "expand" ? "false" : "true";
                const buttons = Array.from(this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`));
                const wasExpanded = action === "collapse";

                for (let button of buttons) {
                    const buttonID = button.getAttribute("data-item");
                    const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
                    const contentHeight = ctrld.firstElementChild?.offsetHeight;

                    this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
                }

            } else if (item) {
                const button = this.el?.querySelector(`[data-item="${item}"]`);
                const expanded = button?.getAttribute("aria-expanded");

                if (!expanded) return;

                const wasExpanded = expanded === "true";
                const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
                const contentHeight = ctrld.firstElementChild?.offsetHeight;

                this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
            }
        }
    }
}
