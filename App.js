import React from "react";
import { SectionList, FlatList, StyleSheet, Text, View } from "react-native";
import EachItem from "./Each-Item";
import SecondScreen from "./Second-Screen"
import Home from "./Home"
import {  createStackNavigator } from 'react-navigation';

const Application = createStackNavigator({
  Home: { screen: Home },
  Second: { screen: SecondScreen },
});
export default Application;
