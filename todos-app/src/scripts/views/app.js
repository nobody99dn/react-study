// Components
import SideBar from '../layouts/sidebar';
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

  /**
   * Render Layout to root
   */
  displayApp() {
    // Render Side Bar
    this.getElement('#root').insertAdjacentHTML('afterbegin', SideBar());

    // Render Task Container
    this.getElement('#root').insertAdjacentHTML('beforeend', TasksContainer());
    this.getElement('.form-input').insertAdjacentHTML(
      'afterbegin',
      TaskInput()
    );
  }
}
