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
import TopBar from '../partials/topbar';
import { createStackNavigator } from 'react-navigation';
import Accountant from './accountant';
const accountants = []
type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
  this.skip=0
    this.state={"accountants":[]};
    this.getData(this.skip)
    
  };
  isCloseToBottom ({layoutMeasurement, contentOffset, contentSize}) {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

  getData(skip){
    const request = {"data":{"skip":skip,"sort":{"cat":"Recommended","order":"desc"}}}
    this.skip=this.skip + 1
    if ("service" in this.props.navigation.state.params) {
      request["data"]["searchVal"]=this.props.navigation.state.params.service
    }
    if ("location" in this.props.navigation.state.params) {
      request["data"]["zipcode"]=this.props.navigation.state.params.location
    }
    
    fetch('http://52.56.255.53/api/accountants', {
  method: 'POST',
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(request),
}).then((response) => response.json())
    .then((responseJson) => {
      let temp = this.state.accountants
      for (x=0 ; x<responseJson.data.length ; x++)
      {temp.push(responseJson.data[x])}
       this.setState({'accountants':temp});
       
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <TopBar navigate={this.props.navigation}/>
       <ScrollView onScroll={({nativeEvent}) => {
      if (this.isCloseToBottom(nativeEvent)) {
        this.getData(this.skip);
      }
    }}
    scrollEventThrottle={400}>
       {this.state.accountants.map(accountant => {
        return <Accountant name={accountant.company_name} address = {accountant.address} key={accountant.name} services={accountant.services} rating = {accountant.rating} contact={accountant.contact_no} email={accountant.email_id} aid = {accountant.id} navigate={this.props.navigation}/>
        })}
  </ScrollView>
       
        
        
      
        
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
