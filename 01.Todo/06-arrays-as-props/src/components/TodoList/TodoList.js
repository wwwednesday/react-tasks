import React from 'react';

import TodoListItem from 'components/TodoListItem/TodoListItem';

const List = ({ list }) => {
  const elements = list.map(item => (
    <li key={item.id}>
      <TodoListItem {...item} />
    </li>
  ));

  return (
    <ul>{elements}</ul>
  );
};

export default List;
