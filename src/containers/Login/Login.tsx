import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Card, Input } from 'react-native-elements';

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

  loginHandler = () => {
    const { email, password } = this.state;
    const authResponse = loginWithEmailAndPassword(email, password);
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
