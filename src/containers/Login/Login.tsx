import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Card, Input } from 'react-native-elements';

import { FLIGHT_INFO, HOME } from '../../constants/routeKeys';
import { loginWithEmailAndPassword } from '../../utils/networkHandler';

interface Props {
  navigation: any;
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
    if (email === '' || password === '') this.setState({ errorMessage: 'Email and password are required' });
    else {
      const authResponse = await loginWithEmailAndPassword(email, password);
      if (authResponse === 'success') this.setState({ isLoggedIn: true });
      else this.setState({ errorMessage: authResponse['error'] });
    }
  };

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
          <Input placeholder="Email" onChangeText={text => this.setState({ email: text.toString().toLowerCase() })} />
          <Input
            placeholder="Password"
            errorMessage={errorMessage}
            secureTextEntry
            onChangeText={text => this.setState({ password: text.toString() })}
          />
          <Button title="Login" onPress={() => this.loginHandler()} />
          <Button title="Signup" onPress={() => {}} />
        </Card>
      </View>
    );
  }
}

export default Login;
