import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

type Props = {};
handleSearch = () => {
    
  }
export default class SearchBox extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {service: '',location : ''};
  }
  render() {
    return (
      <View style={styles.outerCont}>
      
      <View style={styles.textInputCont}>
      <TextInput style={styles.textInputS} underlineColorAndroid='transparent' placeholder="Enter Serivce"  onChangeText={(service) => this.setState({'service' : service})}/>
      </View>
      <View style={styles.textInputCont}>
      <TextInput style={styles.textInputS} underlineColorAndroid='transparent' placeholder="Enter Location" onChangeText={(location) => this.setState({'location':location})}/>
      </View>
      <View style={styles.searchButton}>
      <Button title="Search" 
  color="#f58220"  onPress = {()=>{this.props.navigate.navigate('Accountants',{'service' : this.state.service  , 'location' : this.state.location});}} style = {{padding: 20}}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 7
  },
  outerCont : {
    marginTop: 20
  },
  textInputCont : {
    marginTop: 8
  }
  ,
  textInputS: { 
    borderColor: '#aaa',
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    textAlign:  'center' ,
    height: 40,
    backgroundColor: '#fff'
  },
  searchButton : {
    width: '60%',
    marginLeft: '20%',
    marginTop: 35,
  }
});

