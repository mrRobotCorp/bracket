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