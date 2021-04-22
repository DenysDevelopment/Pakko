// Меню бургер
const iconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".nav")
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock")
    iconMenu.classList.toggle("_open")
    menuBody.classList.toggle("_open")
  })
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll(".nav__link[data-goto]")
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock")
        iconMenu.classList.remove("_active")
        menuBody.classList.remove("_active")
      }

      document.body.classList.remove("_lock")
      iconMenu.classList.remove("_open")
      menuBody.classList.remove("_open")

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      })
      e.preventDefault()
    }
  }
}

//header
const header = document.querySelector("header")

if (header) {
  window.addEventListener(
    "scroll",
    () => {
      console.log(1)
      if (window.pageYOffset > 100) {
        header.classList.add("_fixed")
      } else {
        header.classList.remove("_fixed")
      }
    },
    { passive: true }
  )
}
