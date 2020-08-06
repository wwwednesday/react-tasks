import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

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

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
