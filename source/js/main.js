const navMain = document.querySelector(".header__nav"),
    navToggle = document.querySelector(".header__nav-tooggle");
navToggle.addEventListener(
    "click",
    () => {

        if (navMain.classList.contains("header__nav--closed")) {

            navMain.classList.remove("header__nav--closed");
            navMain.classList.add("header__nav--opened");

        } else {

            navMain.classList.add("header__nav--closed");
            navMain.classList.remove("header__nav--opened");

        }

    }
);
