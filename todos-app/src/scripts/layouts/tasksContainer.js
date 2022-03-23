const TasksContainer = (titleContent = '') => `
  <div class="task-container vh-100 p-5 d-flex flex-column">
    <div class="title row">  
      <div class="col-md-8">${titleContent}</div>
      <div class="col-md-4"></div>
    </div>
    <div class="task-date task-subtitle fs-6 fst-italic"></div>
    <div class="task-list"></div>
    <div class="form-input mt-auto"></div>
  </div>
`;

export default TasksContainer;
