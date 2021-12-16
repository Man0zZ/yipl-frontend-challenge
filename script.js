(() => {
  const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      // prevent default anchor click behavior
      event.preventDefault();
      const dropdown = event.target.parentElement;
      // if dropdown is already expanded, collapse it
      if (dropdown.classList.contains("active")) {
        collapseSubMenu();
      } else {
        // collapse existing expanded dropdown
        if (navMenu.querySelector(".dropdown.active")) {
          collapseSubMenu();
        }
        // expand new dropdown
        dropdown.classList.add("active");
        const subMenu = dropdown.querySelector(".sub__menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector(".dropdown.active .sub__menu")
      .removeAttribute("style");
    navMenu.querySelector(".dropdown.active").classList.remove("active");
  }
  function resizeFix() {
    // if navMenu is open ,close it
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    // if dropdown is expanded , collapse it
    if (navMenu.querySelector(".dropdown.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// /*SCROLL HOME*/
// sr.reveal(".home", {});
// sr.reveal(".home__container", {});
// sr.reveal(".home__icon a", { interval: 400 });

// /*SCROLL ABOUT*/
// sr.reveal(".about__content", {});
// sr.reveal(".btn-secondary", { delay: 400 });
// sr.reveal(".about", { delay: 400 });

// /*SCROLL projects*/
// sr.reveal(".image__1", {});
// sr.reveal(".image__2", {});
// sr.reveal(".image__3", { interval: 200 });
// sr.reveal(".image__4", { delay: 600 });

// /*SCROLL NEWS AND EVENTS*/
// sr.reveal(".events__detail", {});
// sr.reveal(".events__content", { delay: 400 });
// sr.reveal(".past", { interval: 400 });

// /*SCROLL NEWS*/
// sr.reveal(".showcase__1", {});
// sr.reveal(".showcase__2", { delay: 200 });
// sr.reveal(".showcase__3", { interval: 200 });

// /*SCROLL GALLERY*/
// sr.reveal(".team__detail", {});
// sr.reveal(".name", { interval: 200 });
// sr.reveal(".social__icon", { interval: 400 });
// sr.reveal(".album__1", {});
// sr.reveal(".album__2", { delay: 400 });
// sr.reveal(".btn-primary", { delay: 400 });

// /*SCROLL RESOURCES*/
// sr.reveal(".clients__detail", {});
// sr.reveal(".client__1", { delay: 200 });
// sr.reveal(".client__2", { delay: 600 });

// /*SCROLL RESOURCES1*/
// sr.reveal(".partners__title", {});
// sr.reveal(".network", { interval: 400 });

// /*SCROLL CARD*/
// sr.reveal(".resources__detail", {});
// sr.reveal(".links", { delay: 200 });
// sr.reveal(".card", { delay: 400 });

// /*SCROLL CONTACT*/
// sr.reveal(".arrow", {});
// sr.reveal(".contact__column", { interval: 200 });

// /*SCROLL FOOTER*/
// sr.reveal("small", {});
// sr.reveal(".footer__icon", { delay: 400 });
