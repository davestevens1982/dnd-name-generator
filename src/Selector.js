import React from 'react';

function Selector({ label, options, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <select value={value} onChange={onChange}>
        <option value="">Select {label}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
