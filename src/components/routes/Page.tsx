import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

interface Props {
  isFocused: boolean;
  navigation: any;
}

class Page extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Another Page</Text>
        <Button title="Go Home" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default Page;
