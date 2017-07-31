import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles; 
    return (
    <View style={viewStyle}>
      <Text style={textStyle}>{this.props.headerText}</Text>
    </View>
    ); 
  }
}  

const styles = {
      textStyle: {
        fontSize: 20 
      },
      viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
      }
};
