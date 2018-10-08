import React, { Component } from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
  render() {
    return (
      <div className="Playlist">
        <input placeholder='New Playlist' />
        <TrackList
          tracks = {this.props.tracks}
          onAdd = {this.props.onAdd}
          tracks = { this.props.playlistTracks }
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
