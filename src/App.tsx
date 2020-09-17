import React, { useState } from "react";
import "./App.css";

function pickFactionRandomly(): string {
  const factions = [
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

  return factions[Math.floor(Math.random() * factions.length)];
}

function Picker() {
  const [factionPicked, setFactionPicked] = useState("");

  return (
    <div>
      <p>Click to pick a faction!</p>
      <button onClick={() => setFactionPicked(pickFactionRandomly())}>
        PICK A FACTION
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Faction Picker</h1>
          <h3>
            Work in Progress. Once completed, will provide an interface to pick
            factions for the board game Twilight Imperium 4th Edition.
          </h3>
          <Picker></Picker>
        </div>
      </header>
    </div>
  );
}

export default App;
