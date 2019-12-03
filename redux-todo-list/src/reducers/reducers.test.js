import todoReducer from './todo';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO_NAME } from '../actions'

describe('todoReducer', () => {
  it('should return initial state = [] for unknown action', () => {
    const returnState = todoReducer(undefined, { type: 'Unknown' });
    const expectedState = [];
    expect(returnState).toEqual(expectedState);
  })
});


