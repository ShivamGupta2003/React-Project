// App.js
import React from 'react';
import Lottery from './Lottery';
import './App.css';
import { sum } from './helper';

function App() {
  const wincondition = (ticket) => {
    // Your win condition logic here
    // For example, if the sum of the ticket numbers is 15, it's a winning ticket
    return sum(ticket) === 15;
  };


  let wincondition2=(ticket)=>{
    return ticket[0]===0;

  };
  let wincondition3=(ticket)=>{
    return sum(ticket) === 20;

  };
  return (
    <div className="App">
      <Lottery n={3} wincondition={wincondition} />
      <Lottery n={4} wincondition={wincondition2} />
      <Lottery n={5} wincondition={wincondition3} />
    </div>
  );
}

export default App;
