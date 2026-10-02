/* =====================================================
   NKR PORTFOLIO JAVASCRIPT
===================================================== */


/* ===============================
   MOBILE NAVIGATION
================================ */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

});


/* Close menu after clicking */

document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

        });

    });



/* ===============================
   ACTIVE NAVIGATION
================================ */

const navLinks =
    document.querySelectorAll(
        "#navigation a"
    );

const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.style.color =
                "#ff1493";

        }

    });

});



/* ===============================
   REVEAL ANIMATIONS
================================ */

const revealItems =
    document.querySelectorAll(
        ".case-file, .fact, .skill-group, .record-panel, .identity-panel"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "reveal-active"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});



/* ===============================
   MOUSE PINK GLOW
================================ */

const glow =
    document.createElement("div");

glow.className =
    "mouse-glow";

document.body.appendChild(glow);


document.addEventListener(
    "mousemove",
    (event) => {

        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    }
);



/* ===============================
   DYNAMIC STYLE
================================ */

const dynamicStyle =
    document.createElement("style");


dynamicStyle.innerHTML = `

.reveal {

    opacity: 0;

    transform:
        translateY(25px);

    transition:
        opacity .7s ease,
        transform .7s ease;

}

.reveal-active {

    opacity: 1;

    transform:
        translateY(0);

}

.mouse-glow {

    position: fixed;

    width: 180px;

    height: 180px;

    border-radius: 50%;

    pointer-events: none;

    z-index: -1;

    transform:
        translate(-50%, -50%);

    background:
        radial-gradient(
            circle,
            rgba(255,20,147,.07),
            transparent 65%
        );

}

`;

document.head.appendChild(dynamicStyle);



/* ===============================
   TERMINAL TEXT EFFECT
================================ */

const terminalText =
    document.querySelector(
        ".terminal-final"
    );


if (terminalText) {

    setInterval(() => {

        terminalText.style.opacity =
            terminalText.style.opacity === "0.4"
                ? "1"
                : "0.4";

    }, 800);

}