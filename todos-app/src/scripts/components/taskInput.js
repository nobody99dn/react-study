const taskInput = () => `
<form class="task-form" onsubmit="submitTask()">
  <div class="input-group rounded border mt-3">
      <i class="add-icon bi bi-plus-lg p-2"></i>
      <input type="text" class="form-control p-2" placeholder="Add a task">
      <i class="calendar-icon bi bi-calendar-day p-2"></i>
  </div>
</form>
`;

export default taskInput;
