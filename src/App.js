import React from 'react';
import './App.css';
import Welcome from './lenovoapp'; // ✅ import the Welcome component

function App() {
  return (
    <div>
      <h1>hi hello</h1>
      <h1>hii</h1>
      <Welcome />  {/* ✅ use the Welcome component here */}
    </div>
  );
}

export default App;
