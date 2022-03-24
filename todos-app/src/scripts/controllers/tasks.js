export default class TasksController {
  constructor(tasksView, tasksModel) {
    this.tasksView = tasksView;
    this.tasksModel = tasksModel;
    // Init app to render list
    this.onTasksListChanged(this.tasksModel.tasksListData);
    this.onTasksInputChanged(this.tasksModel.tasksInputData);
  }

  // Handle render task list data
  onTasksListChanged(tasksListData) {
    this.getTask();
  }

  // Handle render task input data
  onTasksInputChanged(tasksInputData) {
    this.getInput();
  }

  /**
   *  Call data and render task from list to UI
   */

  async getTask() {
    this.tasksModel.tasksListData = await this.tasksModel.getTasksList();
    this.tasksView.displayTasksList(this.tasksModel.tasksListData);
  }

  /**
   *  Call data and render task from input to UI
   */

  async getInput() {
    this.tasksModel.tasksInputData = await this.tasksModel.getTasksInput();
    this.tasksView.displayTasksInput(this.tasksModel.tasksInputData);
  }
}
