import React from 'react';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import styles from './styles';
import { sumBy } from 'lodash';

const FeedHeader = props => {
  const { data } = props;
  const totalDuration = sumBy(data, trip => trip.duration);
  return (
    <View style={styles.header}>
      <Ionicons
        name="md-car"
        size={30}
        color="white"
        style={styles.headerIcons}
      />
      <EvilIcons
        name="chevron-right"
        size={30}
        color="gray"
        style={styles.headerIcons}
      />
      <Text style={styles.headerText}>T4</Text>
      <EvilIcons
        name="chevron-right"
        size={30}
        color="gray"
        style={styles.headerIcons}
      />
      <Text style={styles.headerText}>C3</Text>
      <EvilIcons
        name="chevron-right"
        size={30}
        color="gray"
        style={styles.headerIcons}
      />
      <Text style={styles.headerText}>G7</Text>
      <Text
        style={[styles.headerText, { marginLeft: 'auto', marginRight: 10 }]}
      >
        {`${totalDuration} min`}
      </Text>
    </View>
  );
};

export default FeedHeader;
