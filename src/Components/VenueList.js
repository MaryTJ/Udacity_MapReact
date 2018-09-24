import React, {Component} from 'react';


//Component to display list of the selected venuews
class VenueList extends Component {

	constructor(props) {
    super(props);

     this.state = {

     }
 }

getMarkerInfo (marker) {
	console.log(marker.name)
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

