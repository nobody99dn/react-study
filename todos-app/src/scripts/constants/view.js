const hideMenuAction = () => {
  const openMenu = document.querySelector('.dropdown-menu.d-block');

  if (openMenu) {
    openMenu.classList.remove('d-block');
  }
};

export { hideMenuAction };
