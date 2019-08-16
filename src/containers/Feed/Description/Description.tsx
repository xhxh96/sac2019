import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const Description = props => {
  const { item } = props;
  return (
    <View>
      <Text style={styles.subtitleDescription}>{`${item.description}`}</Text>
      <Text style={styles.subtitleDuration}>{`${item.duration} min`}</Text>
    </View>
  );
};

export default Description;
