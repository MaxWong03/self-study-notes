import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoName } from '../actions';

export default function Task({ id, taskName, onRemove }) {
  const [name, setName] = useState(taskName);
  const dispatch = useDispatch();
  const editTaskName = (event) => {
    const newName = event.target.value;
    setName(newName);
    dispatch(editTodoName(id, newName));
  };
  return (
    <div>
      <input type="text" value={name} onChange={editTaskName} />
      <button onClick={onRemove}>Remove Todo</button>
    </div>
  )
}