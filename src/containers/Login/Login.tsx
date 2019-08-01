import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Card, Input } from 'react-native-elements';

import { FLIGHT_INFO, HOME } from '../../constants/routeKeys';
import { loginWithEmailAndPassword } from '../../utils/networkHandler';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoggedIn } = this.state;
    const { navigation } = this.props;

    if (prevState.isLoggedIn === isLoggedIn) return;
    else {
      switch (isLoggedIn) {
        case isLoggedIn:
          navigation.navigate(FLIGHT_INFO);
          break;
        default:
          navigation.navigate(HOME);
          break;
      }
    }
  }

  loginHandler = async () => {
    const { email, password } = this.state;
    const authResponse = await loginWithEmailAndPassword(email, password);
    if (authResponse === 'success') this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <View>
        <Card>
          <Input placeholder="Email" onChangeText={text => this.setState({ email: text.toLowerCase() })} />
          <Input placeholder="Password" secureTextEntry onChangeText={text => this.setState({ password: text })} />
          <Button title="Login" onPress={() => this.loginHandler()} />
        </Card>
      </View>
    );
  }
}

export default Login;
