import React from 'react';
import ReactDOM from 'react-dom';

import Headline from 'components/Headline/Headline';
import SearchPanel from 'components/SearchPanel/SearchPanel';
import TodoList from 'components/TodoList/TodoList';

const data = {
  list: [
    {
      label: 'First item',
      important: true,
      id: 1
    },
    {
      label: 'Last item',
      id: 2
    }
  ]
};

const App = () => {
  const { list } = data;

  return (
    <div className="app">
      <Headline />
      <SearchPanel />
      <TodoList list={list} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
