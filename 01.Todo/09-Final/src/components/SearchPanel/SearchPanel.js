import React, { useState } from 'react';

const SearchPanel = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    setTimeout(() => onChange(value), 200);
  }

  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      className="form-control"
      onChange={handleChange}
    />
  );
};

export default SearchPanel;
