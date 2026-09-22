document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================
           SCROLL ANIMATION
        ========================== */

        const elements =
            document.querySelectorAll(
                ".sport-card, .content-card, .analysis-box, .telegram-box"
            );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        elements.forEach(
            function (element) {

                observer.observe(element);

            }
        );



        /* =========================
           TELEGRAM CLICK
        ========================== */

        const telegramLinks =
            document.querySelectorAll(
                'a[href*="t.me"]'
            );


        telegramLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        console.log(
                            "Telegram button clicked"
                        );

                    }
                );

            }
        );



        /* =========================
           HEADER SCROLL
        ========================== */

        const header =
            document.querySelector(
                ".header"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 50
                ) {

                    header.style.background =
                        "rgba(5,7,25,.88)";

                    header.style.backdropFilter =
                        "blur(15px)";

                } else {

                    header.style.background =
                        "transparent";

                    header.style.backdropFilter =
                        "none";

                }

            }
        );


    }
);
