// Components
import Sidebar from '../layouts/sidebar';
import TasksContainer from '../layouts/tasksContainer';
import TaskInput from '../components/taskInput';

export default class AppView {
  constructor() {
    // The root element
    this.app = this.getElement('#root');
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  // NOTE: 1.4 Flow render App
  /**
   * Render Layout to root
   */
  displayApp() {
    // Render Sidebar
    this.getElement('#root').insertAdjacentHTML('afterbegin', Sidebar());
    this.getElement('#root').insertAdjacentHTML('beforeend', TasksContainer());
    this.getElement('.form-input').insertAdjacentHTML(
      'afterbegin',
      TaskInput()
    );
  }
}
