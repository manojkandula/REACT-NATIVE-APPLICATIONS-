import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import result from './src/screens/result';
import SettingsScreen from './SettingsScreen';
import profileScreen from './profileScreen';
import listScreen from './listScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    res: result,
    set: SettingsScreen,
    profile: profileScreen,
    lists: listScreen,
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      title: 'App',

    },
  },
);

export default createAppContainer(navigator);
