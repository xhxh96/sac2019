import { createAppContainer, createStackNavigator } from 'react-navigation';
import * as routes from '../../constants/routeKeys';
import FlightInfo from '../FlightInfo';
import Home from '../Home';
import Login from '../Login';
import Page from '../Page';
import AuthPage from '../AuthPage';
import SignUp from '../SignUp';

const AppNavigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: Home
    },
    [routes.AUTH_PAGE]: {
      screen: AuthPage
    },
    [routes.LOGIN]: {
      screen: Login
    },
    [routes.SIGN_UP]: {
      screen: SignUp
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
