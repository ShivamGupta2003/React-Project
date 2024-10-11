// Lottery.js
import React, { useState } from 'react';
import { genTicket, sum } from './helper';
import Ticket from './Ticket';

export default function Lottery({ n, wincondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = wincondition(ticket); // Call the wincondition function

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning ? 'Congratulations, you won!' : 'Better luck next time!'}</h3>
    </div>
  );
}
