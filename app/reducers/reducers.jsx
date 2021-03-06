import { FETCH_WEATHER } from 'actions';

export const fetchWeatherReducer = (state = [], action) => {
 switch (action.type) {
  case FETCH_WEATHER:
   return [
    ...state,
    action.payload.data
   ]
   break;
  default:
   return state;
 }
};
