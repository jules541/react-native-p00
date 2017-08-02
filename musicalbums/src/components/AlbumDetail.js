import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
  render() {
    const {
      headerContentStyles,
      thumbnailStyle,
      thumbnailContainerStyle,
      headerTextStyles,
      imageStyle

    } = styles;
    return (
    <Card>
      <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
            style={thumbnailStyle} 
            source={{ uri: this.props.album.thumbnail_image }} 
            />
          </View>
          <View style={headerContentStyles}>
              <Text>{this.props.album.artist}</Text>
              <Text style={headerTextStyles}>{this.props.album.title}</Text>
          </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: this.props.album.image }} />
      </CardSection>

      <CardSection>
        <Button click={() => Linking.openURL(this.props.album.url)} textInside='Buy me!!! ' />
      </CardSection>
    </Card>

    );
  }
}
const styles = {
    headerContentStyles: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyles: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50, 
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },
      imageStyle: {
        height: 300,
        flex: 1,
        width: null

      }
};
