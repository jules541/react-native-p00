import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  /// state the intial state to a empty album array
  state = ({ 
    hipHopAlbums: [] 
  });
  
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/6lve9')
      .then(response => {
        console.log(response.data);
        this.setState({ hipHopAlbums: response.data.hipHopAlbums });
        console.log(this.state);
      });
  }  
  
    renderIndividualAlbums() {
        return (
          this.state.hipHopAlbums.map((album, index) => {
            return (album && <AlbumDetail key={`${album.title}_${index}`} album={album} />);
          }
        ));
    }

  render() {
    return (
    <ScrollView>
      {this.renderIndividualAlbums()}
    </ScrollView>
    ); 
  }
}

