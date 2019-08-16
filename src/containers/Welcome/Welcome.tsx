import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/Button';
import { DEVICE_WIDTH } from '../../constants/deviceDimensions';
import styles from './styles';
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation';
import { AUTH_PAGE } from '../../constants/routeKeys';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

class Welcome extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/welcome-bg/welcome-bg.png')}
          style={styles.container}
        >
          <SafeAreaView style={styles.contentContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.headerText}>Welcome to SIApp</Text>
            </View>

            <View
              style={[styles.sectionContainer, { width: DEVICE_WIDTH * 0.8 }]}
            >
              <Text style={[styles.contentText, { marginBottom: 30 }]}>
                The best way to navigate your world and discover
              </Text>
              <Text style={styles.contentText}>CONTINUE WITH:</Text>
              <Button
                buttonStyle={{ marginTop: 10 }}
                onPress={() => navigation.navigate(AUTH_PAGE)}
              >
                EMAIL
              </Button>
              <Button
                buttonStyle={{ marginTop: 10, backgroundColor: '#2A2E43' }}
                onPress={() => null}
              >
                FACEBOOK
              </Button>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

export default Welcome;
