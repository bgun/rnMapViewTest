import React from 'react-native';

let {
  StyleSheet,
  Text,
  View
  } = React;

export default class MapViewExample extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <View style={ styles.fpo }></View>
    );
  }

}

let styles = StyleSheet.create({
  fpo: {
    backgroundColor: 'blue',
    flex: 1
  }
});