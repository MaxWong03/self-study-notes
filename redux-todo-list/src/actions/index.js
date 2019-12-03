const uniqid = require('uniqid');

export const addTodo = () => {
  return {
    type: 'ADD_TODO',
    value: {
      id: uniqid(),
      name: 'New Task',
      isCompleted: false
    }
  }
}

export const removeTodo = (taskID) => {
  return {
    type: 'REMOVE_TODO',
    value: taskID
  }
}