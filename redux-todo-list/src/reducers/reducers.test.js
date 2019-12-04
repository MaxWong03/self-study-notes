import todoReducer from './todo';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO_NAME } from '../actions'

expect.extend({
  toContainObject(received, argument) {

    const pass = this.equals(received,
      expect.arrayContaining([
        expect.objectContaining(argument)
      ])
    )

    if (pass) {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
        pass: true
      }
    } else {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
        pass: false
      }
    }
  }
})

describe('todoReducer', () => {
  it('should return initial state = [] for unknown action', () => {
    const returnState = todoReducer(undefined, { type: 'Unknown' });
    const expectedState = [];
    expect(returnState.length).toEqual(0);
    expect(returnState).toEqual(expectedState);
  });

  it('should return current state for unknown action', () => {
    const currentState = [{ id: 5, name: 'Task', isCompleted: false }];
    const returnState = todoReducer(currentState, { type: 'Unknown' });
    expect(returnState.length).toEqual(1);
    expect(returnState).toEqual(currentState);
  });

  it('should handle ADD_TODO', () => {
    const currentState = [];
    const newTodo = { id: 1, name: 'testTask', isCompleted: false };
    const returnState = todoReducer(currentState, { type: ADD_TODO, value: newTodo });
    expect(returnState.length).toEqual(1);
    expect(returnState).toContain(newTodo);
  });

  it('should handle REMOVE_TODO', () => {
    const currentState = [
      { id: 1, name: 'testTask', isCompleted: false },
      { id: 2, name: 'testTask-2', isCompleted: false },
      { id: 3, name: 'testTask-3', isCompleted: false }
    ];
    const returnState = todoReducer(currentState, { type: REMOVE_TODO, value: 2 });
    expect(returnState.length).toEqual(2);
    expect(returnState).not.toContainObject({ id: 2, name: 'testTask-2', isCompleted: false });
  });

  it('should handle EDIT_TODO_NAME', () => {
    const currentState = [
      { id: 1, name: 'testTask', isCompleted: false },
      { id: 2, name: 'testTask-2', isCompleted: false },
      { id: 3, name: 'testTask-3', isCompleted: false }
    ];
    const editTodo = { taskID: 2, newName: 'New Task Name' };
    const returnState = todoReducer(currentState, { type: EDIT_TODO_NAME, value: editTodo });
    expect(returnState.length).toEqual(3);
    expect(returnState).not.toContainObject({ id: 2, name: 'testTask-2', isCompleted: false });
    expect(returnState).toContainObject({ id: 2, name: 'New Task Name', isCompleted: false });
  });
});


