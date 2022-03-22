import Group from '../components/group';

export default class GroupsView {
  constructor() {
    // The group element
    this.groupsList = this.getElement('.list-item-container');

    // The add new group button
    this.newGroupBtn = this.getElement('.group-btn');

    // The input group
    this.groupInput = this.getElement('.group-input');

    // The form of group
    this.groupName = this.getElement('.group-form');

    // The group name
    this.groupName = this.getElement('.group-name');

    console.log(this.newGroupBtn);
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  get _groupText() {
    return this.groupName.value;
  }

  _resetGroupInput() {
    this.groupName.value = '';
  }

  // TODO: This will render groups data to UI
  displayGroupsList(groupsListData) {
    this.groupsList.innerHTML = Group(groupsListData);
  }

  bindOpenAddGroup() {
    this.newGroupBtn.addEventListener('click', (e) => {});
  }
}
