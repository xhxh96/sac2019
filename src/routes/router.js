import React from 'react';
import { Button } from 'react-native';
import TabNavigator from 'react-navigation';

import HomeScreen from '../components/HomeScreen';

export const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen
  }
});
