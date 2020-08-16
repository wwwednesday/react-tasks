import React from 'react';
import classnames from 'classnames';

import './TodoListItem.sass';

import { params } from 'consts';

const TodoListItem = ({
  label,
  remove,
  important,
  done,
  toggleImportance,
  toggleState
}) => {
  const style = {
    color: important ? '#007bff' : 'black',
  };

  const toggleStateParam = (paramId) => {
    if (paramId === params.important) toggleImportance();
    if (paramId === params.done) toggleState();
  };

  const toggleImportantValue = (e) => {
    e.stopPropagation();
    toggleStateParam(params.important);
  };

  const toggleDoneState = (e) => {
    e.stopPropagation();
    toggleStateParam(params.done);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    remove();
  }

  const classes = classnames(
    'd-flex justify-content-between align-items-center',
    'todo-list-item',
    {
      'is-important': important,
      'is-done': done
    }
  );

  const btnImportanceClasses = classnames(
    'btn btn-outline-primary',
    'todo-list-item__btn'
  );

  return (
    <span style={style} className={classes} onClick={toggleDoneState}>
      {label}
      <span className="btn-group">
        <button type="button" className="btn btn-outline-primary" onClick={handleRemove}>
          <i className="fa fa-trash"></i>
        </button>
        <button type="button" className={btnImportanceClasses} onClick={toggleImportantValue}>
          <i className="fa fa-exclamation"></i>
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;
