import { urlGroup } from '../constants/apis';
import { get, post, remove, update } from '../helpers/fetchApi';
import { v4 as uuidv4 } from 'uuid';
import { TODO_TYPE } from '../constants/todo';

export default class GroupsModel {
  constructor() {
    this.groupsListData = [];
  }

  // Get Groups List data
  async getGroupsList() {
    return await get(urlGroup);
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

    return await post(urlGroup, newGroup);
  }

  /**
   * This using for update group to database
   *
   * @param {object} updateGroup
   * @returns object
   */
  async renameGroup(updateGroup) {
    return await update(`${urlGroup}/${updateGroup.id}`, updateGroup);
  }

  async deleteGroup(groupId) {
    return await remove(`${urlGroup}/${groupId}`);
  }
}
