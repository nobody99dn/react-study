import { urlGroup } from '../constants/apis';
import { get } from '../helpers/fetchApi';

export default class GroupsModel {
  constructor() {
    this.groupsListData = [];
  }

  // Get Groups List data
  async getGroupsList() {
    this.groupsListData = await get(urlGroup);
    return this.groupsListData;
  }
}
