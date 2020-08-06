import React from 'react';

const ButtonPanel = () => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-primary active">
        <input type="radio" name="options" id="option1" defaultChecked /> All
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="options" id="option2" /> Active
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="options" id="option3" /> Done
      </label>
    </div>
  )
};

export default ButtonPanel;
