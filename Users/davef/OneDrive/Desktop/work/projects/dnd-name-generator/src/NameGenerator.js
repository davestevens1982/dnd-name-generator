import React from 'react';
import maleFirstNames from './maleFirstNames';
import femaleFirstNames from './femaleFirstNames';
import lastNames from './lastNames';

function NameGenerator({ selectedGender, selectedRace, selectedCulture }) {
  let firstName;
  if (selectedGender === 'male') {
    firstName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
  } else {
    firstName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
  }
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return (
    <div>
      <h2>Generated Name:</h2>
      <p>{selectedRace} {selectedCulture} {firstName} {lastName}</p>
    </div>
  );
}

export default NameGenerator;
