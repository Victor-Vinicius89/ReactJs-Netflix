import React from "react";
import "./styles/App.css";
import logo3 from "./logo3.png";
import Header from "./componentes/Header/index";
import NavBar from "./componentes/Bar/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo"></div>
        <NavBar />
      </header>

      <div className="Icon">
        <img src={logo3} alt="fireSpot" />
      </div>
    </div>
  );
}

export default App;
