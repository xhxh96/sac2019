import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import autoBindMethods from 'class-autobind-decorator';

import API from './src/server/ApiClient';

const data = {
  request: {
    originAirportCode: 'SIN',
    scheduledDepartureDate: '2019-07-28',
    destinationAirportCode: 'MAA',
    scheduledArrivalDate: '2019-07-30'
  },
  clientUUID: 'TestIODocs'
};

const methods = {
  method: 'POST',
  headers: {
    apikey: '9vghg66sfg7bfnntyshm54fm',
    'X-Originating-IP': '67.85.215.220',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

@autoBindMethods
class App extends Component {
  // async getFlightStatusByRoute() {
  //   try {
  //     let response = await fetch(
  //       'https://apigw.singaporeair.com/api/v3/flightstatus/getbyroute',
  //       {
  //         method: 'POST',
  //         headers: {
  //           apikey: '9vghg66sfg7bfnntyshm54fm',
  //           'X-Originating-IP': '67.85.215.220',
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //       }
  //     );
  //     let responseJson = await response.json();
  //     console.log(responseJson);
  //   } catch (error) {
  //     console.error(error);
  //   }

  APICall() {
    API.call('getbyroute', methods, response => {
      console.log(response);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Click Me" onPress={this.APICall} />
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
