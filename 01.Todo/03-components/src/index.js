import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h2>Todo List</h2>
    <input type="text" placeholder="Search" />
    <ul>
      <li>First item</li>
      <li>Last item</li>
    </ul>
  </div>
);

ReactDOM.render(
  el,
  document.getElementById('root')
);
