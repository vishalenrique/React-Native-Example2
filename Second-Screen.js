import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {  createStackNavigator } from 'react-navigation';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
      title: 'Second Screen',
    };
  render() {
    return (
      // <ImageBackground source={require('./reactImage.png')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Image source={require('./reactImage.png')} style={{width: '100%', height: '50%'}} />
      </View>
        // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
