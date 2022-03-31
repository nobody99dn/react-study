import taskLine from '../components/taskLine';
import taskInput from '../components/taskInput';

export default class TasksView {
  constructor() {
    this.tasksList = this.getElement('.task-list');
    this.tasksInput = this.getElement('.form-input');
    this.openTaskList = this.getElement('.list-group');
  }

  /**
   * Get element
   */
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  /**
   * Bind open task in list
   */
  bindOpenTaskList() {
    this.openTaskList.addEventListener('click', (e) => {
      this.tasksList.classList.target();
      this.tasksList.focus();
    });
  }

  /**
   * Show data with loop task list
   */
  displayTasksList(tasksListData) {
    this.tasksList.innerHTML = tasksListData
      .map((task) => taskLine(task.name, task.id))
      .join('');
  }

  /**
   * Show data from task input
   */
  displayTasksInput(tasksInputData) {
    this.tasksInput.innerHTML = taskInput();
  }
}
