import axios from 'axios';

const API_KEY = '28d5500ce9ee2392f11a922f586aa2a0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
 const url = `${ROOT_URL}&q=${city}`;
 const request = axios.get(url);

 return {
  type: FETCH_WEATHER,
  request
 };
}
