import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar
} from 'react-navigation';

import Login from '../Login';
import SignUp from '../SignUp';

const TabScreen = createMaterialTopTabNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#2A2E43'
      },
      labelStyle: {
        textAlign: 'center'
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2
      }
    },
    tabBarComponent: props => (
      <SafeAreaView>
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    )
  }
);

const AuthPage = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AuthAppContainer = createAppContainer(AuthPage);

AuthAppContainer.navigationOptions = {
  header: null
};

export default AuthAppContainer;
