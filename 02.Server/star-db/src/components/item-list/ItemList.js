import React from 'react';

import './ItemList.sass';

function ItemList() {
  return (
    <ul className="list-group item-list">
      <li className="list-group-item list-group-item-action active">Item 1</li>
      <li className="list-group-item list-group-item-action">Item 2</li>
      <li className="list-group-item list-group-item-action">Item 3</li>
    </ul>
  );
}

export default ItemList;
