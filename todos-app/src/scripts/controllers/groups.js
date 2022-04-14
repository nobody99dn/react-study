import { FAIL_MESSAGES, SUCCESS_MESSAGES } from '../constants/messages';

export default class GroupsController {
  constructor(groupsView, groupsModel) {
    this.groupsView = groupsView;
    this.groupsModel = groupsModel;

    this.callGroupsListChanged();
  }

  /**
   * Re-render Group if has change
   */
  callGroupsListChanged = () => {
    this.renderGroups();

    // Explicit this binding
    this.groupsView.bindOpenAddGroup();
    this.groupsView.bindOpenAddList();
    this.groupsView.bindClickOutside();
    this.groupsView.bindOpenActionMenu(
      this.handleDeleteGroup,
      this.handleDeleteList
    );
    this.groupsView.bindAddNewGroup(this.handleAddNewGroup);
    this.groupsView.bindAddNewList(this.handleAddNewList);
    this.groupsView.bindShowTasks(this.handleShowTasks);
  };

  // Render data to Tasks container
  callTaskListChanged = (tasksListData) => {
    this.groupsView.displayTasksList(tasksListData);
  };

  /**
   * Call data and render to UI
   **/
  renderGroups = async () => {
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
      if (!groupName) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      const newGroup = await this.groupsModel.addNewGroup(groupName);
      if (!newGroup) {
        throw FAIL_MESSAGES.ADD_GROUP_FAIL;
      }

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.ADD_GROUP_SUCCESS);
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
      if (!groupName) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      const updatedGroup = await this.groupsModel.renameGroup(
        groupId,
        groupName
      );

      if (!updatedGroup) {
        throw FAIL_MESSAGES.RENAME_FAIL;
      }

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.RENAME_SUCCESS);
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
      await this.callGroupsListChanged();

      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.REMOVE_GROUP_SUCCESS);
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
      if (!listName) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      const updatedList = await this.groupsModel.renameList(
        listId,
        listName,
        groupId
      );

      if (!updatedList) {
        throw FAIL_MESSAGES.RENAME_FAIL;
      }

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.RENAME_SUCCESS);
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
      if (!listName) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      const newList = await this.groupsModel.addNewList(listName);
      if (!newList) {
        throw FAIL_MESSAGES.ADD_LIST_FAIL;
      }

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.ADD_LIST_SUCCESS);
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
    this.callTaskListChanged(
      await this.groupsModel.getTasksById(listId, groupId)
    );
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

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.REMOVE_LIST_SUCCESS);
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
      if (!listName) {
        throw FAIL_MESSAGES.FIELD_EMPTY;
      }

      const newList = await this.groupsModel.newListInGroup(listName, groupId);

      if (!newList) {
        throw FAIL_MESSAGES.ADD_LIST_FAIL;
      }

      this.callGroupsListChanged();
      this.groupsView.showSuccessMessage(SUCCESS_MESSAGES.ADD_LIST_SUCCESS);
    } catch (error) {
      this.groupsView.showFailMessage(error);
    }
  };
}
