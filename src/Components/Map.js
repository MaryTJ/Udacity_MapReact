import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from'react-google-maps'

//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
class Map extends Component {
	render () {
		const CoffeMap = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{lat: 37.7749, lng: -122.4194}}
		>
			{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  		</GoogleMap>
  	))

		return (
			
			<div>
			<CoffeMap
				isMarkerShown
  				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGXr38KNXlVEJNW8YjeZ6MjCc6eHT-pUY&v=3.exp&&libraries=geometry,drawing,places"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `400px` }} />}
  				mapElement={<div style={{ height: `100%`,width: `50%`}} />}
        		/> 
			</div>
		)
	}
}

export default Map;