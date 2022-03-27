import Group from '../components/group';

export default class GroupsView {
  constructor() {
    // The group element
    this.groupsList = this.getElement('.list-group');

    // The add new group button
    this.newGroupBtn = this.getElement('.group-btn');

    // The add new list button
    this.newListBtn = this.getElement('.new-list-container');

    // The form of group
    this.groupForm = this.getElement('#new-group-form');

    // The input group
    this.groupInput = this.getElement('.group-input');

    // The form of list
    this.listForm = this.getElement('#new-list-form');

    // The input list
    this.listInput = this.getElement('.list-input');

    // The group name
    this.groupName = this.getElement('.group-name');
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  /**
   * Get group input
   */
  get _groupText() {
    return this.groupInput.value;
  }

  /**
   * Reset group input
   */
  _resetGroupInput() {
    this.groupInput.value = '';
  }

  /**
   * Get list input
   */
  get _listText() {
    return this.listInput.value;
  }

  /**
   * Reset list input
   */
  _resetListInput() {
    this.listInput.value = '';
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

  /**
   * Bind click add new list button
   */
  bindOpenAddList() {
    this.newListBtn.addEventListener('click', (e) => {
      //TODO: handle hide other input is opening soon

      this.listForm.classList.remove('visually-hidden');
      this.listInput.focus();
    });
  }

  /**
   * Bind submit event add new list
   * @param {callback} handler
   */
  bindAddNewList(handler) {
    this.listForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this._listText) {
        handler(this._listText);
        this._resetListInput();
        this.listForm.classList.add('visually-hidden');
      }
    });
  }
}
