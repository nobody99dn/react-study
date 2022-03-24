import taskLine from '../components/taskLine';
import taskInput from '../components/taskInput';

export default class TasksView {
  constructor() {
    this.tasksList = this.getElement('.task-list');
    this.tasksInput = this.getElement('.form-input');
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  displayTasksList(tasksListData) {
    this.tasksList.innerHTML = tasksListData
      .map((task) => taskLine(task.name, task.id))
      .join('');
  }

  displayTasksInput(tasksInputData) {
    this.tasksInput.innerHTML = taskInput();
  }
}
