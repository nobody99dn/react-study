export default class GroupsController {
  constructor(groupsView, groupsModel) {
    this.groupsView = groupsView;
    this.groupsModel = groupsModel;

    // NOTE: 2.1 Run this method when init app to render groups
    this.onGroupsListChanged(this.groupsModel.groupsListData);
  }

  onGroupsListChanged(groupsListData) {
    // NOTE: 2.2
    this.getBook();
  }

  // TODO: Get groups data and render
  // NOTE: 2.2
  async getBook() {
    this.groupsModel.groupsListData = await this.groupsModel.getGroupsList();
    this.groupsView.displayGroupsList(this.groupsModel.groupsListData);
  }
}
