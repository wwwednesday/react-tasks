import React from 'react';
import ReactDOM from 'react-dom';

const Headline = () => <h2>Todo List</h2>;

const TodoList = () => (
  <ul>
    <li>First item</li>
    <li>Last item</li>
  </ul>
);

const SearchPanel = () => <input type="text" placeholder="Search" />;

const App = () => (
  <div className="app">
    <Headline />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
