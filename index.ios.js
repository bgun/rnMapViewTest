'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  MapView,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} = React;

import MapViewExample from './MapViewExample';
import MapboxExample  from './MapboxExample';


class rnMapViewTest extends React.Component {

  constructor() {
    super();
    this.state = {
      mapType: 'default' // or 'mapbox'
    }
  }

  toggleMapType() {
    this.setState({
      mapType: (this.state.mapType === 'default') ? 'mapbox' : 'default'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={ styles.map }>
          { this.state.mapType === 'default' ? (
            <MapViewExample />
          ) : (
            <MapboxExample />
          ) }
        </View>
        <View style={ styles.tabbar }>
          <TouchableOpacity style={ styles.tab } onPress={ this.toggleMapType.bind(this) }>
            <Text>Default Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.tab } onPress={ this.toggleMapType.bind(this) }>
            <Text>Mapbox GL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  map: {
    backgroundColor: 'pink',
    position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 60
  },
  tab: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#AAA',
    borderWidth: 5,
    flex: 1,
    justifyContent: 'center'
  },
  tabbar: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
  }
});

AppRegistry.registerComponent('rnMapViewTest', () => rnMapViewTest);
