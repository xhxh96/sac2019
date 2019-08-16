import React from 'react';
import { View } from 'react-native';
import Dash from 'react-native-dash';

import Icons from '../Icon';
import { heightResizer } from '../../../utils/heightResizer';
import styles from './styles';

const LeftElement = props => {
  const { item } = props;
  return (
    <View
      style={[styles.iconContainer, { height: heightResizer(item.duration) }]}
    >
      <Icons item={item} />
      {renderJourneyIndicator(item.duration)}
    </View>
  );
};

const renderJourneyIndicator = duration => {
  /**
   * 3 types:
   * long: duration >= 40min
   * medium: 10min < duration < 40min
   * short: duration =< 10min
   */
  const indicator =
    duration >= 40 ? 'long' : duration <= 10 ? 'short' : 'medium';
  switch (indicator) {
    case 'long':
      return (
        <View style={[styles.indicator, { backgroundColor: '#ab5cda' }]} />
      );
    case 'medium':
      return (
        <View style={[styles.indicator, { backgroundColor: '#5b7aee' }]} />
      );
    default:
      return (
        <View style={[styles.indicator, { backgroundColor: '#d3d6de' }]} />
      );
  }
};

export default LeftElement;
