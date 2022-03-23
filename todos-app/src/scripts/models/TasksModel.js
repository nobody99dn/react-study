import { urlGroup } from '../constants/apis';
import { get } from '../helpers/fetchApi';

export default class TasksModel {
  constructor() {
    this.tasksListData = [{}, {}];
    this.tasksInputData = [];
  }

  async getTasksList() {
    this.tasksListData = await get(urlGroup);
    return this.tasksListData;
  }

  async getTasksInput() {
    this.tasksInputData = await get(urlGroup);
    return this.tasksInputData;
  }
}
