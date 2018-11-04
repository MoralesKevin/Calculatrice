import React, { Component } from 'react';
import Calculatrice from "./components/Calculatrice";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ecran: 0,
    }
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Calculatrice</h1>
        </header>
        <div className="App">
          <Calculatrice />
        </div>
      </div>
    );
  }
}

export default App;
