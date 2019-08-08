import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './styles';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    }

    this.data = [
      { time: '09:00', title: 'Home', description: 'Drive 40km', duration: '40 min', icon: require('../../../assets/icons/Feed/taxi-icon.png') },
      { time: '09:40', title: 'Changi Airport T4', description: 'Walk to check-in', duration: '2 min', icon: require('../../../assets/icons/Feed/walking.png') },
      { time: '09:42', title: 'Check-In Counter 3', description: '2 people in line', duration: '5 min', icon: require('../../../assets/icons/Feed/check-in.png') },
      { time: '09:47', title: 'Immigation Checkpoint', description: 'Walk 100m from check-in counter', duration: '3 min', icon: require('../../../assets/icons/Feed/immigration.png') },
      { time: '09:50', title: 'Boarding Gate G7', description: 'Gate opens at 7:40pm', duration: '40 min', icon: require('../../../assets/icons/Feed/gate.png') },
      { time: '10:30', title: 'Flight Departure', description: 'Schedulef flight to depart at 11:00', duration: '30 min', icon: require('../../../assets/icons/Feed/airplane.png') }
    ];
  }

  onEventPress = (data) => {
    this.setState({ selected: data });
  }

  renderSelected() {
    if (this.state.selected) console.log(this.state.selected);
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={styles.title}>{rowData.title}</Text>
    let desc = null
    if (rowData.description && rowData.duration)
      desc = (
        <View style={styles.descriptionContainer}>
          <Text style={styles.textContainer}>
            <Text style={[styles.textDescription]}>{`${rowData.description}\n`}</Text>
            <Text style={[styles.textDuration]}>{rowData.duration}</Text>
          </Text>
        </View>
      )

    return (
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          {title}
          {desc}
        </View>
        <View stlye={styles.arrowIconContainer}>
          <MaterialIcons name="chevron-right" size={35} color="lightgray" />
        </View>
      </View >

    )
  }

  render() {
    return (
      <Timeline
        style={styles.list}
        data={this.data}
        circleSize={50}
        circleColor='rgba(255,255,255,0.95)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={styles.timeContainer}
        timeStyle={styles.time}
        separator={true}
        innerCircle={'icon'}
        iconStyle={styles.icon}
        onEventPress={() => this.onEventPress()}
        renderDetail={this.renderDetail}
      />
    )
  }
}

export default Feed;