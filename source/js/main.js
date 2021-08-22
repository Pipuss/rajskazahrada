const navMain = document.querySelector(".page-header__nav"),
    navToggle = document.querySelector(".page-header__nav-toggle");
navMain.classList.remove("nav--nojs");
navToggle.classList.remove("nav-toggle--nojs");
navToggle.addEventListener(
    "click",
    () => {

        if (navMain.classList.contains("nav--closed")) {

            navMain.classList.remove("nav--closed");
            navMain.classList.add("nav--opened");
            navToggle.classList.remove("nav-toggle--closed");
            navToggle.classList.add("nav-toggle--opened");

        } else {

            navMain.classList.add("nav--closed");
            navMain.classList.remove("nav--opened");
            navToggle.classList.add("nav-toggle--closed");
            navToggle.classList.remove("nav-toggle--opened");

        }

    }
);
