import React from 'react'
import * as Redux from 'react-redux';

export class WeatherList extends React.Component {
 render () {
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
    <tbody></tbody>
   </table>
  )
 }
}

export default Redux.connect(
 (state) => {
  return state.weather;
 }
)(WeatherList);
