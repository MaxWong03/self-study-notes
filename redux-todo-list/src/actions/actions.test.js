import { ADD_TODO, REMOVE_TODO, EDIT_TODO_NAME, addTodo, removeTodo, editTodoName } from './index';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const action = addTodo();
    const expectedAction = {
      type: ADD_TODO,
      value: {
        id: action.value.id,
        name: 'New Task',
        isCompleted: false
      }
    };
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const action = removeTodo(5);
    const expectedAction = {
      type: REMOVE_TODO,
      value: 5
    };
    expect(action).toEqual(expectedAction);
  });
});