import React, { useState } from 'react';
import NameGenerator from './NameGenerator';
import Selector from './Selector';
import races from './races';
import cultures from './cultures';

function App() {
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
  };

  const handleCultureChange = (event) => {
    setSelectedCulture(event.target.value);
  };

  return (
    <div>
      <h1>D&D Character Name Generator</h1>
      <Selector 
        label="Gender" 
        options={['male', 'female']} 
        value={selectedGender} 
        onChange={handleGenderChange} 
      />
      <Selector 
        label="Race" 
        options={races} 
        value={selectedRace} 
        onChange={handleRaceChange} 
      />
      <Selector 
        label="Culture" 
        options={cultures} 
        value={selectedCulture} 
        onChange={handleCultureChange} 
      />
      <NameGenerator 
        selectedGender={selectedGender} 
        selectedRace={selectedRace} 
        selectedCulture={selectedCulture} 
      />
    </div>
  );
}

export default App;
