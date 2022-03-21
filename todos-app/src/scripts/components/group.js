/* eslint-disable indent */
// Component
import List from './list';

/**
 * Group() returns a new element
 * based on the passed-in tag name
 */
const Group = (listData = []) => `
  <div class="accordion" id="group-list">
    <div class="list-group">
  ${listData
    .map((data, index) => {
      if (data.type === 'group') {
        return `
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading-${index}">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#group-${index}"
              aria-expanded="true"
              aria-controls="group-${index}"
            >
              <i class="bi bi-collection fs-4 px-2"></i>
              <form>
                <input 
                  type="text" 
                  value="${data.name}" 
                  class="form-control visually-hidden" id="${data.id}">
              </form>
              <span data-value="${data.name}">${data.name}</span>
            </button>
          </h3>
        <div
          id="group-${index}"
          class="accordion-collapse collapse"
          aria-labelled="heading-${index}"
          data-bs-parent="#group-list"
        >
          <div class="accordion-body">
      ${
        data.lists.length
          ? `${data.lists.map((list) => List(list)).join('')}`
          : '<p class="empty-text m-0"><small>This group is empty.</small></p>'
      }
          </div>
        </div>
      </div>
      `;
      } else {
        // This will render list, will open soon
        return '';
      }
    })
    .join('')}
    </div>
  </div>
`;

export default Group;
