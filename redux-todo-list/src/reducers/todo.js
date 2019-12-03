const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.value];
    case 'REMOVE_TODO': 
      return state.filter(task => task.id !== action.value)
    default:
      return state;
  }
}

export default todoReducer;