import React from 'react';
import People from './People';
import Form from './Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <People />
       <Form />
      </header>
    </div>
  );
}

export default App;
