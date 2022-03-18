const TasksContainer = () => `
  <div class = "task-container vh100 p-5">
    <div class="task-title"><h1>My Todo list</h1></div>
    <div class="task-subtitle fs-6 fst-italic">18 March 2022</div>
    <div class=task-list>
      <div class="task-detail rounded bg-secondary text-white rounded p-3">
        <div class="form-check">
          <input class="task-checkbox form-check-input" type="checkbox" value="">
          <label class="form-check-label">
            <p>This is content</p>
          </label>
        </div>
      </div>
    </div>
`

export default TasksContainer
