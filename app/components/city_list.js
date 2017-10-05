import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts';

class CityList extends Component{
  render(){
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>City</th>
              <th>High Temperature</th>
              <th>Low Temperature</th>
              <th>Humidity</th>
              <th>Max WInd</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weatherDataArray.map(weatherData => <WeatherDataRows key = {weatherData.city} weatherData={weatherData}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

function WeatherDataRows(props){
  const weatherData = props.weatherData;
    return (
      <tr>
        <td>{weatherData.city}</td>
        <td><Chart data={weatherData.highTemps}/></td>
        <td><Chart data={weatherData.lowTemps}/></td>
        <td><Chart data={weatherData.humidity}/></td>
        <td><Chart data={weatherData.maxWind}/></td>
      </tr>
    );
}

function Chart(props){
  const data=props.data;
  return(
    <LineChart width={200} height={100} data={data}>
      <Line type='monotone' dataKey='value' stroke='#8884d8' strokeWidth={2} />
    </LineChart>
  );
}

function mapStateToProps(state){
  return {
    weatherDataArray: state.weatherData
  };
}
export default connect(mapStateToProps)(CityList);
