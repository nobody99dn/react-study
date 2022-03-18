const TasksContainer = (titleContent = '') => `
  <div class="task-container vh100 p-5">
    <div class="title row">  
      <h1 class="col-md-8">${titleContent}</h1>
      <div class="col-md-4"></div>
    </div>
    <div class="task-date task-subtitle fs-6 fst-italic"></div>
    <div class="task-list"></div>
    <div class="task-detail"></div>
  </div>
`;

export default TasksContainer;
