import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, addTodo, toggleTodo, setVisibilityFilter } from './index';

describe('todo actions', () => {
  describe('#addTodo', () => {
    it('should return object with type, id, text as key', () => {
      const todoObj = addTodo('New Task');
      const todoObjKeys = Object.keys(todoObj);
      expect(todoObj.type).toEqual(ADD_TODO);
      expect(todoObjKeys.length).toEqual(3);
      expect(todoObjKeys).toContain('type');
      expect(todoObjKeys).toContain('id');
      expect(todoObjKeys).toContain('text');
    });

    it('should return 2 objects with unique id from 2 addTodo calls', () => {
      const todoObj1 = addTodo('New Task 1');
      const todoObj2 = addTodo('New Task 2');
      expect(todoObj1).not.toEqual(todoObj2);
      expect(todoObj1.id).not.toEqual(todoObj2.id);
    });

    it('should return object with text same with the given param', () => {
      const todoObj = addTodo('New Task');
      expect(todoObj.text).toEqual('New Task');
    });
  });
});