gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("section");

gsap.to(sections, {
	xPercent: -100 * ( sections.length -2 ),
	ease: "none",
	scrollTrigger: {
		trigger: '#container',
		end: ()=> "+=" + document.querySelector("#container").offsetWidth,
		pin: true,
		scrub: 0.5,
	}
});

// ----------------- thumbnail img change --------------------------
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