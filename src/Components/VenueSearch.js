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


render () {
	return (
		<div className="search-list">
              <input 
              	type="text" 
              	id="Coffee-search" 
              	placeholder="Search for coffee shops.."
              	value = {this.state.query}
					onChange = {(event) => this.updateQuery(event.target.value)}
              />
              <button type="button">Search</button>
            </div>
		)
}


}

export default VenueSearch;

