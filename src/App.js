import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import Map from './Components/Map.js'
import VenueSearch from './Components/VenueSearch.js'
import * as VenueAPI from './Components/VenueAPI.js'




class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    venues:[], //venues array to save all the vcoffe shops searched 
    coffee_shops:[], //array for storing coffe shops
    searched_markers: [], //array to store filtered shops
    cshop_details:[], //array for storing coffee shop details
    clicked_marker:[] //array for storing when marker is clicked on list item
  }
}
  
  componentDidMount() {
    this.getVenues()
  }

  //Funtion to get coffee shops that are near Union Square, san francisco,CA
  getVenues = () => {
          let c_shops = []

          VenueAPI.getAll().then((venues) => {
            this.setState({venues})
            venues.response.groups[0].items.forEach((item) => c_shops.push(item.venue))
            this.setState({coffee_shops:c_shops})
        
        }
        ).catch((error)=>{
          alert('Error while fetching coffe shop data from FoursquareAPI')
        })
   
          this.setState({searched_markers:c_shops})
          
  }

//Function to retrieve details of coffe shops
  getVenueDetail = (venueID) => {
    
    VenueAPI.getDetail(venueID).then((cshop_details) => {
      this.setState({cshop_details})
    }).catch((error)=>{
          alert('Error while fetching coffe shop details from FoursquareAPI')
        })
    
  }

//function to search/filter coffe shops from the list
  handleSearch = (query) => {

    const match = new RegExp(escapeRegExp(query),'i')
    
    
    if (query !== '' || query!==null) {
      this.setState({searched_markers:this.state.coffee_shops.filter((shop) => match.test(shop.name))})
    }
    else
      this.setState({searched_markers : this.state.coffee_shops})
  }

  //function to set clicked_marker when an item is clicked from the list
  setClickedMarker = (marker) => {
      this.setState({ clicked_marker:marker },() => console.log(this.state.clicked_marker))
  }

  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Coffee Shops in SanFrancisco</h1>
        </header>
        <main id="Main-container">
          <section className="App-list" role="application" aria-label="Map of coffe shops in SF" tabIndex="-1">
            <div>
              <VenueSearch
                searched_markers = {this.state.searched_markers}
                handleSearch = {this.handleSearch}
                setClickedMarker = {this.setClickedMarker}
              />
            </div>
          </section>
            <section className="Map-container">
              <Map
              coffee_shops = {this.state.coffee_shops}
              searched_markers = {this.state.searched_markers}
              getVenueDetail = {this.getVenueDetail}
              cshop_details = {this.state.cshop_details}
              searched_markers = {this.state.searched_markers}
              clicked_marker = {this.state.clicked_marker}
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
