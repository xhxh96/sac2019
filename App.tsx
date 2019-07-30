import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/components/routes/HomeScreen';
import Login from './src/components/routes/Login';
import Page from './src/components/routes/Page';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Page: Page,
    Login: Login
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
