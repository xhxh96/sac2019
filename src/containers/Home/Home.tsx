import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  withNavigationFocus
} from 'react-navigation';

import { Button } from '../../components';
import {
  FLIGHT_INFO,
  AUTH_PAGE,
  FEED,
  TRANSPORT_BOOKING
} from '../../constants/routeKeys';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/deviceDimensions';

interface Props {
  isFocused: boolean;
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const BackgroundImage: React.FunctionComponent = () => (
  <Image
    source={require('../../../assets/images/home-bg/home-bg.png')}
    resizeMode="cover"
    style={{
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT,
      position: 'absolute'
    }}
  />
);

class Home extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkSignedIn: false
    };
  }

  render() {
    // printLocalStorage();
    const { navigation } = this.props;

    return (
      <View>
        <View style={styles.container}>
          <Text>Singapore Airlines</Text>
          <Button
            buttonStyle={{ marginTop: 30 }}
            onPress={() => navigation.navigate(FEED)}
          >
            Feed
          </Button>
          <Button
            buttonStyle={{ marginTop: 30 }}
            onPress={() => navigation.navigate(AUTH_PAGE)}
          >
            Log in
          </Button>
          <Button
            buttonStyle={{ marginTop: 30 }}
            onPress={() => navigation.navigate(FLIGHT_INFO)}
          >
            Flight Info
          </Button>
          <Button
            buttonStyle={{ marginTop: 30 }}
            onPress={() => navigation.navigate(TRANSPORT_BOOKING)}
          >
            Transport Booking
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withNavigationFocus(Home);
