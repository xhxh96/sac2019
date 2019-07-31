import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/containers/AppNavigator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      uid: null
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

export default App;
