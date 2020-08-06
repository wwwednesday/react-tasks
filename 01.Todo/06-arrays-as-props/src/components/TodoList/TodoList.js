import React from 'react';

import TodoListItem from 'components/TodoListItem/TodoListItem';

const List = ({ list }) => {
  const elements = list.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul>{elements}</ul>
  );
};

export default List;
