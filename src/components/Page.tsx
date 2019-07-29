import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Page extends Component {
  render() {
    return (
      <View>
        <Text>Another Page</Text>
        <Button title="Go Home" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default Page;
