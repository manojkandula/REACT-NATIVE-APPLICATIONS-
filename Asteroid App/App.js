import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import asteroiddetails from './src/screens/asteroiddetails';
import randomasteroiddetails from './src/screens/randomasteroiddetails';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    asteroidDet: asteroiddetails,
    randomasteroidDet: randomasteroiddetails,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: ' Asteroid App',
    },
  },
);

export default createAppContainer(navigator);
