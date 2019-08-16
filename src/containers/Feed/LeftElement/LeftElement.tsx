import React from 'react';
import { View } from 'react-native';

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
    </View>
  );
};

export default LeftElement;
