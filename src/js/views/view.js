import { Button } from '../components/Button'

export default class View {
  constructor() {
    // The root element
    this.app = this.getElement('#root')

    this.submitButton = Button('submit-btn', 'btn-primary', 'Submit')

    this.app.insertAdjacentHTML('afterbegin', this.submitButton)
  }

  getElement(selector) {
    return document.querySelector(selector)
  }

  displayTodos() {}

  bindAddTodo() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
    })
  }

  //...
}
