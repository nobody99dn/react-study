import Group from '../components/group';
import MenuAction from '../components/menuAction';
import { ACTION_ITEMS, NAME_ACTION } from '../constants/todo';
import { hideMenuAction } from '../constants/view';

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
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  // TODO: Get value of group input
  get _groupText() {
    return this.groupInput.value;
  }

  /**
   * Reset input
   */
  _resetGroupInput() {
    this.groupInput.value = '';
  }

  /**
   * Render groups data to UI
   * @param {array} groupsListData
   */
  displayGroupsList(groupsListData) {
    this.groupsList.innerHTML = Group(groupsListData);
  }

  /**
   * Bind open add input group
   */
  bindOpenAddGroup() {
    this.newGroupBtn.addEventListener('click', (e) => {
      this.groupForm.classList.remove('visually-hidden');
      this.groupInput.focus();
    });
  }

  /**
   * Bind submit a new group
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

  bindOpenActionMenu() {
    this.groupsList.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      if (e.target.classList.contains('group-button')) {
        // Group ID
        const id = e.target.id;

        // Render Action Menu to Group
        e.target.querySelector('.dropdown-menu').innerHTML =
          MenuAction(ACTION_ITEMS);

        // Display Action menu
        hideMenuAction();
        e.target.querySelector('.dropdown-menu').classList.add('d-block');

        // Add event listener for menu action
        e.target.querySelectorAll('.dropdown-item').forEach((item) => {
          item.addEventListener('click', (e) => {
            if (e.target.dataset.value === NAME_ACTION.RENAME) {
              const buttonGroup = document.getElementById(id);

              hideMenuAction();

              // show form
              buttonGroup
                .querySelector('form')
                .classList.remove('visually-hidden');

              // hide name
              buttonGroup
                .querySelector('.group-name')
                .classList.add('visually-hidden');
            }
          });
        });
      }
    });
  }

  bindCloseActionMenu() {
    document.querySelector('body').addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown-menu')) {
        hideMenuAction();
      }
    });
  }

  bindSubmitRenameGroup(handler) {}
}
