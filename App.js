import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './routes';
type Props = {};
const accountants=[{name:'DNS' , address : 'London'} , {name : 'DNS Accountant', address : 'Harrow'}]
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Router/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
