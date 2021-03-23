import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CountryinfoScreen from './src/screens/CountryinfoScreen';
import WeatherScreen from './src/screens/WeatherScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Countryinfo: CountryinfoScreen,
    Weather: WeatherScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
