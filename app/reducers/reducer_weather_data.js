export default function(state={}, action){
  switch(action.type){
    case 'WEATHER_DATA':
      const newState = {} ;
      const forcastArray = action.payload.data.forecast.simpleforecast.forecastday;
      const highTemps = forcastArray.map(forecast => { return {value: parseInt(forecast.high.fahrenheit)}});
      const lowTemps = forcastArray.map(forecast => { return {value: parseInt(forecast.low.fahrenheit)}});
      const humidity = forcastArray.map(forecast => { return {value: forecast.avehumidity}});
      const maxWind = forcastArray.map(forecast => { return {value: forecast.maxwind.mph}});
      const weatherData = {highTemps, lowTemps, humidity, maxWind};
      newState[action.cityName] = weatherData;
      return Object.assign({}, newState, state);
    default:
      return state;
  }
}
