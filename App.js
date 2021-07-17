import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Scan from './screens/scanScreen';

export default class App extends React.Component{
  render(){
    return (
      <Scan></Scan>
    );
  }
}
