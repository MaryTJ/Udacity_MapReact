import React, {Component} from 'react';


//Component to display list of the selected venues
//call handleSearch onchange of input text for filtering list
//call setClickedMarker to set the state of clicked marker 
class VenueSearch extends Component {

	constructor(props) {
    super(props);

     this.state = {
     		query : ''
     }
 }

render () {
	
		
	return (
		<div>
		<div className="search-list">
              <input aria-label = "input text for searching coffe shops"
              	tabIndex="0"
              	type="text" 
              	id="Coffee-search" 
              	placeholder="Search for coffee shops.."
              	
				onChange = {(event) => this.props.handleSearch(event.target.value)}
              />
              
         </div>
         
         
         <ul className = 'venue-list'>
		{this.props.searched_markers.map(marker =>
			<li role = "list"
			tabIndex = "0"
			key = {marker.id}
			onClick={(event) => {this.props.setClickedMarker(marker)}}
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

