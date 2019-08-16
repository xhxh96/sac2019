import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons
} from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import styles from './styles';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        time: '09:00',
        title: 'Home',
        description: 'Drive 40km',
        duration: 40,
        type: 'taxi'
      },
      {
        time: '09:40',
        title: 'Changi Airport T4',
        description: 'Walk to check-in',
        duration: 2,
        type: 'to-checkin'
      },
      {
        time: '09:42',
        title: 'Check-In Counter 3',
        description: '2 people in line',
        duration: 5,
        type: 'checkin-counter'
      },
      {
        time: '09:47',
        title: 'Immigation Checkpoint',
        description: 'Walk 100m from check-in counter',
        duration: 3,
        type: 'immigration'
      },
      {
        time: '09:50',
        title: 'Boarding Gate G7',
        description: 'Gate opens at 7:40pm',
        duration: 40,
        type: 'boarding-gate'
      },
      {
        time: '10:30',
        title: 'Flight Departure',
        description: 'Schedulef flight to depart at 11:00',
        duration: 30,
        type: 'departure'
      }
    ];
  }

  renderHeader = () => {
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
          55min
        </Text>
      </View>
    );
  };

  renderIcon = item => {
    switch (item.type) {
      case 'taxi':
        return <Ionicons name="md-car" size={30} style={styles.icons} />;
        break;
      case 'to-checkin':
        return (
          <MaterialIcons
            name="directions-walk"
            size={30}
            style={styles.icons}
          />
        );
        break;
      case 'checkin-counter':
        return (
          <MaterialCommunityIcons
            name="human-greeting"
            size={30}
            style={styles.icons}
          />
        );
        break;
      case 'immigration':
        return (
          <MaterialIcons
            name="directions-walk"
            size={30}
            style={styles.icons}
          />
        );
        break;
      case 'boarding-gate':
        return <Ionicons name="md-airplane" size={30} style={styles.icons} />;
        break;
      case 'departure':
        return (
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={30}
            style={styles.icons}
          />
        );
        break;
      default:
        break;
    }
  };

  renderItem = ({ item }) => {
    // this function will resize the marginBottom of each listItem based on duration
    // it is a purely aesthetical function
    const resizer = duration => duration * 1.5;
    const renderChevron = () => (
      <AntDesign
        name="arrowright"
        size={20}
        color="gray"
        style={styles.chevron}
      />
    );
    return (
      <View style={[styles.feedContainer]}>
        <ListItem
          Component={TouchableOpacity}
          leftIcon={this.renderIcon(item)}
          title={item.title}
          titleStyle={styles.titleStyle}
          subtitle={this.renderDescription(item)}
          subtitleStyle={styles.subtitleStyle}
          style={styles.listItem}
          containerStyle={[
            styles.listItemContainer,
            { marginBottom: resizer(item.duration) }
          ]}
          chevron={renderChevron()}
        />
      </View>
    );
  };

  renderDescription = item => {
    return `${item.description}   (${item.duration} min)`;
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <FlatList
        style={styles.pageContainer}
        keyExtractor={this.keyExtractor}
        data={this.data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

export default Feed;
