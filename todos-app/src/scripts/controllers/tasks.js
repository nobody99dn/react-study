import List from '../components/list';
import { TODO_TYPE } from '../constants/todo';

export default class TasksController {
  constructor(tasksView, tasksModel) {
    this.tasksView = tasksView;
    this.tasksModel = tasksModel;
    // Init app to render list
    this.onTasksListChanged(this.tasksModel.tasksListData);
    this.onTasksInputChanged(this.tasksModel.tasksInputData);

    // Get todos data
    this.onTodosChanged();
  }

  onTodosChanged() {
    this.getTodos();
  }

  renderDefault() {
    this.tasksView.displayTasksList(
      this.tasksModel.getFirstList(this.tasksModel.todos)
    );
  }

  async renderTasksByListId(listId, groupId) {
    this.tasksView.displayTasksList(
      this.tasksModel.getTasksById(listId, groupId)
    );
  }

  /**
   * Call data and render task list to UI
   */
  async getTodos() {
    // Render default task list in first time
    if (!this.tasksModel.todos.length) {
      this.tasksModel.todos = await this.tasksModel.getTodosData();
      this.renderDefault();
    } else {
      this.tasksModel.todos = await this.tasksModel.getTodosData();
      // To do pass parameter
      this.renderTasksByListId();
    }
  }

  /**
   * Handle render task list data
   */
  onTasksListChanged(tasksListData) {
    this.getTask();
    this.tasksView.bindSubmitTaskForm();
  }

  /**
   * Handle render task input data and  render task to UI
   */
  onTasksInputChanged(tasksInputData) {
    this.tasksModel.tasksInputData = this.tasksModel.getTasksInput();
    this.tasksView.displayTasksInput(this.tasksModel.tasksInputData);
  }

  /**
   *  Call data and render task from list to UI
   */
  async getTask() {
    this.tasksModel.tasksListData = await this.tasksModel.getTasksList();
    this.tasksView.displayTasksList(this.tasksModel.tasksListData);
  }

  handleAddNewTask = async (taskName) => {
    await this.tasksModel.handleAddNewTask(taskName);
    this.onTasksListChanged();
  };
}
