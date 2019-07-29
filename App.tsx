import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import API from './src/server/ApiClient';

import {
  getFlightStatusByRoute,
  getFlightStatusByNumber,
  flightSearch
} from './src/server/API';

class App extends Component {
  render() {
    const path = 'http://localhost:3000/api';
    return (
      <View style={styles.container}>
        <Button
          title="Axios"
          onPress={() =>
            API.call('hello', res => {
              console.log(res);
            })
          }
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#bfbfbf'
          }}
          onPress={() =>
            getFlightStatusByRoute({
              originAirportCode: 'SIN',
              scheduledDepartureDate: '2019-07-28',
              destinationAirportCode: 'MAA',
              scheduledArrivalDate: '2019-07-30'
            })
          }
        >
          <Text>By Number</Text>
        </TouchableOpacity>
        <Button
          title="By Number"
          onPress={() =>
            getFlightStatusByNumber({
              airlineCode: 'SQ',
              flightNumber: '950',
              originAirportCode: 'SIN',
              scheduledDepartureDate: '2019-07-28',
              destinationAirportCode: 'MAA',
              scheduledArrivalDate: '2019-07-30'
            })
          }
        />
        <Button
          title="Flight Search"
          onPress={() =>
            flightSearch({
              itineraryDetails: [
                {
                  originAirportCode: 'SIN',
                  destinationAirportCode: 'HKG',
                  departureDate: '2019-07-29',
                  returnDate: '2019-07-30'
                }
              ],
              cabinClass: 'Y',
              adultCount: 1,
              childCount: 0,
              infantCount: 0,
              flightSortingRequired: false,
              flexibleDates: false,
              dateRange: 0
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
