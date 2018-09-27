import React, {Component} from 'react';
import PropTypes from 'prop-types'

import escapeRegExp from 'escape-string-regexp'


//Component to display list of the selected venuews
class VenueSearch extends Component {

	constructor(props) {
    super(props);

     this.state = {
     		query : ''
     }
 }

updateQuery = (query) => {
		this.setState({ query:query.trim() })//.trim() })
		if (this.state.query){
			//this.props.searchShowBooks(query)
		} 
	}

selectedMarkerInfo (marker) {
	
	
	console.log(marker.name)
}



render () {
	
		
	return (
		<div>
		<div className="search-list">
              <input 
              	type="text" 
              	id="Coffee-search" 
              	placeholder="Search for coffee shops.."
              	
				onChange = {(event) => this.props.handleSearch(event.target.value)}
              />
              <button type="button">Search</button>
         </div>
         
         
         <ul className = 'venue-list'>
		{this.props.searched_markers.map(marker =>
			<li 
			key = {marker.id}
			onClick={e => {this.selectedMarkerInfo(marker)}}
			>
			<div key = {marker.id}>
			{marker.name}
			</div>
			</li>
			)
			}
		</ul>
         </div>


		)
}


}

export default VenueSearch;

