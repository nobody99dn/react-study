// Constants
import { ACTION_ITEMS, NAME_ACTION } from '../constants/todo';
import { hideForm, hideMenuAction, showNameIsHiding } from '../constants/view';

// Components
import MenuAction from '../components/menuAction';
import Group from '../components/group';
import taskLine from '../components/taskLine';

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

    // The task container
    this.tasksList = this.getElement('.task-list');
  }

  getElement(selector) {
    return document.querySelector(selector);
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

  /*
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
