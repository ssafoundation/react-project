import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Player/Player';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div >
      <Header></Header>
      <Players></Players>
    
    </div>
  );
}

export default App;
