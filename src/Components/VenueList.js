import React, {Component} from 'react';
import PropTypes from 'prop-types'



//Component to display list of the selected venuews
class VenueList extends Component {

	constructor(props) {
    super(props);

     this.state = {

     }
 }

static propTypes = {
		searched_markers: PropTypes.array,
	}

getMarkerInfo (marker) {
	
	this.setState({searched_markers:marker})
	console.log(this.props.state.searched_markers)
}

render () {
	return (
		<ul className = 'venue-list'>
		{this.props.coffee_shops.map(marker =>
			<li 
			key = {marker.id}
			onClick={e => {this.getMarkerInfo(marker)}}
			>
			{marker.name}
			</li>
			)
			}
		</ul>
		)
}


}

export default VenueList;

