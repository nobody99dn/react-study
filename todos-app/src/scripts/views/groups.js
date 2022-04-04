// Constants
import { GROUP_ACTION, LIST_ACTION, NAME_ACTION } from '../constants/todo';
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
  displayGroupsList(
    groupsListData,
    renameGroupHandler,
    renameListHandler,
    newListInGroupHandler
  ) {
    this.groupsList.innerHTML = Group(groupsListData);

    [...this.groupsList.querySelectorAll('.group-button')].forEach((button) => {
      // Group
      const groupId = button.id;
      const form = button.querySelector('.form-item');

      // List in group
      const newListInGroupForm = button
        .closest('.accordion-item')
        .querySelector('.new-list-form-inside');
      this.bindSubmitRenameGroup(form, groupId, renameGroupHandler);
      this.bindSubmitNewListInGroup(
        newListInGroupForm,
        groupId,
        newListInGroupHandler
      );
    });

    [...this.groupsList.querySelectorAll('.list-group-item')].forEach(
      (list) => {
        const listId = list.id;
        const form = list.querySelector('.form-item');

        this.bindSubmitRenameList(form, listId, renameListHandler);
      }
    );
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

      handler(updateGroup);
    });
  }

  /**
   * Trigger submit rename action
   *
   * @param {object} form
   * @param {string} listId
   * @param {callback} handler
   */
  bindSubmitRenameList(form, listId, handler) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Parent group
      const parent = form.closest('.accordion-item');
      let groupId = '';

      // Get group id if exist
      if (parent) {
        groupId = parent.querySelector('.group-button').id;
      }

      const listName = e.target.querySelector('.list-name-input').value;

      const updateList = {
        id: listId,
        name: listName
      };

      handler(updateList, groupId);
    });
  }

  /**
   * Trigger open form new group
   */
  bindOpenAddGroup() {
    this.newGroupBtn.addEventListener('click', (e) => {
      hideForm();

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
      hideForm();

      this.listForm.classList.remove('visually-hidden');
      this.listInput.focus();
    });
  }

  /**
   * This using for trigger right click into group item
   */
  bindOpenActionMenu(deleteGroupHandler, deleteListHandler) {
    this.groupsList.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      hideForm();
      showNameIsHiding();

      if (e.target.classList.contains('group-button')) {
        // Group ID
        const groupId = e.target.id;

        // Query parent both of ul and button then query to ul
        const menu =
          e.target.closest('.accordion-item').querySelector('.dropdown-menu') ||
          [];

        // Render Action Menu to Group
        menu.innerHTML = MenuAction(GROUP_ACTION);

        // Display Action menu
        hideMenuAction();
        menu.classList.add('d-block');

        this.bindClickGroupActionMenu(menu, groupId, deleteGroupHandler);
      } else if (e.target.closest('.list-group-item')) {
        // List id
        const listId = e.target.closest('.list-group-item').id;

        // Get group id if exist
        const parent = e.target.closest('.accordion-item');
        let groupId = '';
        if (parent) {
          groupId = parent.querySelector('.group-button').id;
        }

        // Query to ul
        const menu = e.target
          .closest('.list-group-item')
          .parentNode.querySelector('.dropdown-menu');

        // Render menu action item for list
        menu.innerHTML = MenuAction(LIST_ACTION);

        // Display Action menu
        hideMenuAction();
        menu.classList.add('d-block');
        this.bindClickListActionMenu(menu, listId, groupId, deleteListHandler);
      }
    });
  }

  /**
   * * Trigger click event in action menu of group
   *
   * @param {object} menu
   * @param {string} id
   * @param {callback} deleteGroupHandler
   */
  bindClickGroupActionMenu(menu, id, deleteGroupHandler) {
    [...menu.querySelectorAll('.dropdown-item')].forEach((item) => {
      item.addEventListener('click', (e) => {
        const buttonGroup = document.getElementById(id);
        if (e.target.dataset.value === NAME_ACTION.RENAME) {
          hideMenuAction();

          // Set value input = name of group
          buttonGroup.querySelector('.group-name-input').value =
            buttonGroup.querySelector('.group-name').dataset.value;

          // Show form and focus input
          buttonGroup.querySelector('form').classList.remove('visually-hidden');
          buttonGroup.querySelector('.group-name-input').focus();

          // Hide name
          buttonGroup
            .querySelector('.group-name')
            .classList.add('visually-hidden');
        } else if (e.target.dataset.value === NAME_ACTION.DELETE) {
          deleteGroupHandler(id);
        } else if (e.target.dataset.value === NAME_ACTION.NEW_LIST) {
          hideMenuAction();

          // Check open group
          if (buttonGroup.classList.contains('collapsed')) {
            buttonGroup.click();
          }

          // Show form and focus
          const parent = buttonGroup.closest('.accordion-item');

          parent
            .querySelector('.new-list-form-inside')
            .classList.remove('visually-hidden');

          parent.querySelector('.list-name-input-inside ').focus();
        }
      });
    });
  }

  /**
   * Bind submit event add new list
   *
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

  /**
   * Trigger click event on list
   *
   * @param {callback} handler
   */
  bindShowTasks(handler) {
    this.groupsList.addEventListener('click', (e) => {
      const listElement = e.target.closest('.list-group-item');
      const TasksContainer = document.querySelector('.task-container');
      if (listElement) {
        // Remove active class current list and active selected list
        const currentList = document.querySelector('.list-group-item.active');
        if (currentList) {
          currentList.classList.remove('active');
        }
        listElement.classList.add('active');

        const parentGroup = listElement.closest('.accordion-item');
        const listId = listElement.id || '';
        if (listElement && !parentGroup) {
          handler(listId);
          TasksContainer.setAttribute('data-list', listId);
          TasksContainer.setAttribute('data-group', '');
        } else {
          const groupId = parentGroup.querySelector('.accordion-button').id;
          handler(listId, groupId);
          TasksContainer.setAttribute('data-list', listId);
          TasksContainer.setAttribute('data-group', groupId);
        }
      }
    });
  }

  /**
   * Trigger click event in action menu of list
   *
   * @param {object} menu
   * @param {string} id
   */
  bindClickListActionMenu(menu, listId, groupId, deleteListHandler) {
    [...menu.querySelectorAll('.dropdown-item')].forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.dataset.value === NAME_ACTION.RENAME) {
          const listContainer = document.getElementById(listId);

          hideMenuAction();

          // Set value input = name of group
          listContainer.querySelector('.list-name-input').value =
            listContainer.dataset.value;

          // show form and focus input
          listContainer
            .querySelector('form')
            .classList.remove('visually-hidden');
          listContainer.querySelector('.list-name-input').focus();

          // hide name
          listContainer
            .querySelector('.list-name')
            .classList.add('visually-hidden');
        } else if (e.target.dataset.value === NAME_ACTION.DELETE) {
          deleteListHandler(listId, groupId);
        }
      });
    });
  }

  /**
   * Render task list
   *
   * @param {array} tasksListData
   */
  displayTasksList(tasksListData = []) {
    if (tasksListData.length) {
      this.tasksList.innerHTML = tasksListData
        .map((task) => taskLine(task.name, task.id))
        .join('');
    } else {
      // TODO: This should handle with message constant soon
      this.tasksList.innerHTML = 'This list is empty';
    }
  }

  /**
   * Binding click outside action
   */
  bindClickOutsideAction() {
    document.querySelector('body').addEventListener('click', (e) => {
      !e.target.closest('.dropdown-menu') && hideMenuAction();

      if (
        !e.target.closest(
          '.form-item, .rename-option, .group-btn, .new-list-container, .new-list-option'
        )
      ) {
        hideForm();
        showNameIsHiding();
      }
    });
  }

  /**
   * Trigger submit event to new list in group
   *
   * @param {object} form
   * @param {string} groupId
   * @param {callback} newListInGroupHandler
   */
  bindSubmitNewListInGroup(form, groupId, newListInGroupHandler) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const listName = e.target.querySelector('.list-name-input-inside').value;
      newListInGroupHandler(listName, groupId);
    });
  }
}
