import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map.js'
import VenueList from './Components/VenueList.js'
import * as VenueAPI from './Components/VenueAPI.js'


class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    venues:[],
    coffee_shops:[],
    markers: [],
    cshop_details:[]
  }
}
  
  componentDidMount() {
    this.getVenues()
  }

  //Funtion to get coffee shops that are near Union Square, san francisco,CA
  getVenues = () => {
          let c_shops = []
          let details = []
          VenueAPI.getAll().then((venues) => {
            this.setState({venues})
            console.log(venues)          
            //venues.response.groups[0].items.forEach((item) => v_ids.push(item.venue.id));
            venues.response.groups[0].items.forEach((item) => c_shops.push(item.venue))
            this.setState({coffee_shops:c_shops})
            console.log(this.state.coffee_shops)

            
            //c_shops.forEach((shop) => details.push(shop))
            //this.setState({cshop_details:c_shops})
        }
        )
          /*
        let mark_array = []
        //console.log(c_shops)
        for(let i=0; i<c_shops.length; i++) {
          let lat = c_shops[i].location.lat
          let lng = c_shops[i].location.lng
          let position = {lat, lng }
          let title = c_shops[i].name

          let marker = new window.google.maps.Marker({position: position,title: title})
          mark_array.push(marker)

        }
        console.log(mark_array)
        this.setState({markers:mark_array})
        console.log(this.state.markers)
          */

          /*c_shops.forEach((shop) => 
              VenueAPI.getDetail(shop.id).then((cshop_details) => {
              this.setState({cshop_details})
            })

            
              )
            */
  }

  getVenueDetail = (venueID) => {
    console.log("venuedetails")
    console.log(venueID)
    VenueAPI.getDetail(venueID).then((cshop_details) => {
      this.setState({cshop_details})
    })
    console.log(this.state.cshop_details)
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
            <div>
              <VenueList
                coffee_shops = {this.state.coffee_shops}
              />
            </div>
          </section>
          <section className="Map-container">
            <Map
            coffee_shops = {this.state.coffee_shops}
            markers = {this.state.markers}
            getVenueDetail = {this.getVenueDetail}
            cshop_details = {this.state.cshop_details}
            />
          </section> 
        </main>
        <footer className="App-footer">Powered by Foursquare - All rights reserved
        </footer>
      </div>
    );
  }
}

export default App;
