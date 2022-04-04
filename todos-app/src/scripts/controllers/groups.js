import { FAIL_MESSAGES, SUCCESS_MESSAGE } from '../constants/messages';
import { isRequired } from '../helpers/validation';

export default class GroupsController {
  constructor(groupsView, groupsModel) {
    this.groupsView = groupsView;
    this.groupsModel = groupsModel;

    this.onGroupsListChanged();
  }

  onGroupsListChanged = () => {
    this.getGroups();

    // Explicit this binding
    this.groupsView.bindOpenAddGroup();
    this.groupsView.bindOpenAddList();
    this.groupsView.bindClickOutsideAction();
    this.groupsView.bindOpenActionMenu(
      this.handleDeleteGroup,
      this.handleDeleteList
    );
    this.groupsView.bindAddNewGroup(this.handleAddNewGroup);
    this.groupsView.bindAddNewList(this.handleAddNewList);
    this.groupsView.bindShowTasks(this.handleShowTasks);
  };

  // Render data to sidebar
  onTaskListChange(tasksListData) {
    this.groupsView.displayTasksList(tasksListData);
  }

  /**
   * Call data and render to UI
   **/
  getGroups = async () => {
    this.groupsModel.groupsListData = await this.groupsModel.getGroupsList();

    this.groupsView.displayGroupsList(
      this.groupsModel.groupsListData,
      this.handleRenameGroup,
      this.handleRenameList,
      this.handleAddNewListInsideGroup
    );
  };

  /**
   * Add new group database and bind data
   *
   * @param {string} groupName
   */
  handleAddNewGroup = async (groupName) => {
    try {
      if (!isRequired(groupName)) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      await this.groupsModel.addNewGroup(groupName);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.ADD_GROUP_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Execute rename group and re-render UI
   *
   * @param {string} groupId
   * @param {string} groupName
   */
  handleRenameGroup = async (groupId, groupName) => {
    try {
      if (!isRequired(groupName)) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      await this.groupsModel.renameGroup(groupId, groupName);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.REMOVE_GROUP_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Execute delete group from database by group id
   *
   * @param {string} groupId
   */
  handleDeleteGroup = async (groupId) => {
    try {
      await this.groupsModel.deleteGroup(groupId);
      await this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.REMOVE_GROUP_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Handle rename and change database
   *
   * @param {string} groupId
   * @param {string} listName
   * @param {string} groupId
   */
  handleRenameList = async (listId, listName, groupId) => {
    try {
      if (!isRequired(listName)) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      await this.groupsModel.renameList(listId, listName, groupId);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.RENAME_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Handle add new List outside action and bind to database
   *
   * @param {string} listName
   */
  handleAddNewList = async (listName) => {
    try {
      if (!isRequired(listName)) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      await this.groupsModel.addNewList(listName);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.ADD_LIST_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Handle get task list and render UI
   *
   * @param {string} listId
   * @param {string} groupId (optional)
   */
  handleShowTasks = async (listId, groupId) => {
    this.onTaskListChange(await this.groupsModel.getTasksById(listId, groupId));
  };

  /**
   * Handle action delete list and bind to database
   *
   * @param {string} listId
   * @param {string} groupId
   */
  handleDeleteList = async (listId, groupId) => {
    try {
      await this.groupsModel.deleteList(listId, groupId);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.REMOVE_LIST_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };

  /**
   * Handle add new list in group and bind to database
   *
   * @param {string} listName
   * @param {string} groupId
   */
  handleAddNewListInsideGroup = async (listName, groupId) => {
    try {
      if (!isRequired(listName)) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      await this.groupsModel.newListInGroup(listName, groupId);
      this.onGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGE.REMOVE_LIST_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };
}
