import React from 'react';

const InputNumber = ({ onChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  return (
    <div>
      <label>
        Number of Names: 
        <input type="number" onChange={handleChange} min="1" max="10" />
      </label>
    </div>
  );
};

export default InputNumber;
