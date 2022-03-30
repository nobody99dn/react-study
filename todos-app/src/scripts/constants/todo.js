const TODO_TYPE = {
  GROUP: 'group',
  LIST: 'list',
  TASK: 'task'
};

const ACTION_ITEMS = [
  {
    content: 'rename',
    iconClass: 'bi bi-cursor-text',
    class: 'rename-option'
  },
  {
    content: 'delete',
    iconClass: 'bi bi-trash3',
    class: 'delete-option'
  }
];

const NAME_ACTION = {
  RENAME: 'rename',
  DELETE: 'delete'
};

export { TODO_TYPE, ACTION_ITEMS, NAME_ACTION };
