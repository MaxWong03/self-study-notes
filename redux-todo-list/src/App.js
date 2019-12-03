import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './actions';
import Task from './components/Task';

function App() {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(addTodo())}>Add Todo</button>
      {
        todos.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            taskName={task.name + '-' + (index + 1)}
            onRemove={() => dispatch(removeTodo(task.id))}
          />
        ))
      }
    </div>
  );
}

export default App;
