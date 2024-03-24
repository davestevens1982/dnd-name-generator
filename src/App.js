import React, { useState } from 'react'; //import functions
import NameGenerator from './NameGenerator';
import Selector from './Selector';
import races from './races';
import cultures from './cultures';
import maleFirstNames from './maleFirstNames';
import femaleFirstNames from './femaleFirstNames';
import lastNames from './lastNames';
import './styles.css';

const genders = ['male', 'female']; //too small to need its own file

function App() {
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedCulture, setSelectedCulture] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [generateClicked, setGenerateClicked] = useState(false);

  const handleGenderChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue === 'random' ? randomOption(genders) : selectedValue);
  };
  
  const handleRaceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRace(selectedValue === 'random' ? randomOption(races) : selectedValue);
  };
  
  const handleCultureChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCulture(selectedValue === 'random' ? randomOption(cultures) : selectedValue);
  };
  
  const randomOption = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const generateSingleName = () => {
    const race = selectedRace || randomOption(races);
    const culture = selectedCulture || randomOption(cultures);

    const firstName = selectedGender === 'male' ? randomOption(maleFirstNames) : randomOption(femaleFirstNames);
    const lastName = randomOption(lastNames);
    const name = `${race} ${culture} ${firstName} ${lastName}`;
    
    setGeneratedNames([name]);
    setGenerateClicked(true);
  };

  const generateTenNames = () => {
    const tempNames = [];
    for (let i = 0; i < 10; i++) {
      const race = selectedRace || randomOption(races);
      const culture = selectedCulture || randomOption(cultures);
      
      const firstName = selectedGender === 'male' ? randomOption(maleFirstNames) : randomOption(femaleFirstNames);
      const lastName = randomOption(lastNames);
      tempNames.push(`${race} ${culture} ${firstName} ${lastName}`);
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
        options={[...races]} 
        value={selectedRace} 
        onChange={handleRaceChange} 
      />
      <Selector 
        label="Culture" 
        options={[...cultures]} 
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
