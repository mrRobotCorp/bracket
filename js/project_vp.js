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


document.querySelector('.pro_thumbnail').insertAdjacentHTML('afterend', `
    <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
    </div>
`)