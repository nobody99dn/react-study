export default class GroupsController {
  constructor(groupsView, groupsModel) {
    this.groupsView = groupsView;
    this.groupsModel = groupsModel;

    // NOTE: 2.1 Run this method when init app to render groups
    this.onGroupsListChanged();
  }

  onGroupsListChanged = () => {
    // NOTE: 2.2
    this.getGroups();

    // Explicit this binding
    this.groupsView.bindOpenAddGroup();
    this.groupsView.bindOpenAddList();
    this.groupsView.bindClickOutsideAction();
    this.groupsView.bindOpenGroupActionMenu(this.handleDeleteGroup);
    this.groupsView.bindAddNewGroup(this.handleAddNewGroup);
    this.groupsView.bindAddNewList(this.handleAddNewList);
    this.groupsView.bindShowTasks(this.handleShowTasks);
  };

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
      this.handleRenameList
    );
  };

  /**
   * Add new group database and bind data
   *
   * @param {string} groupName
   */
  handleAddNewGroup = async (groupName) => {
    await this.groupsModel.addNewGroup(groupName);
    this.onGroupsListChanged();
  };

  /**
   * Execute rename group and re-render UI
   *
   * @param {object} updateGroup
   */
  handleRenameGroup = async (updateGroup) => {
    await this.groupsModel.renameGroup(updateGroup);
    this.onGroupsListChanged();
  };

  /**
   * Execute delete group from database by group id
   *
   * @param {string} groupId
   */
  handleDeleteGroup = async (groupId) => {
    await this.groupsModel.deleteGroup(groupId);
    this.onGroupsListChanged();
  };

  /**
   * Handle rename and change database
   *
   * @param {object} updateList
   * @param {string} groupId
   */
  handleRenameList = async (updateList, groupId) => {
    await this.groupsModel.renameList(updateList, groupId);
    this.onGroupsListChanged();
  };

  handleAddNewList = async (listName) => {
    await this.groupsModel.addNewList(listName);
    this.onGroupsListChanged();
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
   * Execute delete group from database by group id
   *
   * @param {string} groupId
   */
  handleDeleteGroup = async (groupId) => {
    await this.groupsModel.deleteGroup(groupId);
    this.onGroupsListChanged();
  };
}
