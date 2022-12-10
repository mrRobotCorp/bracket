gsap.registerPlugin(ScrollTrigger);

let SECTIONS = gsap.utils.toArray("section");

gsap.to(SECTIONS, {
	xPercent: -100 * ( SECTIONS.length -2 ),
	ease: "none",
	scrollTrigger: {
		trigger: '#container',
		end: ()=> "+=" + document.querySelector("#container").offsetWidth,
		pin: true,
		scrub: 0.5,
	}
});