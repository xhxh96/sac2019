import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

interface State {
  location: object;
  errorMessage: string;
}

interface Props {}

class Dashboard extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      errorMessage: ''
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Did not work'
      });
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    const { errorMessage, location } = this.state;

    if (errorMessage) text = errorMessage;
    else if (location) text = JSON.stringify(location);

    return (
      <View>
        <Text>Your Location</Text>
        <Text>{text}</Text>
      </View>
    );
  }
}

export default Dashboard;
