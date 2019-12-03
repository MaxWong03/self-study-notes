import React, { useState } from 'react';

export default function Task({ taskName, onRemove }) {
  const [name, setName] = useState(taskName);
  return (
    <div>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
      <button onClick={onRemove}>Remove Todo</button>
    </div>
  )
}