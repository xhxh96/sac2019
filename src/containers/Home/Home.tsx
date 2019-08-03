import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationParams, NavigationRoute, NavigationScreenProp, withNavigationFocus } from 'react-navigation';

import { Button } from '../../components';
import { FLIGHT_INFO, LOGIN } from '../../constants/routeKeys';
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
          <Button buttonStyle={{ marginTop: 30 }} onPress={() => navigation.navigate(LOGIN)}>
            Email
          </Button>
          <Button buttonStyle={{ marginTop: 30 }} onPress={() => console.log('Facebook Login: TBD')}>
            Facebook
          </Button>
          <Button buttonStyle={{ marginTop: 30 }} onPress={() => navigation.navigate(FLIGHT_INFO)}>
            Flight Info
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
