//https://developer.foursquare.com/docs/api/venues/explore
//This file calls the API of foursquare to get coffes places data
const api = " https://api.foursquare.com"

export const getAll = () =>
  fetch(`${api}//v2/venues/explore?client_secret=&client_id=&v=20181101&limit=10&ll=37.787938,-122.407506&section=coffee`)
    .then(response => response.json())

export const getDetail = (venueID) =>
  fetch(`${api}//v2/venues/${venueID}?client_secret=&client_id=&v=20181809`)
      .then(response => response.json())



    