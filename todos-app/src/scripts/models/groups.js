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
    this.groupsListData = (await get(urlGroup))[0] || [];
    return (this.groupsListData = await get(urlGroup));
  }

  /**
   * Add a new group to database
   * @param {string} groupName
   * @returns object
   */
  async addNewGroup(groupName) {
    const newGroup = {
      id: uuidv4(),
      type: TODO_TYPE.GROUP,
      name: groupName
    };

    // const group = await post(urlGroup, newGroup);
    // await this.groupsListData.push(group);
    return await post(urlGroup, newGroup);
  }

  /**
   * Get task list by group id and list id
   *
   * @param {string} listId
   * @param {string} groupId (optional)
   * @returns array
   */
  getTasksById(listId = '', groupId = '') {
    let group = {};
    let list = {};
    if (!groupId) {
      list = this.groupsListData.find(
        (list) => list.type === TODO_TYPE.LIST && list.id === listId
      );
    } else {
      group = this.groupsListData.find(
        (group) => group.type === TODO_TYPE.GROUP && group.id === groupId
      );

      list = group.lists.find(
        (list) => list.type === TODO_TYPE.LIST && list.id === listId
      );
    }

    return list.tasks;
  }
}
