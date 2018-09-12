import React from "react";
import { SectionList, FlatList, StyleSheet, Text, View } from "react-native";
import EachItem from "./Each-Item";
import SecondScreen from "./Second-Screen"
 import {  createStackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
      title: 'Home',
    };
  render() {
    return (
    <View style={styles.container}>
        <FlatList
          data = {['Here','is','the','Flatlist']}
          renderItem = {({item}) =><EachItem item={item}></EachItem>}
          keyExtractor={(item, index) => index.toString()}
          />

        <View style = {styles.nextSection}>
          <Text style = {{
            fontSize:20,
            // color:'blue'
          }}
             onPress = { () => this.props.navigation.navigate('Second')}
          >SectionList</Text>
        </View>

        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <EachItem item={item}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#aaa',
    paddingLeft:10,
    paddingRight:10,
  },
  nextSection: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  sectionHeader:{
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});
