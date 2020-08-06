import React from 'react';

const TodoCounter = ({ active, done }) => (
  <div>
    {active} to do, {done} done
  </div>
);

export default TodoCounter;
