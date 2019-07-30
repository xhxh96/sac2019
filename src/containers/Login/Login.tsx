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
        <Button
          title="Login"
          onPress={() =>
            loginWithEmailAndPassword('andrewotto@gmail.com', '12345678')
          }
        />
      </View>
    );
  }
}

export default Login;
