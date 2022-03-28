import { urlGroup } from '../constants/apis';
import { get } from '../helpers/fetchApi';
import { TODO_TYPE } from '../constants/todo';

export default class TasksModel {
  constructor() {
    this.tasksListData = [{}, {}];
    this.tasksInputData = [];
    this.todos = [];
  }

  /**
   * Get first list
   */
  getFirstList(todos) {
    let tasks = [];

    // Find first List in data
    for (const group of [...todos]) {
      if (group.type === TODO_TYPE.GROUP && 'lists' in group) {
        if (group.lists.length) {
          for (const list of group.lists) {
            if (list.tasks.length) {
              tasks = list.tasks;
              break;
            }
          }
        }
      } else if (group.type === TODO_TYPE.LIST && 'tasks' in group) {
        if (group.tasks.length) {
          tasks = group.tasks;
        }
      }
      if (tasks.length) {
        return tasks;
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
}
