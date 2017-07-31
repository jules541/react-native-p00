//import library 
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//make a component 
export default class App extends Component {
  render() {  
    return (
        <Header headerText='Album!!!' /> 
        
    );
  }
}
// render it to screen 
AppRegistry.registerComponent('musicalbums', () => App);
