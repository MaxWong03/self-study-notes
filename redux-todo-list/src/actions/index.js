export const addTodo = () => {
  return {
    type: 'ADD_TODO',
    value: {
      name: 'New Task',
      isCompleted: false
    }
  }
}