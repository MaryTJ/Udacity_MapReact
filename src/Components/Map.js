import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from'react-google-maps'

//Displaying mu;ltiple markers https://stackoverflow.com/questions/43859785/how-do-i-display-multiple-markers-with-react-google-maps
//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
// For help with pixelOffset https://github.com/tomchentw/react-google-maps/issues/333
//pass markers array in return and then position of each marker
class Map extends Component {

constructor(props) {
    super(props);

     this.state = {
	    selectedMarker:[], //marker selected on click
    	position : null, //position for infowindow
    	selectedMarkerDetail: null //details of clicked marker
    
	}

}

	//call info window when marker is clicked on the list
	 componentDidUpdate(prevProps){
	
	    if (this.props.clicked_marker!==prevProps.clicked_marker){
        	this.getInfoWindow(this.props.clicked_marker)
        	this.setState({clicked_marker:[]})
        
        }
    }

//function to set state for infowindows and call venuedetail function
	getInfoWindow = (marker) => {
		//commenting out getvenue detail to not exhaust the limit
		this.setState({selectedMarker:marker},() => this.props.getVenueDetail(this.state.selectedMarker.id))
		this.setState({position: {lat:marker.location.lat,lng:marker.location.lng}})
				
	}

	//function to make marker visible/invisible based on filtering
	getMarkersVisibility = (markerid) => {
		let marker_visible = false

		if (this.props.searched_markers.length > 0) {
			for (let i = 0; i < this.props.searched_markers.length; i++)
			
				if (this.props.searched_markers[i].id === markerid) 
					{marker_visible = true;
						break} 
				else {marker_visible = false}
		}
		else 
			{marker_visible = true}

		return marker_visible
		
	}

//function to bounce marker when clicked
getAnimation = (marker) => {

		if (this.state.selectedMarker.id === marker.id)
			{return 4}
		else 
			{return 0}
	}

	render () {

		const CoffeMap = withScriptjs(withGoogleMap((props) =>
		
		<GoogleMap
			defaultZoom={15.45}
			defaultCenter={{lat: 37.787938, lng: -122.407506}}
		>
		
		 
		
		{this.props.coffee_shops.map(marker => (
		<Marker 
           key = {marker.id}
           name={marker.name}
           position={{ lat: marker.location.lat , lng: marker.location.lng }}
           title = {marker.name}
           onClick= {e => {this.getInfoWindow(marker)}}
           animation= {this.getAnimation(marker)}
           onMouseOver={this.onMouseoverMarker}
           visible={this.getMarkersVisibility(marker.id)}

        />
      )) }

       
		
		{this.state.position && <InfoWindow 
			position={this.state.position} 
			options={{maxWidth:80,pixelOffset: new window.google.maps.Size(0,-40)}} 
			>
					     <div>
					     	<h3>{this.state.selectedMarker.name}</h3>
					     	<p style={{fontSize: `10px`}}>{this.state.selectedMarker.location.address}</p>
					     	<p style={{fontSize: `10px`}}>{this.state.selectedMarker.location.city}</p>
					     	<p style={{fontSize: `10px`}}>Hours: {typeof(this.props.cshop_details.response)!== 'undefined'?this.props.cshop_details.response.venue.hours.status: 'No detail'}</p>
					     	<p style={{fontSize: `10px`}}>Price: {typeof(this.props.cshop_details.response)!== 'undefined'?this.props.cshop_details.response.venue.price.currency: 'No detail'}</p>

					     	
					     </div>
					 </InfoWindow>
				 }
		 

						
  		</GoogleMap>
  	))

		return (
			
			<div >
			<CoffeMap
				Marker
				InfoWindow
  				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyClnmi6Z3QxqK03n-h6vkgOp06Dc4jpOiw&v=3.exp&libraries=geometry,drawing,places"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `632px` }} />}
  				mapElement={<div style={{ height: `100%`}} />}

        		/> 
			</div>
		)
	}
}

export default Map;