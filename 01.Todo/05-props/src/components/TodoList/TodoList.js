import React from 'react';

import TodoListItem from 'components/TodoListItem/TodoListItem';

const List = () => (
  <ul>
    <li><TodoListItem label="List item" important /></li>
    <li><TodoListItem label="List item" /></li>
  </ul>
);

export default List;
