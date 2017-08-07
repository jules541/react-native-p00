//import library 
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//make a component 
export default class App extends Component {
  render() {  
    return (
        <View style={{ flex: 1 }}>
        <Header headerText='Streamio' /> 
        <AlbumList />
        </View>
    );
  }
}
// render it to screen 
AppRegistry.registerComponent('musicalbums', () => App);
