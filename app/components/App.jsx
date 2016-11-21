import React from 'react';

import SearchBar from 'SearchBar';
import WeatherList from 'WeatherList';

export class App extends React.Component {
	render() {
		return (
			<div className="container">
				<SearchBar/>
				<WeatherList/>
			</div>
		);
	}
};

export default App;
