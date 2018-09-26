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
    selectedMarker:[],
    position : null,
    selectedMarkerDetail: null,
    markerAnimation: 0,
    hasLoaded: false
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
	componentDidMount() {


    // after map load, comminucate animation has dropped complete so markers don't keep dropping
    /*Timeout(() => {
      this.setState({
        hasLoaded: true
      })

    }, 1000)*/
  }


	getInfoWindow = (e,marker) => {
		this.setState({selectedMarker:marker})
		this.setState({position: {lat:marker.location.lat,lng:marker.location.lng}})
		console.log(this.state.selectedMarker.id)
		//this.props.getVenueDetail(this.state.selectedMarker.id)
		//this.props.getVenueDetail(this.state.selectedMarker.id)
		//animation = window.google.maps.Animation.DROP
		console.log("children")
		console.log(e)
		this.setState({markerAnimation:1})
	}

	onMouseoverMarker(props, marker, e) {
  		
	}

	animateMarker = (e,marker) => {
		/*
		if (this.state.selectedMarker.id === marker.id)
      		return 4 // bobble
      	else
      		return 0
      	*/
      	console.log("selectedMarker")
      	console.log(this.state.selectedMarker.id )

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
           name={marker.name}
           position={{ lat: marker.location.lat , lng: marker.location.lng }}
           title = {marker.name}
           onClick= {(e) => {this.getInfoWindow(e,marker)}}
           animation= {this.state.selectedMarker.id === marker.id? 4: 0}
           onMouseOver={this.onMouseoverMarker}

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