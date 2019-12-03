import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './actions';

function App() {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(addTodo())}>Add Todo</button>
      {
        todos.map((task, index) => (
          <p key={index}>
            <input type="text" value={task.name + '-' + (index + 1)} />
            <button onClick={() => dispatch(removeTodo(task.id))}>Remove Todo</button>
          </p>
        ))
      }
    </div>
  );
}

export default App;
