import { AnyAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  color?: 'Red' | 'Yellow' | 'Green' | 'Blue' | 'Orange' | 'Purple';
}

const initialState: Todo[] = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'Purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'Blue' }
];

function nextTodoId(todos: Todo[]) {
  const maxId = todos.reduce(
    (maxId, todo: Todo) => Math.max(todo.id, maxId),
    -1
  );
  return maxId + 1;
}

export default function todosReducer(state = initialState, action: AnyAction) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'todos/todoAdded': {
      // We need to return a new state object
      return [
        // with all of the old todos
        ...state,
        // and the new todo object
        {
          // Use an auto-incrementing numeric ID for this example
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ];
    }

    case 'todos/todoToggled': {
      return state.map((todo: Todo) => {
        // If this isn't the todo item we're looking for, leave it alone
        if (todo.id !== action.payload) {
          return todo;
        }

        // We've found the todo that has to change. Return a copy:
        return {
          ...todo,
          // Flip the completed flag
          completed: !todo.completed
        };
      });
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
