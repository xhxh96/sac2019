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
      require('./assets/images/flight-info-bg/flight-info-bg.png'),
      require('./assets/images/welcome-bg/welcome-bg.png'),
      require('./assets/icons/Feed/airplane.png'),
      require('./assets/icons/Feed/check-in.png'),
      require('./assets/icons/Feed/gate.png'),
      require('./assets/icons/Feed/immigration.png'),
      require('./assets/icons/Feed/taxi-icon.png'),
      require('./assets/icons/Feed/walking.png')
    ]);
  }

  render() {
    return <AppNavigator />;
  }
}

export default App;
