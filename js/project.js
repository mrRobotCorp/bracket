gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("section");

gsap.to(sections, {
	xPercent: -100 * ( sections.length -2 ),
	ease: "none",
	scrollTrigger: {
		trigger: '#container',
		end: ()=> "+=" + document.querySelector("#container").offsetWidth,
		pin: true,
		scrub: 1,
	}
});

// ----------------- main (overview) cursor --------------------------
// const overview = document.querySelector(".overview");

// overview.addEventListener("mouseover", function () {
// 	cursor.classList.add("mainHover");
// 	follower.classList.remove("cursor_follower");
// 	function myCursor(e) {
// 		cursor.style.top = e.pageY + 45 + "px";
// 		cursor.style.left = e.pageX + 45 + "px";
// 	}
// 	window.addEventListener("mousemove", myCursor);
// });
// overview.addEventListener("mouseleave", function () {
// 	cursor.classList.remove("mainHover");
// 	follower.classList.add("cursor_follower");
// 	function myCursor(e) {
// 		cursor.style.top = e.pageY + 10 + "px";
// 		cursor.style.left = e.pageX + 10 + "px";
// 	}
// 	window.addEventListener("mousemove", myCursor);
// });

// -------------------- scroll down ---------------------------
const down = document.querySelector('.scrollDown');

down.onclick = function() {
	window.scrollTo({
		top: 750,
		behavior: 'smooth'
	});
}



// ----------------- thumbnail cursor --------------------------
const thumbnail = document.querySelectorAll(".thumbnail");

thumbnail.forEach(function (thumb) {
    thumb.addEventListener("mouseover", function () {
        cursor.classList.add("projectHover");
        follower.classList.remove("cursor_follower");
        function myCursor(e) {
            cursor.style.top = e.pageY + 45 + "px";
            cursor.style.left = e.pageX + 45 + "px";
        }
        window.addEventListener("mousemove", myCursor);
    });
	
    thumb.addEventListener("mouseleave", function () {
        cursor.classList.remove("projectHover");
        follower.classList.add("cursor_follower");
        function myCursor(e) {
            cursor.style.top = e.pageY + 10 + "px";
            cursor.style.left = e.pageX + 10 + "px";
        }
        window.addEventListener("mousemove", myCursor);
    });
});

// ----------- img change ---------------
const thumb0 = document.querySelector(".thumbnail0");
const miniImg0 = document.querySelectorAll(".img_bottom0");

const thumb1 = document.querySelector(".thumbnail1");
const miniImg1 = document.querySelectorAll(".img_bottom1");

const thumb2 = document.querySelector(".thumbnail2");
const miniImg2 = document.querySelectorAll(".img_bottom2");

function changeImg(e) {
    let targetImg0 = miniImg0[e - 1];
    let imgAttr0 = targetImg0.getAttribute("src");

    thumb0.setAttribute("src", imgAttr0);

	// --------------------
	let targetImg1 = miniImg1[e - 1];
    let imgAttr1 = targetImg1.getAttribute("src");

    thumb1.setAttribute("src", imgAttr1);

	// -----------------------
	let targetImg2 = miniImg2[e - 1];
    let imgAttr2 = targetImg2.getAttribute("src");

    thumb2.setAttribute("src", imgAttr2);
};