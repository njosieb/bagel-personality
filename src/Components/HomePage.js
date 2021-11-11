import React from 'react'
import bagels from '../bagels.jpg';
import '../App.css';
import LetsFindOutBtn from './LetsFindOutBtn';


function HomePage() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>What Is Your Bagel Personality?</h1>
        <img src={bagels} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <LetsFindOutBtn/>
        </a>
      </header>
    </div>
  );
}

export default HomePage;
