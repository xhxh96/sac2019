import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import API from '../ApiClient';

interface Props {
  isFocused: boolean;
  navigation: any;
}

class HomeScreen extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log('it changed');
    }
  }

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Text>{this.props.isFocused ? 'Focused' : 'Not Focused'}</Text>
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

export default withNavigationFocus(HomeScreen);
