import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import Map from './Components/Map.js'
import VenueList from './Components/VenueList.js'
import VenueSearch from './Components/VenueSearch.js'
import * as VenueAPI from './Components/VenueAPI.js'




class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    venues:[],
    coffee_shops:[],
    searched_markers: [],
    cshop_details:[],
    clicked_marker:[]
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
            venues.response.groups[0].items.forEach((item) => c_shops.push(item.venue))
            this.setState({coffee_shops:c_shops})
        
        }
        ).catch((error)=>{
          alert('Error while fetching coffe shop data from FoursquareAPI')
        })
   
          this.setState({searched_markers:c_shops})
          
  }

  getVenueDetail = (venueID) => {
    console.log("venuedetails")
    console.log(venueID)
    VenueAPI.getDetail(venueID).then((cshop_details) => {
      this.setState({cshop_details})
    }).catch((error)=>{
          alert('Error while fetching coffe shop details from FoursquareAPI')
        })
    console.log(this.state.cshop_details)
  }

  handleSearch = (query) => {
    console.log(query)
    let filterresult = []
    const match = new RegExp(escapeRegExp(query),'i')
    console.log('coffee')
    console.log(this.state.coffee_shops)
    
    if (query !== '' || query!==null) {
      this.setState({searched_markers:this.state.coffee_shops.filter((shop) => match.test(shop.name))})
      
      //console.log(this.state.searched_markers)
    }
    else
      this.setState({searched_markers : this.state.coffee_shops})
  
  }

  setClickedMarker = (marker) => {
    
    this.setState({ clicked_marker:marker },() => console.log(this.state.clicked_marker))
    //console.log("clicked_marker")
    //console.log(this.state.clicked_marker)
  }

  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Coffee Shops in SanFrancisco</h1>
        </header>
        <main id="Main-container">
          <section className="App-list">
            <div>
              <VenueSearch
                searched_markers = {this.state.searched_markers}
                handleSearch = {this.handleSearch}
                clicked_marker = {this.state.clicked_marker}
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
