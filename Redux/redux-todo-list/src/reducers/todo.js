import { ADD_TODO, REMOVE_TODO, EDIT_TODO_NAME } from '../actions'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.value];
    case REMOVE_TODO:
      return state.filter(task => task.id !== action.value);
    case EDIT_TODO_NAME:
      return state.map(task => (
        task.id === action.value.taskID ?
          { ...task, name: action.value.newName }
          :
          task
      ));
    default:
      return state;
  }
}

export default todoReducer;