import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class EachItem extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row',justifyContent:'flex-start'}}>
        <Image source={require('./reactImage.png')} style={{width: 50, height: 50}} />
        <View style={{flex: 1, justifyContent:'center',paddingLeft:4, alignItems: 'center'}}>
        <Text style={styles.text}>{this.props.item}</Text>
        </View>
        </View>
      </View>
      <View style={{backgroundColor:'#000',height:1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image : {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container:{
    height:50,
  },
  text: {
    fontSize:17,
  },
});
