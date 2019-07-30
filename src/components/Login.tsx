import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import API from '../ApiClient';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  loginWithEmailAndPassword(email, password) {
    API.call(
      'loginWithEmailAndPassword',
      { email, password },
      token => {
        if (token === 'got a token') {
          console.log('authenticated');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <View>
        <Button
          title="Login"
          onPress={() => this.loginWithEmailAndPassword('andrewotto@gmail.com', '12345678')}
        />
      </View>
    );
  }
}

export default Login;
