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
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Get value of group input
   */
  get _groupText() {
    return this.groupInput.value;
  }

  /**
   * Reset input method
   */
  _resetGroupInput() {
    this.groupInput.value = '';
  }

  /**
   * Render groups data to UI
   *
   * @param {array} groupsListData
   * @param {callback} handler
   */
  displayGroupsList(groupsListData, handler) {
    this.groupsList.innerHTML = Group(groupsListData);

    [...this.groupsList.querySelectorAll('.group-button')].forEach((button) => {
      const groupId = button.id;
      const form = button.querySelector('.form-item');

      this.bindSubmitRenameGroup(form, groupId, handler); // #2
    });
  }

  /**
   * This using for trigger event submit in rename input
   *
   * @param {DOM} form
   * @param {callback} handler
   */
  bindSubmitRenameGroup(form, groupId, handler) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const groupName = e.target.querySelector('.group-name-input').value;

      const updateGroup = {
        id: groupId,
        name: groupName
      };

      handler(updateGroup); // #1
    });
  }

  /**
   * Trigger open form new group
   */
  bindOpenAddGroup() {
    this.newGroupBtn.addEventListener('click', (e) => {
      this.groupForm.classList.remove('visually-hidden');
      this.groupInput.focus();
    });
  }

  /**
   * Trigger event submit new group
   *
   * @param {callback} handler
   */
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

  /**
   * This using for trigger right click into group item
   */
  bindOpenActionMenu(deleteGroupHandler) {
    this.groupsList.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      hideForm();
      showNameIsHiding();

      if (e.target.classList.contains('group-button')) {
        // Group ID
        const id = e.target.id;

        // Query parent both of ul and button then query to ul
        const menu =
          e.target.closest('.accordion-item').querySelector('.dropdown-menu') ||
          [];

        // Render Action Menu to Group
        menu.innerHTML = MenuAction(ACTION_ITEMS);

        // Display Action menu
        hideMenuAction();
        menu.classList.add('d-block');

        this.bindClickActionMenu(menu, id, deleteGroupHandler);
      }
    });
  }

  /**
   * Bind click event to menu item after render menu action
   *
   * @param {object} menu
   * @param {string} id
   */
  bindClickActionMenu(menu, id, deleteGroupHandler) {
    [...menu.querySelectorAll('.dropdown-item')].forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.dataset.value === NAME_ACTION.RENAME) {
          const buttonGroup = document.getElementById(id);

          hideMenuAction();

          // Set value input = name of group
          buttonGroup.querySelector('.group-name-input').value =
            buttonGroup.querySelector('.group-name').dataset.value;

          // show form and focus input
          buttonGroup.querySelector('form').classList.remove('visually-hidden');
          buttonGroup.querySelector('.group-name-input').focus();

          // hide name
          buttonGroup
            .querySelector('.group-name')
            .classList.add('visually-hidden');
        } else if (e.target.dataset.value === NAME_ACTION.DELETE) {
          deleteGroupHandler(id);
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
