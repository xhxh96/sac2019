import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const COUNTER_DATA = [
  {
    id: 1,
    counterNumber: 2,
    waitTimeIndex: 5,
    waitTime: 15,
    slowest: true
  },
  { id: 2, counterNumber: 3, waitTimeIndex: 2, waitTime: 5, fastest: true },
  {
    id: 3,
    counterNumber: 4,
    waitTimeIndex: 3,
    waitTime: 10,
    recommended: false
  }
];

class CheckInCounter extends React.Component {
  renderItem = ({ item }) => {
    const personIcons = [];

    for (let i = 0; i < 5; i++) {
      if (i < item.waitTimeIndex) personIcons.push(true);
      else personIcons.push(false);
    }

    return (
      <View
        style={[
          styles.container,
          item.fastest && { backgroundColor: 'green' },
          item.slowest && { backgroundColor: 'red' }
        ]}
        key={item.id}
      >
        <Text style={styles.header}>{`Counter ${item.counterNumber}`}</Text>
        <Text
          style={styles.subHeader}
        >{`Average Wait Time: ${item.waitTime}`}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {personIcons.map(status => {
            if (status) return <FontAwesomeIcon icon={faMale} />;
            else return <FontAwesomeIcon icon={faMale} color="gray" />;
          })}
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={COUNTER_DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default CheckInCounter;
