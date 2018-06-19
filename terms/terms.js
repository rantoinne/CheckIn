import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TopBar from '../partials/topbar';
type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <TopBar navigate={this.props.navigation}/>
       <View>
       <Image source={require('../images/logo.png')} style = {styles.logo}/>
       </View>
        
        
      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo : {
    width: 200,
    height : 200,
    marginLeft: '25%',
    marginTop: 50,
    marginBottom: 50,
  }
});
