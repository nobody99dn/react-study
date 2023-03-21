// Components
import SideBar from '../layouts/sidebar';
import TasksContainer from '../layouts/tasksContainer';
import TaskInput from '../components/taskInput';

export default class AppView {
  constructor() {
    // The root element
    this.app = document.querySelector('#root');
  }

  /**
   * Render Layout to root
   */
  displayApp() {
    // Render Side Bar
    document.querySelector('#root').insertAdjacentHTML('afterbegin', SideBar());

    // Render Task Container
    document
      .querySelector('#root')
      .insertAdjacentHTML('beforeend', TasksContainer());
    document
      .querySelector('.form-input')
      .insertAdjacentHTML('afterbegin', TaskInput());
  }
}
