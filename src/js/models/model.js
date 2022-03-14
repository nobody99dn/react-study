// data
import dataService from '../helper/localStorage'

// Object
import Todo from './todo'

export default class Model {
  constructor() {
    this.todos = dataService.getItem('data')
  }

  addTodo(todoContent, dueDate) {
    const todo = new Todo({
      id: this.todos.length + 1 || 1,
      text: todoContent,
      status: false
    })

    this.todos.push(todo)

    dataService.setItem('data', this.todos)
  }

  editTodo(id, todoContent, status, isImportant, dueDate) {}

  deleteTodo(id) {}
}
