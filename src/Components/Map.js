import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerClusterer } from'react-google-maps'

//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
//pass markers array in return and then position of each marker
class Map extends Component {
	render () {
		const CoffeMap = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{lat: 37.7749, lng: -122.4194}}
		>
			{props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: -122.4194 }}
			 />}
  		</GoogleMap>
  	))

		return (
			
			<div>
			<CoffeMap
				isMarkerShown
  				googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&&libraries=geometry,drawing,places"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `600px` }} />}
  				mapElement={<div style={{ height: `100%`}} />}
        		/> 
			</div>
		)
	}
}

export default Map;