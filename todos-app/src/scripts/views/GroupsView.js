import Group from '../components/group';

export default class GroupsView {
  constructor() {
    // The group element
    this.groupsList = this.getElement('.list-item-container');
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  // TODO: This will render groups data to UI
  displayGroupsList(groupsListData) {
    this.groupsList.innerHTML = Group(groupsListData);
  }
}
