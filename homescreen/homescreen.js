import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';
import SearchBox from './searchBox';
import TopBar from '../partials/topbar';
import { createStackNavigator } from 'react-navigation';
type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
      <TopBar navigate={this.props.navigation}/>
       <View>
       <Image source={require('../images/logo.png')} style = {styles.logo}/>
       </View>
       <Text style = {styles.tagLine}>Find An Accountant in UK</Text>
        <SearchBox navigate={this.props.navigation}/>
        
      
        
      </ScrollView>
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
  },
  tagLine : {
    fontWeight:  '900' ,
    textAlign: 'center' ,
    fontSize: 20 , 
    
  }
});
