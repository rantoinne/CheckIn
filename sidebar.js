import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View,StyleSheet , Button } from 'react-native';
import PropTypes from 'prop-types';
class DrawerContent extends Component {
navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }
render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Button
         title='Three'
         buttonStyle={styles.button}
         onPress={this.navigateToScreen('Three')}/>
        <Button
         title='Four'
         buttonStyle={styles.button}
         onPress={this.navigateToScreen('Four')}/>
        <Button
         title='Five'
         buttonStyle={styles.button}
         onPress={this.navigateToScreen('Five')}/>
        </ScrollView>
      </View>
    );
  }
}
DrawerContent.propTypes = {
  navigation: PropTypes.object
};
const styles = StyleSheet.create({
  container: {
  paddingTop: 35,
  flex: 1,
},
button: {
  backgroundColor: '#E71D36',
}
})
export default DrawerContent;