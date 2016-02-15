import React from 'react-native';

let {
  MapView,
  StyleSheet,
  Text,
  View
} = React;

export default class MapViewExample extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <MapView
        style={ styles.map }
        region={{
          latitude: 40.74,
          longitude: -74,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        annotations={[{
          latitude: 40.74,
          longitude: -74,
          title: 'Hello MapView'
        }]}
        overlays={[{
          coordinates:[
            {latitude: 32.47, longitude: -107.85},
            {latitude: 40.75, longitude: -73.9},
            {latitude: 35.27, longitude: -83.25},
            {latitude: 32.47, longitude: -107.85},
          ],
          strokeColor: '#f00A',
          lineWidth: 5,
        }]}
      />
    );
  }

}

let styles = StyleSheet.create({
  map: {
    flex: 1
  }
});