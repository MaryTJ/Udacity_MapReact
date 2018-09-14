import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Coffee Shops in SanFrancisco</h1>
        </header>
        <main id="Main-container">
          <section className="App-list">
            <div className="search-list">
              <input type="text" id="Coffee-search" placeholder="Search for coffee shops.."/>
              <button type="button">Search</button>
            </div>
          </section>
          <section className="Map-container">
            <Map/>
          </section> 
        </main>
        <footer className="App-footer">All rights reserved
        </footer>
      </div>
    );
  }
}

export default App;
