import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import autoBindMethods from 'class-autobind-decorator';

import { getFlightStatusByRoute } from './src/server/API';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Click Me"
          onPress={() =>
            getFlightStatusByRoute({
              originAirportCode: 'SIN',
              scheduledDepartureDate: '2019-07-28',
              destinationAirportCode: 'MAA',
              scheduledArrivalDate: '2019-07-30'
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
