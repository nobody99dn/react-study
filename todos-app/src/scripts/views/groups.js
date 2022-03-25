import Group from '../components/group';
import MenuAction from '../components/menuAction';
import { ACTION_ITEMS, NAME_ACTION } from '../constants/todo';
import { hideForm, hideMenuAction, showNameIsHiding } from '../constants/view';

export default class GroupsView {
  constructor() {
    // The group element
    this.groupsList = this.getElement('.list-group');

    // The add new group button
    this.newGroupBtn = this.getElement('.group-btn');

    // The input group
    this.groupInput = this.getElement('.group-input');

    // The form of group
    this.groupForm = this.getElement('#new-group-form');

    // The group name
    this.groupName = this.getElement('.group-name');

    //The group items
    this.formItems = this.getElements('.form-item') || [];
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }

  // TODO: Get value of group input
  get _groupText() {
    return this.groupInput.value;
  }

  // TODO: Reset value of group input
  _resetGroupInput() {
    this.groupInput.value = '';
  }

  /**
   * This will render groups data to UI and add event to form
   *  */
  displayGroupsList(groupsListData, handler) {
    this.groupsList.innerHTML = Group(groupsListData);

    [...this.groupsList.querySelectorAll('.form-item')].forEach((form) => {
      this.bindSubmitRenameGroup(form, handler); // #2
    });
  }

  bindSubmitRenameGroup(form, handler) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const updateGroup = {
        id: e.target.querySelector('input').id,
        name: e.target.querySelector('input').value
      };

      handler(updateGroup); // #1
    });
  }

  bindOpenAddGroup() {
    this.newGroupBtn.addEventListener('click', (e) => {
      this.groupForm.classList.remove('visually-hidden');
      this.groupInput.focus();
    });
  }

  bindAddNewGroup(handler) {
    this.groupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this._groupText) {
        handler(this._groupText);
        this._resetGroupInput();
        this.groupForm.classList.add('visually-hidden');
      }
    });
  }

  bindOpenActionMenu() {
    this.groupsList.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      hideForm();
      showNameIsHiding();

      if (e.target.classList.contains('group-button')) {
        // Group ID
        const id = e.target.id;
        const menu = document.querySelector(`.dropdown-menu[id="${id}"]`) || [];

        // Render Action Menu to Group
        menu.innerHTML = MenuAction(ACTION_ITEMS);

        // Display Action menu
        hideMenuAction();
        menu.classList.add('d-block');

        this.bindClickActionMenu(menu, id);
      }
    });
  }

  /**
   * Bind click event to menu item after render menu action
   * @param {object} menu
   * @param {string} id
   */
  bindClickActionMenu(menu, id) {
    [...menu.querySelectorAll('.dropdown-item')].forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.dataset.value === NAME_ACTION.RENAME) {
          const buttonGroup = document.getElementById(id);

          hideMenuAction();

          // show form
          buttonGroup.querySelector('form').classList.remove('visually-hidden');

          // hide name
          buttonGroup
            .querySelector('.group-name')
            .classList.add('visually-hidden');
        }
      });
    });
  }

  /**
   * Binding close action menu
   */
  bindClickOutsideAction() {
    document.querySelector('body').addEventListener('click', (e) => {
      !e.target.closest('.dropdown-menu') && hideMenuAction();

      if (!e.target.closest('.form-item, .rename-option, .group-btn')) {
        hideForm();
        showNameIsHiding();
      }
    });
  }
}
