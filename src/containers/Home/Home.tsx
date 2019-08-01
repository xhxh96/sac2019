import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

interface Props {
  isFocused: boolean;
  navigation: any;
}

class Home extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log(`HomeScreen::isFocused: ${this.props.isFocused}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Singapore Airlines</Text>
        <Button title="Email" onPress={() => this.props.navigation.navigate('LOGIN')} />
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

export default withNavigationFocus(Home);