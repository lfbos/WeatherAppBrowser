import React from 'react'
import * as Redux from 'react-redux';

import Chart from 'Chart';

export class WeatherList extends React.Component {
	renderWeather(cityData) {
  if (cityData) {
		 const name = cityData.city.name;
			const temps = cityData.list.map(weather => weather.main.temp);
			const pressures = cityData.list.map(weather => weather.main.pressure);
			const humidities = cityData.list.map(weather => weather.main.humidity);

 		return (
 			<tr key={name}>
 				<td><h4>{name}</h4></td>
					<td><Chart data={temps} color="orange" units="K"/></td>
					<td><Chart data={pressures} color="green" units="hPa"/></td>
					<td><Chart data={humidities} color="black" units="%"/></td>
 			</tr>
 		)
  }
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
     {this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

export default Redux.connect(
 (state) => {
	 return state;
 }
)(WeatherList);
