// Component
import List from './list';

// Constants
import { TODO_TYPE } from '../constants/todo';

/**
 * Group() returns a new element
 * based on the passed-in tag name
 */
const Group = (listData = []) => `
  <div class="accordion" id="group-list">
    <div class="list-group">
  ${(listData || [])
    .map((data, index) => {
      if (data.type === TODO_TYPE.GROUP) {
        // TODO: This will return block DOM contain list
        return `
        <div class="accordion-item border-0 mb-1">
          <p class="accordion-header" id="heading-${index}">
            <button
              class="accordion-button collapsed py-1 rounded-1"
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
          </p>
        <div
          id="group-${index}"
          class="accordion-collapse collapse"
          aria-labelled="heading-${index}"
        >
          <div class="accordion-body py-1">
      ${
        // TODO: This will return block DOM contain list
        `${(data.lists || []).map((list) => List(list)).join('')}` ||
        '<p class="empty-text m-0"><small>This group is empty.</small></p>'
      }
          </div>
        </div>
      </div>
      `;
      } else {
        // TODO: This will return block DOM contain list
        return List(data);
      }
    })
    .join('')}
    </div>
  </div>
`;

export default Group;
