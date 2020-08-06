import React from 'react';
import ReactDOM from 'react-dom';

import Headline from 'components/Headline/Headline';
import SearchPanel from 'components/SearchPanel/SearchPanel';
import TodoList from 'components/TodoList/TodoList';

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
