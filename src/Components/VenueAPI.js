const api = " https://api.foursquare.com"

export const getAll = () =>
  fetch(`${api}//v2/venues/explore?client_secret=XPGTTFMXMICT4UMTXBQLZLW1W4RMF1UMEQPCAJZ04NOGA1EU&client_id=3EZOOUS3VSM300AR2U3O34GHDWSIFN3TKUGSGWBCPU530VPC&v=20181101&limit=10&ll=37.787938,-122.407506&section=coffee`)
    .then(response => response.json())//.then(data => data.groups["0"].items)



    