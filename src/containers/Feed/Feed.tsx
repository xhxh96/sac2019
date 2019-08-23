import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation';
import { ListItem } from 'react-native-elements';
import LeftElement from './LeftElement';
import Description from './Description';
import ListChevron from './ListChevron/';
import FeedHeader from './FeedHeader/';
import { heightResizer } from '../../utils/heightResizer';
import { CHECK_IN_COUNTER, TRANSPORT_BOOKING } from '../../constants/routeKeys';
import { tripData } from '../../../fixtures/tripData';
import styles from './styles';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

class Feed extends Component<Props> {
  constructor(props) {
    super(props);
  }

  onPressHandler = pageReference => {
    const { navigation } = this.props;
    switch (pageReference) {
      case 'taxi':
        navigation.navigate(TRANSPORT_BOOKING);
        break;
      case 'checkin-counter':
        navigation.navigate(CHECK_IN_COUNTER);
        break;
      default:
        break;
    }
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <ListItem
          Component={TouchableOpacity}
          leftElement={<LeftElement item={item} />}
          title={item.title}
          titleStyle={styles.titleStyle}
          subtitle={<Description item={item} />}
          contentContainerStyle={[
            styles.contentContainerStyle,
            { height: heightResizer(item.duration) }
          ]}
          containerStyle={[styles.listItemContainer]}
          chevron={<ListChevron />}
          onPress={() => this.onPressHandler(item.type)}
        />
      </View>
    );
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
        data={tripData}
        renderItem={this.renderItem}
        ListHeaderComponent={<FeedHeader data={tripData} />}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

export default Feed;
