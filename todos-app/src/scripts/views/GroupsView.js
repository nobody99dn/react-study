import Group from '../components/group';

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

    this.groupHeader = this.getElement('.group-header') || [];
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  // TODO: Get value of group input
  get _groupText() {
    return this.groupInput.value;
  }

  // TODO: Reset value of group input
  _resetGroupInput() {
    this.groupInput.value = '';
  }

  // TODO: This will render groups data to UI
  displayGroupsList(groupsListData) {
    this.groupsList.innerHTML = Group(groupsListData);
    this.groupsList.bind(this);
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
    console.log(this.groupsList.classList);
    [...document.querySelectorAll('.group-header')].forEach((group) => {
      console.log(group);
      group.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        console.log(e.target);
      });
    });
  }
}
