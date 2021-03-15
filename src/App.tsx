import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [teams, setTeam] = useState({
    0: [''],
    1: [''],
    2: [''],
    3: [''],
  });
  const [teamCounter, setTeamCounter] = useState(0);

  const [tier1, setTier1] = useState(['Pepe', 'Boroca', 'Flavio', 'Mako']);
  const [tier2, setTier2] = useState(['Issami', 'Timo', 'Ariel', 'Marcs']);
  const [tier3, setTier3] = useState(['Amigo do Gugs', 'Gun', 'Nene', 'Brayan']);
  const [tier4, setTier4] = useState(['Gugs', 'Bolt', 'Cassio', 'Nenho']);
  const [tier5, setTier5] = useState(['Daniel', 'Yuri', 'Iago', 'Paulo']);

  function getRandomTeam() {
    const player1 = tier1[Math.floor(Math.random() * tier1.length)];
    
    const player2 = tier2[Math.floor(Math.random() * tier2.length)];

    const player3 = tier3[Math.floor(Math.random() * tier3.length)];

    const player4 = tier4[Math.floor(Math.random() * tier4.length)];

    const player5 = tier5[Math.floor(Math.random() * tier5.length)];

    setTier1(tier1.filter(item => item !== player1));
    setTier2(tier2.filter(item => item !== player2));
    setTier3(tier3.filter(item => item !== player3));
    setTier4(tier4.filter(item => item !== player4));
    setTier5(tier5.filter(item => item !== player5));

    setTeamCounter(teamCounter + 1);

    const teamPlayers = [player1, player2, player3, player4, player5];
    
    setTeam((prevState) => ({...prevState, [teamCounter]: teamPlayers}))
  } 

  return (
    <div className="App">
      <button onClick={() => { 
        getRandomTeam();
       }}> Sortear time</button>    
       
       <div>
          <h3>Time 1</h3>
          {teams[0].length > 1 ? 
          teams[0].map((player, index) => (
            <p>Player {index + 1}: {player}</p>
          )) : 
          <> 
            <p>Player 1:</p>
            <p>Player 2:</p>
            <p>Player 3:</p>
            <p>Player 4:</p>
            <p>Player 5:</p>
          </>
          }
        </div>
        <div>
          <h3>Time 1</h3>
          {teams[1].length > 1 ? 
          teams[1].map((player, index) => (
            <p>Player {index + 1}: {player}</p>
          )) : 
          <> 
            <p>Player 1:</p>
            <p>Player 2:</p>
            <p>Player 3:</p>
            <p>Player 4:</p>
            <p>Player 5:</p>
          </>
          }
        </div>
        <div>
        <h3>Time 3</h3>
          {teams[2].length > 1 ? 
          teams[2].map((player, index) => (
            <p>Player {index + 1}: {player}</p>
          )) : 
          <> 
            <p>Player 1:</p>
            <p>Player 2:</p>
            <p>Player 3:</p>
            <p>Player 4:</p>
            <p>Player 5:</p>
          </>
          }
        </div>
        <div>
        <h3>Time 4</h3>
          {teams[3].length > 1 ? 
          teams[3].map((player, index) => (
            <p>Player {index + 1}: {player}</p>
          )) : 
          <> 
            <p>Player 1:</p>
            <p>Player 2:</p>
            <p>Player 3:</p>
            <p>Player 4:</p>
            <p>Player 5:</p>
          </>
          }
        </div>
    </div>
  );
}

export default App;
