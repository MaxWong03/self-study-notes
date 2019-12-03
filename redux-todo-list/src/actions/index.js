const uniqid = require('uniqid');

export const addTodo = () => {
  return {
    type: 'ADD_TODO',
    value: {
      id: uniqid(),
      name: uniqid(),
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