const taskLine = ($text = '', $radioId = '') => `
  <div class="taskDescription mt-3">
    <div class="task-line border border-1 p-3 rounded mb-1">
      <input class="form-check-input" type="radio" id="${$radioId}">
      <label class="form-check-label px-3">${$text}</label>
      <div class="task-icon float-end"><i class="bi bi-star"></i></div>
    </div>
  </div>
`;

export default taskLine;
