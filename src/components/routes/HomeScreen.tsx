import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import API from '../../ApiClient';

interface Props {
  isFocused: boolean;
  navigation: any;
}

class HomeScreen extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log(`HomeScreen::isFocused: ${this.props.isFocused}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Singapore Airlines</Text>
        <Button title="Email" onPress={() => this.props.navigation.navigate('Login')} />
        <Button title="Facebook" onPress={() => console.log('Facebook Login: TBD')} />
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
