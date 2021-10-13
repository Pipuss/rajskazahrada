const menuMain = document.querySelector(".header__nav"),
    menuToggle = document.querySelector(".header__nav-toggle"),
    menuCheckbox = document.querySelector(".header__nav-checkbox");

const menuHandler = () => {
  menuToggle.addEventListener('click', () => {
    if (menuMain.classList.contains("header__nav--closed")) {
      showMenu();
    } else if (menuMain.classList.contains("header__nav--opened")) {
      closeMenu();
    }
  })
}

const showMenu = () => {
  menuMain.classList.remove("header__nav--closed");
  menuMain.classList.add("header__nav--opened");
  document.addEventListener('keydown', onMenuEscKeydown);
  document.addEventListener('click', onMenuDocumentClick);
}

const closeMenu = () => {
  menuMain.classList.remove("header__nav--opened");
  menuMain.classList.add("header__nav--closed");
  menuCheckbox.checked = false;
  document.removeEventListener('keydown', onMenuEscKeydown);
  document.removeEventListener('click', onMenuDocumentClick);
}

const onMenuEscKeydown = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

const onMenuDocumentClick = (evt) => {
    if (evt.target.className !== "header__nav-checkbox"
      && evt.target.className !== "header__nav-list"
      && evt.target.className !== "header__nav-item") {
      closeMenu();
    }
}

export { menuHandler }
