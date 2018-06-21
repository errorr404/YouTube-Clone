import _ from 'lodash'
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search'
import VideoDetails from './video_detail'
import VideoList from './video_list';
const API_KEY= 'AIzaSyAwN3v6hMJfe1b4UnRmLZX9fwVKpSDGyfg';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // array for videos
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('react');
  }

  videoSearch (term) {
    YTSearch({key:API_KEY, term: term},(videos)=>{
      // update the list of videos
    //  console.log(videos);
      this.setState(()=>{
          return {
          videos: videos,
          selectedVideo: videos[0]
          };
      });
      //this.setState ({ videos });
      });
  }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
}

export default Container;
