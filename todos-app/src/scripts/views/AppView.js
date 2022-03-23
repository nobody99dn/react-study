// Components
import Sidebar from '../layouts/sidebar';

export default class AppView {
  constructor() {
    // The root element
    this.app = this.getElement('#root');
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  // TODO: This function render app
  // NOTE: 1.4 Flow render App
  displayApp() {
    // Render Sidebar
    this.getElement('#root').insertAdjacentHTML('afterbegin', Sidebar());
  }
}
