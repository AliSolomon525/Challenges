import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MortyCards from "./MortyCards";

function App() {
  const characterURL = "https://rickandmortyapi.com/api/character";
  return (
    <div>
      <MortyCards url={characterURL} />
    </div>
  );
}

export default App;
