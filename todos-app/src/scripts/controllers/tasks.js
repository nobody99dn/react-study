export default class TasksController {
  constructor(tasksView, tasksModel) {
    this.tasksView = tasksView;
    this.tasksModel = tasksModel;

    this.onTasksChange();
  }

  onTasksChange(listId = '', groupId = '') {
    this.getTodos(listId, groupId);

    // Explicit this binding
    this.tasksView.bindAddNewTask(this.handleAddNewTask);
  }

  async renderTasksByListId(listId, groupId) {
    this.tasksView.displayTasksList(
      this.tasksModel.getTasksById(listId, groupId)
    );
  }

  /**
   * Call data and render task list to UI
   */
  async getTodos(listId, groupId) {
    // Render default task list in first time
    if (!this.tasksModel.todos.length) {
      this.tasksModel.todos = await this.tasksModel.getTodosData();
      this.renderTasksDefault();
    } else {
      this.tasksModel.todos = await this.tasksModel.getTodosData();
      this.renderTasksById(listId, groupId);
    }
  }

  /**
   * Render tasks in first list
   */
  renderTasksDefault() {
    this.tasksView.displayTasksList(
      this.tasksModel.getFirstList(this.tasksModel.todos)
    );
  }

  /**
   * Render tasks by group id and list id to DOM
   *
   * @param {string} listId
   * @param {string} groupId
   */
  renderTasksById(listId, groupId) {
    // TODO: Handle re-render here
    this.tasksView.displayTasksList(
      this.tasksModel.getTasksById(this.tasksModel.todos, listId, groupId)
    );
  }

  /**
   * Handle Add new task and bind data
   */
  handleAddNewTask = async (taskName, listId, groupId) => {
    await this.tasksModel.addNewTask(taskName, listId, groupId);
    this.onTasksChange(listId, groupId);
  };
}
