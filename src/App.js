import React, { useState } from 'react';
import NameGenerator from './NameGenerator';
import Selector from './Selector';
import races from './races';
import cultures from './cultures';
import maleFirstNames from './maleFirstNames';
import femaleFirstNames from './femaleFirstNames';
import lastNames from './lastNames';

function App() {
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [generateClicked, setGenerateClicked] = useState(false);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
  };

  const handleCultureChange = (event) => {
    setSelectedCulture(event.target.value);
  };

  const generateSingleName = () => {
    if (!selectedRace || !selectedCulture) {
      alert('Please select a race and culture.');
      return;
    }

    const firstName = selectedGender === 'male' ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)] : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${selectedRace} ${selectedCulture} ${firstName} ${lastName}`;
    setGeneratedNames([name]);
    setGenerateClicked(true);
  };

  const generateTenNames = () => {
    if (!selectedRace || !selectedCulture) {
      alert('Please select a race and culture.');
      return;
    }
  
    const tempNames = [];
    for (let i = 0; i < 10; i++) {
      const firstName = selectedGender === 'male' ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)] : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      tempNames.push(`${selectedRace} ${selectedCulture} ${firstName} ${lastName}`);
    }
    setGeneratedNames(tempNames);
    setGenerateClicked(true);
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
      <button onClick={generateSingleName}>Generate Name</button>
      <button onClick={generateTenNames}>Generate 10 Names</button>
      {generateClicked && <NameGenerator generatedNames={generatedNames} />}
    </div>
  );
}

export default App;
