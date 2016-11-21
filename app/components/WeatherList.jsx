import React from 'react'
import * as Redux from 'react-redux';

export class WeatherList extends React.Component {
	renderWeather(cityData) {

  if (cityData) {
		 const name = cityData.city.name;
 		return (
 			<tr key={name}>
 				<td>{name}</td>
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
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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
