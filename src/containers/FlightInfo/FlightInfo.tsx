import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Button, ProfileImage } from '../../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/deviceDimensions';
import styles from './styles';

const FLIGHT_INFO_STUB = [
  {
    type: 'FLIGHT',
    data: 'AC123'
  },
  {
    type: 'SEAT',
    data: '12F'
  },
  {
    type: 'NO. OF PASSENGERS',
    data: '110/122'
  },
  {
    type: 'GATE',
    data: '07'
  }
];

interface FlightData {
  type: string;
  data: string;
}

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

  renderFlightInfo = (flightInfo: FlightData[]) => (
    <View style={styles.flightInfoContainer}>
      {flightInfo.map(info => (
        <View
          style={{ flexDirection: 'column', alignItems: 'center' }}
          key={info.type}
        >
          <Text style={styles.flightInfoHeaderText}>{info.type}</Text>
          <Text style={styles.flightInfoText}>{info.data}</Text>
        </View>
      ))}
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
          {this.renderFlightInfo(FLIGHT_INFO_STUB)}
          <Divider style={{ marginVertical: 15 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ProfileImage
                imageSource={require('../../../assets/images/profile-image/profile-image.jpg')}
              />
              <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <Text style={{ color: '#454F63', fontSize: 16 }}>
                  Mary Jane
                </Text>
                <Text style={{ color: 'gray', fontSize: 14 }}>
                  Business CLass
                </Text>
              </View>
            </View>
            <Button
              buttonStyle={{
                backgroundColor: '#665EFF',
                paddingHorizontal: 21,
                paddingVertical: 8
              }}
            >
              GO BUY
            </Button>
          </View>
          <Button buttonStyle={{ marginTop: 30 }} textStyle={{ fontSize: 15 }}>
            Ready to Fly?
          </Button>
        </View>
      </View>
    );
  }
}

export default FlightInfo;
