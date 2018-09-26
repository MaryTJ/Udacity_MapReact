import React, {Component} from 'react';
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


//Component to display list of the selected venuews
class VenueSearch extends Component {

	constructor(props) {
    super(props);

     this.state = {
     		query = ''
     }
 }



render () {
	return (
		<div className="search-list">
              <input type="text" id="Coffee-search" placeholder="Search for coffee shops.."/>
              <button type="button">Search</button>
            </div>
		)
}


}

export default VenueSearch;

