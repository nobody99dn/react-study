import Group from '../components/group';
import taskLine from '../components/taskLine';

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

    // The task container
    this.tasksList = this.getElement('.task-list');
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

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

  /**
   * Bind click list
   *
   * @param {callback} handler
   */
  bindShowTasks(handler) {
    this.groupsList.addEventListener('click', (e) => {
      const listElement = e.target.closest('.list-group-item');

      if (listElement) {
        const parentGroup = listElement.closest('.accordion-item');
        const listId = listElement.id || '';

        if (listElement && !parentGroup) {
          handler(listId);
        } else {
          const groupId = parentGroup.querySelector('.accordion-button').id;

          handler(listId, groupId);
        }
      }
    });
  }

  /**
   * Render task list
   *
   * @param {array} tasksListData
   */
  displayTasksList(tasksListData) {
    if (tasksListData.length) {
      this.tasksList.innerHTML = tasksListData
        .map((task) => taskLine(task.name, task.id))
        .join('');
    } else {
      // TODO: This should handle with message constant soon
      this.tasksList.innerHTML = 'This list is empty';
    }
  }
}
