/**
 * Hide the menu is opening
 */
const hideMenuAction = () => {
  const openMenu = document.querySelector('.dropdown-menu.d-block');

  if (openMenu) {
    openMenu.classList.remove('d-block');
  }
};

/**
 * Hide the form is opening
 */
const hideForm = () => {
  const formIsOpening = document.querySelector(
    '.form-item:not(.visually-hidden), #new-group-form:not(.visually-hidden), #new-list-form:not(.visually-hidden), .new-list-form-inside:not(.visually-hidden)'
  );

  if (formIsOpening) {
    formIsOpening.classList.add('visually-hidden');
    formIsOpening.querySelector('input[type="text"]').blur();
  }
};

/**
 * Show the names is hiding when click outside
 */
const showNameIsHiding = () => {
  const nameHiding = document.querySelector(
    '.group-name.visually-hidden, .list-name.visually-hidden'
  );
  if (nameHiding) {
    nameHiding.classList.remove('visually-hidden');
  }
};

export { hideMenuAction, hideForm, showNameIsHiding };
