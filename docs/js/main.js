const navMain=document.querySelector(".header__nav"),navToggle=document.querySelector(".header__nav-tooggle");navToggle.addEventListener("click",()=>{navMain.classList.contains("header__nav--closed")?(navMain.classList.remove("header__nav--closed"),navMain.classList.add("header__nav--opened")):(navMain.classList.add("header__nav--closed"),navMain.classList.remove("header__nav--opened"))});