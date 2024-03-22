import React from 'react';

const RaceSelector = ({ onChange }) => {
  const handleRaceChange = (e) => {
    const selectedRace = e.target.value;
    onChange(selectedRace);
  };

  return (
    <div>
      <label>
        Race:
        <select onChange={handleRaceChange}>
          {/* Add options for different races */}
          <option value="human">Human</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Dwarf</option>
          {/* Add more options as needed */}
        </select>
      </label>
    </div>
  );
};

export default RaceSelector;
