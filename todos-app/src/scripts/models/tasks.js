import { urlGroup } from '../constants/apis';
import { get, getTasks } from '../helpers/fetchApi';

export default class TasksModel {
  constructor() {
    this.tasksListData = [{}, {}];
    this.tasksInputData = [];
  }

  /**
   * Get data from list
   */
  async getTasksList() {
    this.tasksListData = await getTasks(
      urlGroup,
      'f5ab43e8-0867-4ea0-85cf-654c0a8fa753'
    );
    return this.tasksListData[0].tasks;
  }

  /**
   * Get data from input text
   */
  async getTasksInput() {
    this.tasksInputData = await get(urlGroup);
    return this.tasksInputData;
  }
}
