import React from 'react';
import AutoComplete from './Autocomplete';

const Auto = () => {
  const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Mango',
    'Papaya',
    'Pineapple',
    'Blueberry'
  ];

  const handleSelect = (item) => {
    console.log('Selected:', item);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reusable Autocomplete Component</h2>
      <AutoComplete
        options={fruits}
        placeholder="Search fruits..."
        onSelect={handleSelect}
        debounceDelay={300}
      />
    </div>
  );
};

export default Auto;
