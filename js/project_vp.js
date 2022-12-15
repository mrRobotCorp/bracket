// --------------- side nav page -------------------
const navAl = document.querySelector('.navAl');
const navVp = document.querySelector('.navVp');
const navCls = document.querySelector('.navCls');

navAl.onclick = function() {
    window.location.replace('project_alpick.html');
};
navVp.onclick = function() {
    window.location.replace('project_vp.html');
};
navCls.onclick = function() {
    window.location.replace('project_class.html');
};

// ---------------- side nav motion --------------------
const lagAmount = 50;
const maxSpeed = 90;
const frameRate = 20;
const selector = '.projectNav';

let scrollTop = 0;
let pinTop = 0;
let lastTime;

const updatePinPosition = time => {
    if (!lastTime)
    lastTime = time;
    let delta = time - lastTime;
    if (delta >= frameRate) {
        scrollTop = $(window).scrollTop();
        let move = (scrollTop - pinTop) * delta / (lagAmount + delta);
        let direction = move === 0 ? 0 : move / Math.abs(move);
        pinTop = pinTop + Math.min(Math.abs(move), maxSpeed) * direction;
        $(selector).css('transform', `translateY(${-move}px`);
        lastTime = time;
    }
    requestAnimationFrame(updatePinPosition);
};
requestAnimationFrame(updatePinPosition);

// ------------------ img hover custom mouse ------------------
const thumbnail = document.querySelectorAll(".pro_thumbnail");

thumbnail.forEach(function (thumb) {
    thumb.addEventListener("mouseover", function () {
        cursor.classList.add("thumbHover");
        follower.classList.remove("cursor_follower");
        function myCursor(e) {
            cursor.style.top = e.pageY + 60 + "px";
            cursor.style.left = e.pageX + 60 + "px";
        }
        window.addEventListener("mousemove", myCursor);
    });
    thumb.addEventListener("mouseleave", function () {
        cursor.classList.remove("thumbHover");
        follower.classList.add("cursor_follower");
        function myCursor(e) {
            cursor.style.top = e.pageY + 10 + "px";
            cursor.style.left = e.pageX + 10 + "px";
        }
        window.addEventListener("mousemove", myCursor);
    });
});

// ------------------------------------------
document.querySelector('.pro_thumbnail').insertAdjacentHTML('afterend', `
    <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
    </div>
`)