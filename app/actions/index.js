import Axios from 'axios';

const GOOGLE_API_KEY = "AIzaSyBCNh-skT2WNedb4nM14Zw_Rxa4fdWVeuA";
const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?&key=${GOOGLE_API_KEY}&address=`;


export default (cityName) => {
  var request = Axios.get(GOOGLE_API_URL+cityName);
  return {
    type: 'SEARCH_CITY',
    cityName: cityName,
    payload: request
  }
}
