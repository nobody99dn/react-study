import { Title } from '../components/title'

export default class View {
  constructor() {
    // The root element
    this.app = this.getElement('#root')

    // demo
    this.listTitle = Title('list-title', '', 'Empty List')
    this.app.insertAdjacentHTML('afterbegin', this.listTitle)

    // Display layout and data if available
  }

  getElement(selector) {
    return document.querySelector(selector)
  }

  get _listTitle() {
    return this.listTitle
  }

  _setListTitle(id, className, text) {
    this.listTitle = Title(id, className, text)
  }

  // Using this for render data
  displayApp(data) {}

  bindAddTodo(handler) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()

      if (this._listTitle) {
        handler(this._listTitle) //use callback to execute
        this._setListTitle
      }
    })
  }

  //...
}
