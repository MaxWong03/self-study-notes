const uniqid = require('uniqid');

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO_NAME = 'EDIT_TODO_NAME';

export const addTodo = () => {
  return {
    type: ADD_TODO,
    value: {
      id: uniqid(),
      name: 'New Task',
      isCompleted: false
    }
  }
}

export const removeTodo = (taskID) => {
  return {
    type: REMOVE_TODO,
    value: taskID
  }
}

export const editTodoName = (taskID, newName) => {
  return {
    type: EDIT_TODO_NAME,
    value: {
      taskID,
      newName
    }
  }
}