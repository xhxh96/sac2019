import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import API from '../ApiClient';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Another Page" onPress={() => this.props.navigation.navigate('Page')} />
      </View>
    );
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

export default HomeScreen;
