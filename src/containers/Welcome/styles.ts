import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  headerText: {
    color: 'white',
    fontSize: 52,
    textAlign: 'center'
  },
  contentText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  }
});

export default styles;
