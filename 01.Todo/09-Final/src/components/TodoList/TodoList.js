import React from 'react';

import TodoListItem from 'components/TodoListItem';

const List = ({ 
  list,
  remove,
  toggleState,
  toggleImportance
}) => {
  const elements = list.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item list-group-item-action" key={id}>
        <TodoListItem
          {...itemProps}
          remove={() => remove({ id })}
          toggleState={() => toggleState({ id })}
          toggleImportance={() => toggleImportance({ id })}
        />
      </li>
    );
  });

  return (
    <ul className="list-group">{elements}</ul>
  );
};

export default List;
