import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/deviceDimensions';

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#f5f5f9'
  },
  icons: {
    flex: 1,
    marginLeft: 15
  },
  headerIcons: {
    marginHorizontal: 8
  },
  chevron: {
    marginRight: 10
  },
  feedContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItem: {
    flex: 1,
    backgroundColor: '#f5f5f9'
  },
  listItemContainer: {
    backgroundColor: '#f5f5f9',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  subtitleStyle: {
    fontSize: 12,
    color: 'gray'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginVertical: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#2A2E43',
    height: 60,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10
  },
  headerText: {
    color: 'lightgray'
  }
});

export default styles;
