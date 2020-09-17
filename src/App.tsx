import React, { useState } from "react";
import "./App.css";

const ALL_FACTIONS = [
  "Arborec",
  "Barony of Letnev",
  "Clan of Saar",
  "Embers of Muaat",
  "Emirates of Hacan",
  "Federation of Sol",
  "Ghosts of Creuss",
  "L1Z1X Mindnet",
  "Mentak Coalition",
  "Naalu Collective",
  "Nekro Virus",
  "Sardakk N'orr",
  "Universities of Jol-Nar",
  "Winnu",
  "Xxcha Kingdom",
  "Yin Brotherhood",
  "Yssaril Tribes",
];

function pickFactionRandomly(factionsToRemove?: Array<string>): string {
  let factionsToPickFrom = ALL_FACTIONS;
  if (factionsToRemove) {
    factionsToPickFrom = ALL_FACTIONS.filter((faction) =>
      factionsToRemove?.find((element) => element === faction)
    );
  }

  const factionPicked =
    factionsToPickFrom[Math.floor(Math.random() * factionsToPickFrom.length)];
  console.log(factionPicked);

  return factionPicked;
}

function Picker() {
  const [factionPicked, setFactionPicked] = useState("");

  return (
    <div>
      <div>
        <p>Click the button below to pick a faction!</p>
        <button onClick={() => setFactionPicked(pickFactionRandomly())}>
          PICK A FACTION
        </button>
        <h2>{factionPicked}</h2>
      </div>
      <div>
        <hr></hr>
        <h2>All possible factions:</h2>
        {ALL_FACTIONS.map((faction, index) => (
          <p key={index}>{faction}</p>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Faction Picker</h1>
          <Picker></Picker>
        </div>
      </header>
    </div>
  );
}

export default App;
