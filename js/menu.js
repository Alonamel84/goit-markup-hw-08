(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open"),
    closeMenuBtn: document.querySelector(".menu-close"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();