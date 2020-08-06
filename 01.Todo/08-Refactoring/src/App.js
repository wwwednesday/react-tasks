import React from 'react';

import Headline from 'components/Headline';
import SearchPanel from 'components/SearchPanel';
import TodoList from 'components/TodoList';
import TodoCounter from 'components/TodoCounter';
import ButtonPanel from 'components/ButtonPanel';

import './App.sass';

const App = ({ data }) => {
  const { list } = data;

  return (
    <div className="app d-flex flex-column justify-content-center align-items-center">
      <div className="app__inner">
        <div className="app__head d-flex justify-content-between align-items-center">
          <Headline />
          <TodoCounter active={2} done={0} />
        </div>
        <div className="app__search-panel d-flex">
          <SearchPanel />
          <ButtonPanel />
        </div>
        <div className="app__list">
          <TodoList list={list} />
        </div>
      </div>
    </div>
  );
};

export default App;
