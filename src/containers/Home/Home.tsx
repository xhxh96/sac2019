import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  withNavigationFocus
} from 'react-navigation';
import { FLIGHT_INFO, LOGIN } from '../../constants/routeKeys';

interface Props {
  isFocused: boolean;
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

class Home extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log(`HomeScreen::isFocused: ${this.props.isFocused}`);
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Singapore Airlines</Text>
        <Button
          title="Email"
          onPress={() => this.props.navigation.navigate(LOGIN)}
        />
        <Button
          title="Facebook"
          onPress={() => console.log('Facebook Login: TBD')}
        />
        <Button
          title="Flight Info"
          onPress={() => navigation.navigate(FLIGHT_INFO)}
        />
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
