import { Asset } from 'expo-asset';
import React, { Component } from 'react';
import AppNavigator from './src/containers/AppNavigator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      uid: null
    };
  }

  async componentDidMount() {
    await Asset.loadAsync([
      require('./assets/images/flight-info-bg/flight-info-bg.png')
    ]);
  }

  render() {
    return <AppNavigator />;
  }
}

export default App;
