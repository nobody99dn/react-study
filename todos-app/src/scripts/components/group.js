// Component
import List from './list';

// Constants
import { TODO_TYPE } from '../constants/todo';

/**
 * Group() returns a new element
 * based on the passed-in tag name
 */
const Group = (listData = []) => `
  ${(listData || [])
    .map((data, index) => {
      if (data.type === TODO_TYPE.GROUP) {
        // This will return block DOM contain list
        return `
        <div class="accordion-item border-0 mb-1">
          <p class="accordion-header" id="heading-${index}">
            <button
              id="${data.id}"
<<<<<<< HEAD
              class="group-button accordion-button collapsed py-1 rounded-1"
=======
              class="accordion-button collapsed py-1 rounded-1"
>>>>>>> ed8230ad0df6d48acec2555551a90109e305427c
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#group-${index}"
              aria-expanded="true"
              aria-controls="group-${index}"
            >
              <i class="bi bi-collection fs-4 px-2"></i>
              <form class="form-item visually-hidden">
                <input
                  type="text" 
                  value="${data.name}" 
                  class="group-name-input form-control"
                />
              </form>
              <span class="group-name" data-value="${data.name}">${
          data.name
        }</span>
          </button>
          </p>
          <ul class="dropdown-menu"></ul>
        <div
          id="group-${index}"
          class="accordion-collapse collapse"
          aria-labelled="heading-${index}"
        >
          <div class="accordion-body py-1">
      ${
        // This will return block DOM contain list
        `${(data.lists || []).map((list) => List(list)).join('')}` ||
        '<p class="empty-text m-0"><small>This group is empty.</small></p>'
      }
          </div>
        </div>
      </div>
      `;
      } else {
        // This will return block DOM contain list
        return List(data);
      }
    })
    .join('')}
`;

export default Group;
