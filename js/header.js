// ------------------ loading --------------------
document.querySelector('body').insertAdjacentHTML('afterbegin', `
    <div class="loader">
        <div class="animate">Loading</div>
    </div>
`)

window.onload = function () {
    document.querySelector(".loader").style.visibility = "hidden";
};

// -------------------- page location -----------------------
const gnb_home = document.querySelector('.gnb_home');
const gnb_project = document.querySelector('.gnb_project');
const gnb_study = document.querySelector('.gnb_study');
const gnb_iam = document.querySelector('.gnb_iam');

gnb_home.onclick = function () {
    window.location.replace('index.html');
};
gnb_project.onclick = function () {
    window.location.replace('project.html');
};
gnb_study.onclick = function () {
    window.location.replace('study.html');
};
gnb_iam.onclick = function () {
    window.location.replace('iam.html');
};

// ---------------------------------------------

const gnbMenu = document.querySelectorAll('#gnb li');
const scrollNum = document.querySelector('html').scrollTop;

window.onscroll = function () {
    if (scrollNum < 500 || window.location == 'index.html') {
        gnbMenu.forEach(function (menu) {
            menu.style.display = 'inline-block';
        });
    }

    if (scrollNum > 1500) {
        gnbMenu.forEach(function (menu) {
            menu.classList.add('hide');
            menu.classList.remove('show');
            menu.style.display = 'none';
        })
    } else {
        gnbMenu.forEach(function (menu) {
            menu.style.display = 'inline-block';
            menu.classList.add('show');
            menu.classList.remove('hide');
        })
    }

    // --------------------------

    gnbMenu.forEach(function (menu) {
        menu.style.display = 'none';
    });

    document.querySelector('header').addEventListener('mouseover', (e) => {
        gnbMenu.forEach(function (menu) {
            menu.style.display = 'inline-block';
            menu.classList.add('show');
            menu.classList.remove('hide');
        })
    });

    document.querySelector('header').addEventListener('mouseout', (e) => {
        gnbMenu.forEach(function (menu) {
            menu.classList.add('hide');
            menu.classList.remove('show');
            menu.style.display = 'none';
        });
    });
}

// ----------------- gnb active ---------------------------
let pageUrl = window.location.href;

$(window).on('load', function () {
    $('header #gnb > li').siblings('li').removeClass('active');
    if (pageUrl.indexOf('project') > -1) {
        $('header #gnb > li').eq(1).addClass('active');
    } else if (pageUrl.indexOf('study') > -1) {
        $('header #gnb > li').eq(2).addClass('active');
    } else if (pageUrl.indexOf('iam') > -1) {
        $('header #gnb > li').eq(3).addClass('active');
    } else {
        // home (index)
        $('header #gnb > li').eq(0).addClass('active');
    }
});

if (window.innerWidth < 768) {
    let copyRight = document.querySelector(".footerInfo p");
    console.log("ch");

    copyRight.innerHTML = "";

}

window.onresize = function () {
    console.log("onresize");
    console.log(window.innerWidth);

    if (window.innerWidth < 768) {

    }


    if (window.innerWidth > 1024) {

        // ----------------------- custom mouse --------------------------------
        const cursor = document.createElement("div");
        cursor.setAttribute("class", "cursor");
        const follower = document.createElement("div");
        follower.setAttribute("class", "cursor_follower");

        document.querySelector("body").prepend(cursor, follower);

        function myCursor(e) {
            cursor.style.top = e.pageY + 10 + "px";
            cursor.style.left = e.pageX + 10 + "px";
        }

        function Trailer(e) {
            gsap.to(follower, { duration: 0.5, left: e.pageX - 10, top: e.pageY - 10 });
        }

        window.addEventListener("mousemove", myCursor);
        window.addEventListener("mousemove", Trailer);
    }
}


// --------------------- footer contact box Insert ---------------------
document.querySelector('footer').insertAdjacentHTML('beforeend', `
    <div class="contact">
        <h4>Contact Me</h4>

        <form class="formAll" method="POST" data-email="depo89055@gmail.com"
            action="https://script.google.com/macros/s/AKfycbwz1MqWC3Ub-CGKYgqbsnyHiRppekx_FAGdsbJErfRLvEj-CEuvE_GgTMKUxpM3qi18sA/exec">

            <div class="formContent">
                <fieldset>
                    <label for="name">보내는 이 : </label>
                    <input id="name" name="name" placeholder="이름을 적어주세요." />
                </fieldset>

                <fieldset>
                    <label for="message">메세지 : </label>
                    <textarea id="message" name="message" placeholder="보내고 싶은 내용을 적어주세요."></textarea>
                </fieldset>

                <fieldset>
                    <label for="email">메일 주소 : </label>
                    <input id="email" name="email" type="email" value="" required placeholder="your-address@email.com" />
                </fieldset>

                <button class="sendBtn">Send</button>
            </div>

            <div class="nextSending">
                <p>
                    연락 보내주셔서 감사합니다🌈 <br>
                    빠른 시일 내에 연락드리겠습니다.
                </p>
            </div>
        </form>
    </div>
`);

if (window.innerWidth < 768) {
    let contact = document.querySelector(".contact");

    contact.insertAdjacentHTML('beforeend', `<p class="cpRight">© All rights reserved Yoon A Kim.</p>`);
}

// ---------------------- footer Contact ------------------------------
(function () {
    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var honeypot;

        var fields = Object.keys(elements).filter(function (k) {
            if (elements[k].name === "honeypot") {
                honeypot = elements[k].value;
                return false;
            }
            return true;
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail
            = form.dataset.email || ""; // no email by default

        return { data: formData, honeypot: honeypot };
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;

        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
            return false;
        }

        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                var formElements = form.querySelector(".formContent")
                if (formElements) {
                    formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = form.querySelector(".nextSending");
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }

    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.formAll");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();
