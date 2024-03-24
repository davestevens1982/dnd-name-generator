import React from 'react';

const NameGenerator = ({ generatedNames }) => {
  return (
    <div>
      <h2>Names:</h2>
      <ul>
        {generatedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameGenerator;