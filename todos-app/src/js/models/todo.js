export default class Todo {
  constructor(
    id,
    text,
    status = false,
    dueDate = Date.now(),
    isImportant = false,
    createdDate = Date.now(),
    modifiedDate = Date.now()
  ) {
    this.id = id
    this.text = text
    this.status = status
    this.dueDate = dueDate
    this.isImportant = isImportant
    this.createdDate = createdDate
    this.modifiedDate = modifiedDate
  }
}
