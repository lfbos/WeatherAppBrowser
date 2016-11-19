import React from 'react'
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class SearchBar extends React.Component {
	constructor(props) {
			super(props);

			this.state = { term: '' };
			this.onInputChange = this.onInputChange.bind(this);
			this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({term: e.target.value});
	}

	onFormSubmit(e) {
		e.preventDefault();

		if (this.state.term) {
			const { dispatch } = this.props;
			dispatch(actions.fetchWeather(this.state.term));
			this.setState({ term: ''});
		}
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					/>
    <span className="input-group-btn">
     <button type="submit" className="btn btn-secondary">Submit</button>
    </span>
			</form>
		);
	}
}

export default Redux.connect()(SearchBar);
