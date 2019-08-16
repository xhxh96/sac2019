import React from 'react';
import styles from './styles';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

const Icon = props => {
  const { type } = props.item;
  switch (type) {
    case 'taxi':
      return <Ionicons name="md-car" size={30} style={styles.icons} />;
    case 'to-checkin':
      return (
        <MaterialIcons name="directions-walk" size={30} style={styles.icons} />
      );
    case 'checkin-counter':
      return (
        <MaterialCommunityIcons
          name="human-greeting"
          size={30}
          style={styles.icons}
        />
      );
    case 'immigration':
      return (
        <MaterialIcons name="directions-walk" size={30} style={styles.icons} />
      );

    case 'boarding-gate':
      return <Ionicons name="md-airplane" size={30} style={styles.icons} />;
    case 'departure':
      return (
        <MaterialCommunityIcons
          name="airplane-takeoff"
          size={30}
          style={styles.icons}
        />
      );
    default:
      break;
  }
};

export default Icon;
