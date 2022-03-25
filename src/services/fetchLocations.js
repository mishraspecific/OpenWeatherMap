import { useQuery } from 'react-query';
import { service } from '.';
import { HTTP_METHODS } from './api-constants';
import Config from 'react-native-config';

/**
 * This method used to fetch 15 nearby cities weather data based on
 * latitude and longitude as param
 * @param {*} latlong
 * @returns Promise
 */
const fetchLocations = ({ latitude, longitude }) => {
  console.log('fetchLocations');
  let openWeatherURL = `${Config.OPEN_WEATHER_BASE_URL}find?lat=${latitude}&lon=${longitude}&cnt=15&units=metric&APPID=${Config.OPEN_WEATHER_API_KEY}`;
  return service.request(openWeatherURL, HTTP_METHODS.GET);
};

const useLocation = (coords) =>
  useQuery(['location', coords], () => fetchLocations(coords), {
    enabled: !!coords,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
export default useLocation;
