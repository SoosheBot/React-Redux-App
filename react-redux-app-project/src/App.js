import React from 'react';
import IndianCities from './components/IndianCities';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cities of India</h1>
      <div className='city-list'>
            <IndianCities />
      </div>
    </div>
  );
}

export default App;
