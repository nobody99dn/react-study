export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    //Display initial todos
    this.onTodoListChanged(this.model.todos)
  }

  onTodoListChanged = (todos) => {
    this.view.displayTodos(todos)
  }

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText)
    this.view.bindAddTodo(this.handleAddTodo)
  }

  handleEditTodo = (id, todoText) => {}

  handleDeleteTodo = (id) => {}

  //...
}
