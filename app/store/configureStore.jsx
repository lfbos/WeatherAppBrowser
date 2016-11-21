import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import {fetchWeatherReducer}  from 'reducers';

export var configure = (initialState = {}) => {
 const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

 const reducers = combineReducers({
  weather: fetchWeatherReducer
 });

 const store = createStoreWithMiddleware(reducers, initialState)

 return store;
};
