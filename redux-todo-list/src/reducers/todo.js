const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(action.value);
    default:
      return state;
  }
}

export default todoReducer;