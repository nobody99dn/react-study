import { urlGroup } from '../constants/apis';
import { get, post, update } from '../helpers/fetchApi';
import { v4 as uuidv4 } from 'uuid';
import { TODO_TYPE } from '../constants/todo';

export default class TasksModel {
  constructor() {
    this.tasksListData = [{}, {}];
    this.tasksInputData = [];
    this.todos = [];
  }

  /**
   * Get Tasks List data
   */
  async getTasksList(listId, groupId) {
    console.log('listId', listId);
    console.log('groupId', groupId);
    return await get(urlGroup);
  }

  /**
   * Get first list
   */
  getFirstList(todos) {
    let tasks = [];
    let listId = '';
    const tasksContainer = document.querySelector('.task-container');
    // Find first List in data
    for (const group of [...todos]) {
      if (group.type === TODO_TYPE.GROUP && 'lists' in group) {
        if (group.lists.length) {
          for (const list of group.lists) {
            if (list.tasks.length) {
              tasks = list.tasks;
              listId = list.id;
              break;
            }
          }
        }
      } else if (group.type === TODO_TYPE.LIST && 'tasks' in group) {
        if (group.tasks.length) {
          tasks = group.tasks;
          listId = group.id;
        }
      }
      if (tasks.length && listId) {
        return { tasks, listId };
      }
    }
  }

  getTasksById(todos, listId, groupId) {
    if (groupId) {
      const group = todos.find((group) => group.id === groupId);
      const list = group.lists.find((list) => list.id === listId);
      return { tasks: list.tasks, listId };
    } else {
      const list = todos.find((list) => list.id === listId);
      return { tasks: list.tasks, listId };
    }
  }

  /**
   * Get data from list
   */
  async getTodosData() {
    return await get(urlGroup);
  }

  /**
   * Get data from input text
   */
  async getTasksInput() {
    this.tasksInputData = await get(urlGroup);
    return this.tasksInputData;
  }

  /**
   * Add new task to db
   */
  async addNewTask(taskName, listId, groupId) {
    const newTask = {
      id: uuidv4(),
      name: taskName,
      dueDate: '',
      dateCreated: '',
      dateModified: ''
    };
    if (!groupId) {
      const listContainTask = await get(`${urlGroup}/${listId}`);
      // listContainTask.tasks = newTask;
      listContainTask.tasks.push(newTask);
      await update(`${urlGroup}/${listContainTask.id}`, listContainTask);
    } else {
      const groupContainList = await get(`${urlGroup}/${groupId}`);
      const listIndex = groupContainList.lists.findIndex(
        (list) => list.id === listId
      );
      groupContainList.lists[listIndex].tasks.push(newTask);
      await update(`${urlGroup}/${groupContainList.id}`, groupContainList);
    }
  }

  getListById(listId = '') {
    let list = {};
    if (listId) {
      (list) => list.type === TODO_TYPE.LIST && list.id == listId;
    }
    return list;
  }
}
