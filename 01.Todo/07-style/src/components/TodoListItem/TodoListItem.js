import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? '#007bff' : 'black',
  };

  const icon = important ? <i className="fa fa-star"></i> : <i className="fa fa-star-o"></i>;

  return (
    <span style={style} className="d-flex justify-content-between align-items-center">
      {label}
      <span className="btn-group">
        <button type="button" className="btn btn-outline-primary">
          <i className="fa fa-trash"></i>
        </button>
        <button type="button" className="btn btn-outline-primary">
          {icon}
        </button>
      </span>
    </span>
  );
}

export default TodoListItem;
