import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Button from '../../components/Button';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/deviceDimensions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from './styles';

interface State {
  initialRegion: object;
  showMap: boolean;
}

const ASPECT_RATIO = DEVICE_WIDTH / DEVICE_HEIGHT;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class TransportBooking extends React.Component<null, State> {
  state = {
    initialRegion: {
      latitude: 0,
      longitude: 0
    },
    showMap: false
  };

  componentDidMount(): void {
    this.getLocationAsync().then(() =>
      this.setState({
        showMap: true
      })
    );
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
    }
    const { coords } = await Location.getCurrentPositionAsync({});

    this.setState({
      initialRegion: {
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    });
  };

  render() {
    const { initialRegion, showMap } = this.state;

    return (
      <View style={styles.container}>
        {showMap ? (
          <MapView
            style={styles.mapContainer}
            showsUserLocation
            initialRegion={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
              longitudeDelta: LONGITUDE_DELTA,
              latitudeDelta: LATITUDE_DELTA
            }}
          />
        ) : (
          <View style={styles.mapContainer}>
            <ActivityIndicator />
          </View>
        )}
        <View style={styles.actionDrawer}>
          <View style={styles.actionContainer}>
            <Button buttonStyle={styles.primaryButton} onPress={() => null}>
              {`🚘\n40 min`}
            </Button>
            <Button buttonStyle={styles.secondaryButton} onPress={() => null}>
              {`🚖\n30-40 min`}
            </Button>
            <Button buttonStyle={styles.primaryButton} onPress={() => null}>
              {`🚆\n45-50 min`}
            </Button>
          </View>
          <Text style={styles.rideSharingText}>Ride Sharing:</Text>
          <View style={styles.actionContainer}>
            <Button buttonStyle={styles.primaryButton} onPress={() => null}>
              {`Taxi \n 40 min - $45`}
            </Button>
            <Button buttonStyle={styles.secondaryButton} onPress={() => null}>
              {`Grab \n 40 min - $45`}
            </Button>
            <Button buttonStyle={styles.primaryButton} onPress={() => null}>
              {`GoJek \n 40 min - $45`}
            </Button>
          </View>
          <Button buttonStyle={styles.callToActionButton} onPress={() => null}>
            CALL TAXI
          </Button>
        </View>
      </View>
    );
  }
}

export default TransportBooking;
