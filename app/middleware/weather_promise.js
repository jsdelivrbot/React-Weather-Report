import Axios from 'axios';
const WEATHER_API_KEY = '2f5f01c9adddb791';
const WEATHER_API_URL = `https://api.wunderground.com/api/${WEATHER_API_KEY}/forecast10day/q/`;

export default function({ dispatch }){
  return next => action => {
    switch(action.type){
      case 'SEARCH_CITY':
        action.payload.then(function(response){
          const { state, city} = getStatename(response);
          var request = Axios.get(`${WEATHER_API_URL}/${state}/${city}.json`);
          const newAction = { type: 'SEARCH_STATE', payload: request, stateName: state, cityName: city};
          dispatch(newAction);
        });
        break;
        case 'SEARCH_STATE':
          action.payload.then(function(response){
            const newAction = { type: 'WEATHER_DATA', payload: response, stateName: action.stateName, cityName: action.cityName};
            dispatch(newAction);
          });
          break;
      default:
        next(action);
    }

  }
}

function getStatename(response) {
  var results = response.data.results;
  var stateAndCity = {};

  for (var ac = 0; ac < results[0].address_components.length; ac++) {
    var component = results[0].address_components[ac];
    switch (component.types[0]) {
      case 'administrative_area_level_1':
        var state = component.short_name;
        stateAndCity['state'] = state;
        break;
      case 'locality':
        var city = component.long_name;
        stateAndCity['city'] = city;
        break;
    }
  }
  return stateAndCity;
}
function getCityname(response) {
  var results = response.data.results;

  for (var ac = 0; ac < results[0].address_components.length; ac++) {
    var component = results[0].address_components[ac];
    switch (component.types[0]) {
      case 'administrative_area_level_1':
        var state = component.short_name;
        return state;
    }
  };
}
