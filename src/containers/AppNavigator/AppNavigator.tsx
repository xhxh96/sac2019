import { createAppContainer, createStackNavigator } from 'react-navigation';
import * as routes from '../../constants/routeKeys';
import FlightInfo from '../FlightInfo';
import Home from '../Home';
import Login from '../Login';
import AuthPage from '../AuthPage';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard';
import Feed from '../Feed';
import TransportBooking from '../TransportBooking';
import Welcome from '../Welcome';
import CheckInCounter from '../CheckInCounter';

const AppNavigator = createStackNavigator(
  {
    [routes.WELCOME]: {
      screen: Welcome
    },
    [routes.HOME]: {
      screen: Home
    },
    [routes.DASHBOARD]: {
      screen: Dashboard
    },
    [routes.AUTH_PAGE]: {
      screen: AuthPage
    },
    [routes.LOGIN]: {
      screen: Login
    },
    [routes.FEED]: {
      screen: Feed
    },
    [routes.SIGN_UP]: {
      screen: SignUp
    },
    [routes.FLIGHT_INFO]: {
      screen: FlightInfo
    },
    [routes.TRANSPORT_BOOKING]: {
      screen: TransportBooking
    },
    [routes.CHECK_IN_COUNTER]: {
      screen: CheckInCounter
    }
  },
  {
    initialRouteKey: routes.WELCOME
  }
);

export default createAppContainer(AppNavigator);
