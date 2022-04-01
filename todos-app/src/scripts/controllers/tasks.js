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

    // Explicit this binding
    this.tasksView.bindAddNewTask(this.handleAddNewTask);
  }

  renderDefault() {
    this.tasksView.displayTasksList(
      this.tasksModel.getFirstList(this.tasksModel.todos)
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
    }
  }

  /**
   * Handle render task list data
   */
  onTasksListChanged(listId, groupId) {
    this.getTask(listId, groupId);
  }

  /**
   * Handle render task input data
   */
  onTasksInputChanged(tasksInputData) {
    this.getInput();
  }

  /**
   *  Call data and render task from list to UI
   */
  async getTask(listId, groupId) {
    this.tasksModel.tasksListData = await this.tasksModel.getTasksList(
      listId,
      groupId
    );
    this.tasksView.displayTasksList({
      tasks: [...this.tasksModel.tasksListData],
      listId: ''
    });
  }

  /**
   *  Call data and render task from input to UI
   */
  async getInput() {
    this.tasksModel.tasksInputData = await this.tasksModel.getTasksInput();
  }

  /**
   * Handle Add new task and bind data
   */
  handleAddNewTask = async (taskName, listId, groupId) => {
    await this.tasksModel.addNewTask(taskName, listId, groupId);
    this.onTasksListChanged(listId, groupId);
  };
}
