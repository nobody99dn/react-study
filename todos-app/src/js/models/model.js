// data, will change to json server
import dataService from '../helper/localStorage'

// Object
import Todo from './todo'

export default class Model {
  constructor() {
    this.todos = dataService.getItem('data')
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback
  }

  _commit(todos) {
    this.onTodoListChanged(todos)

    // binding data...
  }

  addTodo(todoContent, dueDate) {
    const todo = new Todo({
      id: this.todos.length + 1 || 1,
      text: todoContent,
      status: false
    })

    this.todos.push(todo)

    dataService.setItem('data', this.todos)

    this._commit(this.todos)
  }

  editTodo(id, todoContent, status, isImportant, dueDate) {}

  deleteTodo(id) {}
}
