import React from 'react';
import Dinner from './dinner.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Biryani" sweetName="Jaleebi" />
      <br />
      <Dinner dishName="Karahi" sweetName="Kheer" />
      <br />
      <Dinner dishName="Korma" sweetName="Daal" />
    </div>
  );
}

export default App;
