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
  async getTasksList() {
    return await get(urlGroup);
  }

  /**
   * Get first list
   */
  getFirstList(todos) {
    let tasks = [];
    const TasksContainer = document.querySelector('.task-container');
    // Find first List in data
    for (const group of [...todos]) {
      if (group.type === TODO_TYPE.GROUP && 'lists' in group) {
        if (group.lists.length) {
          for (const list of group.lists) {
            if (list.tasks.length) {
              tasks = list.tasks;
              TasksContainer.setAttribute('data-list', list.id);
              TasksContainer.setAttribute('data-group', group.id);
              break;
            }
          }
        }
      } else if (group.type === TODO_TYPE.LIST && 'tasks' in group) {
        if (group.tasks.length) {
          tasks = group.tasks;
          TasksContainer.setAttribute('data-list', list.id);
          TasksContainer.setAttribute('data-group', '');
        }
      }
      if (tasks.length && listId) {
        return { tasks, listId };
      }
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
      console.log(listContainTask);
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
