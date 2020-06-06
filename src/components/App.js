import '../styles/App.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youTube';
import VideoList from './VideoList';
import VideoDetal from './VideoDetail';
const KEY = 'youtube_api_key';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('kids');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  playVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="app-container ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetal video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.playVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
