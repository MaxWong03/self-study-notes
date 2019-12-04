import { todos, visibilityFilter } from './index';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions'

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

describe('todoApp reducer', () => {
  describe('todos reducer', () => {
    it('should handle ADD_TODO action correctly', () => {
      const currentState = [];
      const addTodoObj1 = addTodo('New Task 1');
      let nextState = todos(currentState, addTodoObj1);
      expect(nextState.length).toEqual(1);
      expect(nextState).toContainObject({
        text: 'New Task 1',
        completed: false,
        id: 0
      })
      const addTodoObj2 = addTodo('New Task 2');
      nextState = todos(nextState, addTodoObj2);
      expect(nextState.length).toEqual(2);
      expect(nextState).toContainObject({
        text: 'New Task 2',
        completed: false,
        id: 1
      });
      const addTodoObj3 = addTodo('New Task 3');
      nextState = todos(nextState, addTodoObj3);
      expect(nextState.length).toEqual(3);
      expect(nextState).toContainObject({
        text: 'New Task 3',
        completed: false,
        id: 2
      });
    });

    it('should handle TOGGLE_TODO action correctly', () => {
      const currentState = [];
      const addTodoObj4 = addTodo('New Task 4');
      const addTodoObj5 = addTodo('New Task 5');
      let nextState = todos(currentState, addTodoObj4);
      nextState = todos(nextState, addTodoObj5);
      const toggleTodoObj = toggleTodo(4);
      nextState = todos(nextState, toggleTodoObj);
      expect(nextState).toContainObject({
        text: 'New Task 5',
        completed: true,
        id: 4
      });
      nextState = todos(nextState, toggleTodoObj);
      expect(nextState).toContainObject({
        text: 'New Task 5',
        completed: false,
        id: 4
      })
    });
  });

  describe('visibilityFilter reducer', () => {
    it('should handle SET_VISIBILITY_FILTER action correctly', () => {
      const currentState = VisibilityFilters.SHOW_ALL;
      const showAllObj = setVisibilityFilter(VisibilityFilters.SHOW_ALL);
      const showCompleteObj = setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
      const showActiveObj = setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
      let nextState = visibilityFilter(currentState, showAllObj);
      expect(nextState).toEqual(VisibilityFilters.SHOW_ALL);
      nextState = visibilityFilter(nextState, showCompleteObj);
      expect(nextState).toEqual(VisibilityFilters.SHOW_COMPLETED);
      nextState = visibilityFilter(nextState, showActiveObj);
      expect(nextState).toEqual(VisibilityFilters.SHOW_ACTIVE);
      nextState = visibilityFilter(nextState, showAllObj);
      expect(nextState).toEqual(VisibilityFilters.SHOW_ALL);
    });
  });
});