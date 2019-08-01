import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/deviceDimensions';
import styles from './styles';

const BackgroundImage: React.FunctionComponent = () => (
  <Image
    source={require('../../../assets/images/flight-info-bg/flight-info-bg.png')}
    resizeMode="contain"
    style={{
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT * 0.15,
      position: 'absolute',
      top: 0,
      left: 0
    }}
  />
);

class FlightInfo extends Component {
  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>SINGAPORE</Text>
        <Text style={styles.airportText}>SIN</Text>
      </View>
      <View style={[styles.locationContainer, { flex: 1 }]}>
        <Text style={[styles.locationText, { fontSize: 12 }]}>10h 47m</Text>
        <MaterialIcons name="chevron-right" size={25} color="gray" />
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>UNITED STATES</Text>
        <Text style={styles.airportText}>JFK</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <BackgroundImage />
        <View style={{ paddingHorizontal: 10 }}>
          {this.renderHeader()}
          <View style={styles.boardingInfoContainer}>
            <Text style={[styles.boardingInfoText, { color: 'gray' }]}>
              BOARDING
            </Text>
            <Text style={[styles.boardingInfoText, { color: 'white' }]}>
              10:52, JAN 12
            </Text>
          </View>
          <View style={styles.flightInfoContainer}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={styles.flightInfoHeaderText}>FLIGHT</Text>
              <Text style={styles.flightInfoText}>AC123</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={styles.flightInfoHeaderText}>SEAT</Text>
              <Text style={styles.flightInfoText}>12F</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={styles.flightInfoHeaderText}>NO. OF PASSENGERS</Text>
              <Text style={styles.flightInfoText}>110/122</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={styles.flightInfoHeaderText}>GATE</Text>
              <Text style={styles.flightInfoText}>08</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FlightInfo;
