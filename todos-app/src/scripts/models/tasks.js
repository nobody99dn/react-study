import { URL_GROUP } from '../constants/apis';
import { get, post, update } from '../models/fetchApi';
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
    return await get(URL_GROUP);
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

  /**
   * Find task and return task object
   */
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
    return await get(URL_GROUP);
  }

  /**
   * Get data from input text
   */
  async getTasksInput() {
    this.tasksInputData = await get(URL_GROUP);
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
      const listContainTask = await get(`${URL_GROUP}/${listId}`);
      // listContainTask.tasks = newTask;
      listContainTask.tasks.push(newTask);
      await update(`${URL_GROUP}/${listContainTask.id}`, listContainTask);
    } else {
      const groupContainList = await get(`${URL_GROUP}/${groupId}`);
      const listIndex = groupContainList.lists.findIndex(
        (list) => list.id === listId
      );
      groupContainList.lists[listIndex].tasks.push(newTask);
      await update(`${URL_GROUP}/${groupContainList.id}`, groupContainList);
    }
  }

  /**
   * Get list data
   */
  getListById(listId = '') {
    let list = {};
    if (listId) {
      (list) => list.type === TODO_TYPE.LIST && list.id == listId;
    }
    return list;
  }
}
