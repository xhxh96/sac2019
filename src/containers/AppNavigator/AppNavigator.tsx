import { createAppContainer, createStackNavigator } from 'react-navigation';
import * as routes from '../../constants/routeKeys';
import FlightInfo from '../FlightInfo';
import Home from '../Home';
import Login from '../Login';
import Page from '../Page';

const AppNavigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: Home
    },
    [routes.LOGIN]: {
      screen: Login
    },
    [routes.SIGN_UP]: {
      screen: Page
    },
    [routes.FLIGHT_INFO]: {
      screen: FlightInfo
    }
  },
  {
    initialRouteKey: routes.HOME
  }
);

export default createAppContainer(AppNavigator);
