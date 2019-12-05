import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './index';

describe('todo actions', () => {
  describe('#addTodo', () => {
    it('should return object with type = ADD_TODO, id, text as key', () => {
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

    it('should return object with text value equal to the given param', () => {
      const todoObj = addTodo('New Task');
      expect(todoObj.text).toEqual('New Task');
    });
  });

  describe('#toogleTodo', () => {
    it('should return object with type = TOGGLE_TODO, id as key', () => {
      const todoObj = toggleTodo(1);
      const todoObjKeys = Object.keys(todoObj);
      expect(todoObj.type).toEqual(TOGGLE_TODO);
      expect(todoObjKeys.length).toEqual(2);
      expect(todoObjKeys).toContain('type');
      expect(todoObjKeys).toContain('id');
    });

    it('should return object with id value equal to the given param', () => {
      const todoObj1 = toggleTodo(1);
      const todoObj2 = toggleTodo(31);
      expect(todoObj1.id).toEqual(1);
      expect(todoObj2.id).toEqual(31);
    });
  });

  describe('#setVisibilityFilter', () => {
    it('should return object with type = SET_VISIBILITY_FILTER, filter as key', () => {
      const todoObj = setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
      const todoObjKeys = Object.keys(todoObj);
      expect(todoObj.type).toEqual(SET_VISIBILITY_FILTER);
      expect(todoObjKeys.length).toEqual(2);
      expect(todoObjKeys).toContain('type');
      expect(todoObjKeys).toContain('filter');
    });

    it('should return object with filter value equal to the given param', () => {
      const todoObjAll = setVisibilityFilter(VisibilityFilters.SHOW_ALL);
      const todoObjCompleted = setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
      const todoObjActive = setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
      expect(todoObjAll.filter).toEqual(VisibilityFilters.SHOW_ALL);
      expect(todoObjCompleted.filter).toEqual(VisibilityFilters.SHOW_COMPLETED);
      expect(todoObjActive.filter).toEqual(VisibilityFilters.SHOW_ACTIVE);
    });
  });
});