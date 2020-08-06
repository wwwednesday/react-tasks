import React from 'react';

import TodoListItem from 'components/TodoListItem/TodoListItem';

const List = ({ list }) => {
  const elements = list.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item list-group-item-action" key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group">{elements}</ul>
  );
};

export default List;
