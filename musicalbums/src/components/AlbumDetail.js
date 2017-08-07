import React, { Component } from 'react';
import { Text, Image, Linking, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isTouchingArtist: false
    };
  }
  
  onTouch() {
    this.setState({
      isTouchingArtist: !this.state.isTouchingArtist
    });
    //if the user presses the artist name display the album name else stay as the artist name 
  }
  // example() {
  //   return (Linking.openURL('https://www.youtube.com/user/TravisScottVEVO').catch(err => console.log('error has occured', err)));
  // }

render() {
    const {
      headerContentStyles,
      headerTextStyles,
      imageStyle

    } = styles;
    return (
    <Card>
      <CardSection>

          <TouchableOpacity style={headerContentStyles} onPress={() => this.onTouch()}>
            <Text style={headerTextStyles}> 
              {this.state.isTouchingArtist ? this.props.album.title : this.props.album.artist}  
            </Text>
          </TouchableOpacity>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: this.props.album.image }} />
      </CardSection>

      <CardSection>
        <Button  
        click={() => Linking.openURL(this.props.album.url)} textInside='Stream' 
        />
      </CardSection>
    </Card>

    );
  }
}

const styles = {
    headerContentStyles: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    },
    headerTextStyles: {
      fontSize: 21,
      fontWeight: 'bold'
    },
    hiddenStyles: {
      display: 'none'  
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
};
