import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { loginWithEmailAndPassword } from '../../utils/networkHandler';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <View>
        <Button title="Login" onPress={() => loginWithEmailAndPassword('andrewotto@gmail.com', '1234568')} />
      </View>
    );
  }
}

export default Login;
