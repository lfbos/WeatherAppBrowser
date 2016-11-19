import * as redux from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import {fetchWeatherReducer}  from 'reducers';

export var configure = (initialState = {}) => {
 var reducer = redux.combineReducers({
  fetchWeather: fetchWeatherReducer
 });
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
 var store = redux.createStore(reducer, initialState, composeEnhancers(  redux.applyMiddleware(thunk), redux.applyMiddleware(ReduxPromise)
));

 return store;
};
