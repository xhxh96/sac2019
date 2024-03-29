import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Input } from 'react-native-elements';
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  withNavigationFocus
} from 'react-navigation';

import { Button } from '../../components';
import { FLIGHT_INFO, HOME } from '../../constants/routeKeys';
import { loginWithEmailAndPassword } from '../../utils/networkHandler';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

interface State {
  isLoggedIn: boolean;
  email: string;
  password: string;
  errorMessage: string;
}

class Login extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoggedIn } = this.state;
    const { navigation } = this.props;
    if (prevState.isLoggedIn === isLoggedIn) return;

    if (isLoggedIn) navigation.navigate(FLIGHT_INFO);
  }

  // TO BE DONE IN THE FUTURE
  // signUpHandler = () => {
  //   const { email, password } = this.state;
  //   if (email === '' || password === '') this.setState({ errorMessage: 'Email and password are required' });
  //   else {
  //     const signUpResponse = signUpWithEmailAndPassword(email, password);
  //     this.setState({ isLoggedIn: true });
  //   }
  // };

  render() {
    const { errorMessage } = this.state;
    return (
      <View>
        <Card>
          <Input
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={text =>
              this.setState({ email: text.toString().toLowerCase() })
            }
          />
          <Input
            placeholder="Password"
            autoCapitalize="none"
            errorMessage={errorMessage}
            secureTextEntry
            onChangeText={text => this.setState({ password: text.toString() })}
          />
          <Button buttonStyle={{ marginTop: 30 }} onPress={() => {}}>
            Sign Up
          </Button>
        </Card>
      </View>
    );
  }
}

export default Login;
