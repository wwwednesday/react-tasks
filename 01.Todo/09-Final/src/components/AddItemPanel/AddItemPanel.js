import React, { useState } from 'react';

const AddItemPanel = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item"
        value={value}
        className="form-control"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-info">Add</button>
    </form>
  )
};

export default AddItemPanel;
