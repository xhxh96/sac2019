import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
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
  headerIcons: {
    marginHorizontal: 8
  },
  headerText: {
    color: 'lightgray'
  }
});

export default styles;
