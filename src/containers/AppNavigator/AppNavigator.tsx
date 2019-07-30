import { createAppContainer, createStackNavigator } from 'react-navigation';
import * as routes from '../../constants/routeKeys';
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
    }
  },
  {
    initialRouteKey: routes.HOME
  }
);

export default createAppContainer(AppNavigator);
