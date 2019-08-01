import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/deviceDimensions';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: DEVICE_HEIGHT * 0.2
  } as ViewStyle,
  locationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 2
  } as ViewStyle,
  locationText: {
    fontSize: 16,
    color: 'gray'
  } as TextStyle,
  airportText: {
    fontSize: 50
  } as TextStyle,
  boardingInfoContainer: {
    backgroundColor: '#2A2E43',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 27
  } as ViewStyle,
  boardingInfoText: {
    fontSize: 14
  } as TextStyle,
  flightInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    marginHorizontal: 5,
    paddingTop: 6
  } as ViewStyle,
  flightInfoHeaderText: {
    color: '#665EFF',
    fontSize: 13
  } as TextStyle,
  flightInfoText: {
    color: '#454F63',
    fontSize: 22,
    marginTop: 18
  } as TextStyle
});

export default styles;
