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
    this.groupsView.bindOpenActionMenu();
    this.groupsView.bindClickOutsideAction();
    this.groupsView.bindAddNewGroup(this.handleAddNewGroup);
  }

  // NOTE: 2.2
  /**
   * Call data and render to UI
   **/
  async getGroups() {
    this.groupsModel.groupsListData = await this.groupsModel.getGroupsList();

    // NOTE: 1. Rename Flow
    this.groupsView.displayGroupsList(
      this.groupsModel.groupsListData,
      this.handleRenameGroup, // #3
      this.handleRenameList
    );
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
   * Execute rename group and re-render UI
   *
   * @param {object} updateGroup
   */
  handleRenameGroup = (updateGroup) => {
    this.groupsModel.renameGroup(updateGroup); // #4
    this.onGroupsListChanged();
  };

  handleRenameList = async (updateList, groupId) => {
    await this.groupsModel.renameList(updateList, groupId);
    this.onGroupsListChanged();
  };
}
