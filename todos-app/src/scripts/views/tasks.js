import taskLine from '../components/taskLine';
import taskInput from '../components/taskInput';

export default class TasksView {
  constructor() {
    this.tasksList = this.getElement('.task-list');
    this.tasksForm = this.getElement('.form-input');
    this.tasksInput = this.getElement('.task-input');
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
   * Bind submit task
   */
  bindSubmitTaskForm() {
    this.tasksForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(this.taskInput.value);
    });
  }

  /**
   * Show data with loop task list
   */
  displayTasksList(tasksListData) {
    this.tasksList.innerHTML = tasksListData.tasks
      .map((task) => taskLine(task.name, task.id))
      .join('');

    // Active list
    this.getElement(`li#${tasksListData.listId}`).classList.add('active');
  }

  /**
   * Show data from task input
   */
  displayTasksInput(tasksInputData) {
    this.tasksForm.innerHTML = taskInput();
  }
}
