import React from 'react';

const GenderSelector = ({ onChange }) => {
  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    onChange(selectedGender);
  };

  return (
    <div>
      <label>
        Gender:
        <select onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default GenderSelector;
