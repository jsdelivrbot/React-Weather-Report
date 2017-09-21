import {combineReducers} from 'redux';
import WeatherDataReducer from './reducer_weather_data';

const rootReducer = combineReducers({
  weatherData: WeatherDataReducer
});

export default rootReducer;
