export default class GroupsController {
  constructor(groupsView, groupsModel) {
    this.groupsView = groupsView;
    this.groupsModel = groupsModel;

    // NOTE: 2.1 Run this method when init app to render groups
    this.onGroupsListChanged();
  }

  onGroupsListChanged() {
    // NOTE: 2.2
    this.getGroups();

    // Explicit this binding
    this.groupsView.bindOpenAddGroup();
    this.groupsView.bindAddNewGroup(this.handleAddNewGroup);
    this.groupsView.bindShowTasks(this.handleShowTasks);
  }

  onTaskListChange(tasksListData) {
    this.groupsView.displayTasksList(tasksListData);
  }

  // NOTE: 2.2
  /**
   * Call data and render to UI
   *  */
  async getGroups() {
    this.groupsModel.groupsListData = await this.groupsModel.getGroupsList();
    this.groupsView.displayGroupsList(this.groupsModel.groupsListData);
  }

  /**
   * Add new group database and bind data
   *
   * @param {string} groupName
   */
  handleAddNewGroup = (groupName) => {
    this.groupsModel.addNewGroup(groupName);
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
}
