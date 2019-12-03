import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(addTodo())}>Add Todo</button>
    </div>
  );
}

export default App;
