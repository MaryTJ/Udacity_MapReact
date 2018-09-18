import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from'react-google-maps'

//Displaying mu;ltiple markers https://stackoverflow.com/questions/43859785/how-do-i-display-multiple-markers-with-react-google-maps
//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
//pass markers array in return and then position of each marker
class Map extends Component {

constructor(props) {
    super(props)
    this.state = {
    selectedMarker:[],
    position : null
}
}
	/*getMarkers = () => {
		for(let i=0; i<this.props.coffee_shops.length; i++) {
          let lat = this.props.coffee_shops[i].location.lat
          let lng = this.props.coffee_shops[i].location.lng
          let position = {lat, lng }
          let title = this.props.coffee_shops[i].name

          let marker = new google.maps.Markers({map:this.CoffeMap,position: position,title: title})
          this.props.markers.push(marker)
          console.log(this.state.markers)
        }
	}
*/
	getInfoWindow = (marker) => {
		
		this.setState({selectedMarker:marker})
		this.setState({position: {lat:marker.location.lat,lng:marker.location.lng}})
		console.log(this.state.selectedMarker)
		
	}

	render () {
		const CoffeMap = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={16}
			defaultCenter={{lat: 37.787938, lng: -122.407506}}
		>
		
		
		{this.props.coffee_shops.map(marker => (
        <Marker 
           key = {marker.id}
           position={{ lat: marker.location.lat, lng: marker.location.lng }}
           title = {marker.name}
           onClick={e => {
                this.getInfoWindow(marker);}}

        />
      )) }
		{this.state.position && <InfoWindow position={this.state.position}>
					     <h1>{this.state.selectedMarker.name}</h1>
					 </InfoWindow>
				 }

		

			
  		</GoogleMap>
  	))

		return (
			
			<div >
			<CoffeMap
				isMarkerShown
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