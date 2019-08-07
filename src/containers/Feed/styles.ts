import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/deviceDimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    margin: 10
  },
  info: {
    flex: 2
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  textContainer: {
    flexDirection: 'column'
  },
  textDescription: {
    fontSize: 15,
    marginLeft: 10,
    color: 'gray',
    paddingLeft: 20
  },
  textDuration: {
    fontStyle: 'italic',
    marginLeft: 10,
    color: 'darkgray'
  },
  arrowIconContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto'
  },
  timeContainer: {
    minWidth: 40,
    marginTop: -5,
    padding: 20,
  },
  time: {
    textAlign: 'center',
    backgroundColor: 'rgba(74, 186, 222,1)',
    color: 'white',
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
  }
});

export default styles;
