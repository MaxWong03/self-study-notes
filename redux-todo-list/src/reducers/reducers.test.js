import todoReducer from './todo';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO_NAME } from '../actions'

describe('todoReducer', () => {
  it('should return initial state = [] for unknown action', () => {
    const returnState = todoReducer(undefined, { type: 'Unknown' });
    const expectedState = [];
    expect(returnState.length).toEqual(0);
    expect(returnState).toEqual(expectedState);
  });
  
  it('should return current state for unknown action', () => {
    const currentState = [{id: 5, name: 'Task', isCompleted: false}];
    const returnState = todoReducer(currentState, { type: 'Unknown' });
    expect(returnState.length).toEqual(1);
    expect(returnState).toEqual(currentState);
  });
});


