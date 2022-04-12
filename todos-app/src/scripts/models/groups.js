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
   *
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
   * Add new list to database
   *
   * @param {string} listName
   * @returns object
   */
  async addNewList(listName) {
    const newList = {
      id: uuidv4(),
      type: TODO_TYPE.LIST,
      name: listName
    };

    return await post(urlGroup, newList);
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

    return list;
  }

  /**
   * This using for update group to database
   *
   * @param {object} updateGroup
   * @returns object
   */
  async renameGroup(groupId, groupName) {
    const updateGroup = await get(`${urlGroup}/${groupId}`);
    updateGroup.name = groupName;

    await update(`${urlGroup}/${updateGroup.id}`, updateGroup);
  }

  /**
   * This function using for update list to database
   *
   * @param {string} listId
   * @param {string} listName
   * @param {string} groupId
   */
  async renameList(listId, listName, groupId) {
    if (!groupId) {
      const list = await get(`${urlGroup}/${listId}`);
      list.name = listName;
      await update(`${urlGroup}/${list.id}`, list);
    } else {
      const groupContainList = await get(`${urlGroup}/${groupId}`);

      const listIndex = groupContainList.lists.findIndex(
        (list) => list.id === listId
      );

      groupContainList.lists[listIndex].name = listName;
      await update(`${urlGroup}/${groupContainList.id}`, groupContainList);
    }
  }

  /**
   * Delete group from database by group id
   *
   * @param {string} groupId
   */
  async deleteGroup(groupId) {
    await remove(`${urlGroup}/${groupId}`);
  }

  /**
   * Delete list from database
   *
   * @param {string} listId
   * @param {string} groupId
   */
  async deleteList(listId, groupId) {
    if (!groupId) {
      await remove(`${urlGroup}/${listId}`);
    } else {
      const groupContainList = await get(`${urlGroup}/${groupId}`);
      const listIndex = groupContainList.lists.findIndex(
        (list) => list.id === listId
      );

      groupContainList.lists.splice(listIndex, 1);

      await update(`${urlGroup}/${groupContainList.id}`, groupContainList);
    }
  }

  /**
   * Add new list in group and update group to database
   *
   * @param {string} listName
   * @param {sring} groupId
   */
  async newListInGroup(listName, groupId) {
    const newList = {
      id: uuidv4(),
      name: listName,
      type: TODO_TYPE.LIST,
      tasks: []
    };

    const groupContainList = await get(`${urlGroup}/${groupId}`);

    // Define lists if not exist
    if (!groupContainList.lists) {
      groupContainList.lists = [];
    }

    groupContainList.lists.push(newList);

    await update(`${urlGroup}/${groupContainList.id}`, groupContainList);
  }
}
