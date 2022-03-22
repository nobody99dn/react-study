import { urlGroup } from '../constants/apis';
import { get, post } from '../helpers/fetchApi';
import { v4 as uuidv4 } from 'uuid';
import { TODO_TYPE } from '../constants/todo';

export default class GroupsModel {
  constructor() {
    this.groupsListData = [];
  }

  // Get Groups List data
  async getGroupsList() {
    this.groupsListData = (await get(urlGroup)) || [];
    return this.groupsListData;
  }

  async addNewGroup(groupName) {
    const newGroup = {
      id: uuidv4(),
      type: TODO_TYPE.GROUP,
      name: groupName
    };

    const group = await post(urlGroup, newGroup);
    this.groupsListData.push(group);
    return group;
  }
}
