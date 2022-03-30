import taskLine from '../components/taskLine';
import TaskInput from '../components/taskInput';
import bindShowTasks from '../views/groups';
import handleShowTasks from '../controllers/groups';

export default class TasksView {
  constructor() {
    this.tasksList = this.getElement('.task-list');
    this.formInput = this.getElement('.form-input');
    this.openTaskList = this.getElement('.list-group');
    this.taskForm = this.getElement('.task-input-form');
    this.taskGetValue = this.getElement('.task-input');
  }

  /**
   * Get element
   */
  getElement(selector) {
    return document.querySelector(selector);
  }

  /**
   * Get task input
   */
  get _taskInput() {
    return this.taskGetValue.value;
  }

  /**
   * Reset task input
   */
  _resetTaskInput() {
    this.taskGetValue.value = '';
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
   * Trigger event submit new task
   */
  bindAddNewTask(handler) {
    this.taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this._taskInput) {
        handler(this._taskInput);
        this._resetTaskInput();
      }
    });
  }
}
