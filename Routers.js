import React, { Component } from 'react';
import HomeScreen from './homescreen/homescreen';
import terms from './terms/terms';
import Accountants from './Accountants/accountants';
import AccProfile from './profile/profile';
import {DrawerNavigator , DrawerItems} from 'react-navigation';
import {SideBar} from './sidebar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';
const routes= {
  HomeScreen: {
    screen: HomeScreen
  },
  Terms: {
    screen: terms
  },
  Accountants: {
    screen: Accountants
  },
  Profile: {
    screen: AccProfile
  },
  }
  const options = {
    contentComponent: (props) => (
      <View  style={styles.sideBar}>
        <ScrollView>
          <DrawerItems activeBackgroundColor ='white' activeLabelStyle = {styles.activeLabelStyle}
          inactiveLabelStyle = {styles.textLabel}
            {...props}
            getLabel = {(scene) => (
              (props.getLabel(scene)=="Accountants" || props.getLabel(scene)=="Profile" ) ? (null) : (
              <View style={styles.NameCont}>
              <Text>{props.getLabel(scene)}</Text>
            </View>) 

            )} 
          />


          </ScrollView>
          <View style={styles.footerCont}>
          <Text style={styles.footerText}>Copyright @ Chekin 2018</Text>
          </View>
        </View>
      ),
    order: ['HomeScreen', 'Terms',  "Accountants" , "Profile"],
}
const styles = StyleSheet.create({
  NameCont : {
    padding : 10,
    borderBottomWidth : 1, 
    borderColor : 'white',
    width : 300
    },
  sideBar : {
    backgroundColor : "#f58220",
    minHeight : '100%'
  },
  activeLabelStyle :{
    color :  "#f58220",
  },
  textLabel : {
    color : 'white',
  }
  ,footerCont :{
    padding : 10
  },
  footerText : {
    color : 'white',
    fontWeight : 'bold',
    textAlign : 'center'
  }
})
export default DrawerNavigator(routes,options );