export default class TasksController {
  constructor(tasksView, tasksModel) {
    this.tasksView = tasksView;
    this.tasksModel = tasksModel;
    this.onTasksListChanged(this.tasksModel.tasksListData);
    this.onTasksInputChanged(this.tasksModel.tasksInputData);
  }

  onTasksListChanged(tasksListData) {
    this.getTask();
  }

  onTasksInputChanged(tasksInputData) {
    this.getInput();
  }

  async getTask() {
    this.tasksModel.tasksListData = await this.tasksModel.getTasksList();
    this.tasksView.displayTasksList(this.tasksModel.tasksListData);
  }

  async getInput() {
    this.tasksModel.tasksInputData = await this.tasksModel.getTasksInput();
    this.tasksView.displayTasksInput(this.tasksModel.tasksInputData);
  }
}
