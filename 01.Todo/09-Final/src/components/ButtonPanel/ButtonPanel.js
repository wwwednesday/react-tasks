import React, { useState } from 'react';
import classnames from 'classnames';

const ButtonPanel = ({ filterTypes, handleSort }) => {
  const [sortBy, setSortBy] = useState(filterTypes.default.id);

  const handleBtnClick = key => {
    if (sortBy === key) return;

    setSortBy(key);
    handleSort(key);
  };

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      {
        Object.keys(filterTypes).map((key) => {
          const { id, label } = filterTypes[key];
          const isActive = key === sortBy;

          const params = {
            type: 'radio',
            name: label,
            id
          };
          if (key === sortBy) params.defaultChecked = true;

          const className = classnames([
            'btn btn-primary',
            { 'active': isActive }
          ]);
          
          return (
            <label className={className} key={key} onClick={() => handleBtnClick(key)}>
              <input {...params} /> {label}
            </label>
          )
        })
      }
    </div>
  ); 
};

export default ButtonPanel;
