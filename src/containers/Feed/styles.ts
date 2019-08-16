import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/deviceDimensions';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#f5f5f9'
  },
  contentContainerStyle: {
    // marginLeft: 50,
    backgroundColor: '#f5f5f9',
    minHeight: 50
  },
  listItemContainer: {
    marginVertical: 2,
    minHeight: 40,
    backgroundColor: '#f5f5f9'
  },
  titleStyle: {
    marginLeft: 25,
    fontSize: 14,
    color: '#3c3c3c',
    fontWeight: 'bold'
  },
  subtitleDescription: {
    marginLeft: 25,
    fontSize: 13,
    color: 'gray'
  },
  subtitleDuration: {
    marginLeft: 25,
    fontSize: 13,
    color: '#00A86B',
    marginTop: 5
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginVertical: 5
  }
});

export default styles;
