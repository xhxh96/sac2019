import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
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
        backgroundColor: '#3ACCE1'
      },
      labelStyle: {
        textAlign: 'center'
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2
      }
    }
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

export default createAppContainer(AuthPage);
