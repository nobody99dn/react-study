export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    // Explicit this binding
    this.model.bindTodoListChanged(this.onTodoListChanged)
    this.view.bindAddTodo(this.handleAddTodo)

    //Display initial app
    this.onTodoListChanged(this.model.todos)
  }

  onTodoListChanged = (data) => {
    this.view.displayApp(data)
  }

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText)
  }

  handleEditTodo = (id, todoText) => {}

  handleDeleteTodo = (id) => {}

  //...
}
