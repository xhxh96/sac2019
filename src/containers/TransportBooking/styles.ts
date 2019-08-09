import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionDrawer: {
    flex: 3,
    backgroundColor: '#2A2E43',
    borderRadius: 15,
    paddingTop: 15,
    paddingHorizontal: 10
  },
  actionContainer: {
    flexDirection: 'row'
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#353A50'
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#454F63'
  },
  rideSharingText: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10
  },
  callToActionButton: {
    marginHorizontal: 15,
    marginVertical: 5
  }
});

export default styles;
