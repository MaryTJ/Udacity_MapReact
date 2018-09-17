import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map.js'
import * as VenueAPI from './Components/VenueAPI.js'


class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    venues :[],
    coffee_shops:[]
  }
}
  
  componentDidMount() {
    this.getVenueID()
  }

  //Funtion to get coffee shops that are near Union Square, san francisco,CA
  getVenueID = () => {
          let v_ids = [] 
          let c_shops = []
          VenueAPI.getAll().then((venues) => {
            this.setState({venues})
            console.log(venues)          
            //venues.response.groups[0].items.forEach((item) => v_ids.push(item.venue.id));
            venues.response.groups[0].items.forEach((item) => c_shops.push(item.venue))
            this.setState({coffee_shops:c_shops})
        }
        )
          
  }

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
