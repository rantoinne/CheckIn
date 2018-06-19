import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,TouchableOpacity
} from 'react-native';


type Props = {};
export default class TopBar extends Component<Props> {
  constructor(props){
    super(props);
    this.state =  {showBack : false} ;
    if (this.props.navigate.state.key == "Accountants" || this.props.navigate.state.key == "Profile"){
      this.state =  {showBack : true , backScreen : "HomeScreen"} ;
    }
  }
  render() {
    
    return (
      
      <View style={styles.topBar}>
      <View style={styles.NavButton}>
      <TouchableOpacity onPress={() => { this.props.navigate.openDrawer();}}>
      <Entypo   name='menu' size={32} color =  'white'/>
      </TouchableOpacity>
          </View>


          {this.state.showBack ? (<TouchableOpacity style={styles.otherButton} onPress={() => { this.props.navigate.navigate(this.state.backScreen)}}>
          <Text  style={styles.otherButtonText}>Back</Text>
          </TouchableOpacity>): null}

      </View> 
      
    );
  }
}

const styles = StyleSheet.create({
  
  containerText : {
    color: '#fff',
    fontWeight:  '700',
    textAlign: 'center' ,
    fontSize: 20 
  },
  NavButton :{
    borderColor: '#fff',

    width: 40
  },
  otherButtonText : {
    color : 'white',
    fontWeight : 'bold',
  },
  otherButton :{
    borderColor : 'white',
    borderWidth  : 1.5 ,
    paddingTop : 8 ,
    paddingBottom : 8 ,
    paddingLeft : 20 ,
    paddingRight : 20 ,
    borderRadius : 5
  },

  topBar : {
    display: 'flex',
    justifyContent : 'space-between',
    flexDirection: 'row' ,
    backgroundColor: '#f58220',
    padding: 8
  }
});
