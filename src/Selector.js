import React from 'react';

const Selector = ({ label, options, value, onChange }) => {
  return (
    <div class="ddmenu">
      <label>{label}: </label>
      <select value={value} onChange={onChange}>
        <option value="random">Random</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
