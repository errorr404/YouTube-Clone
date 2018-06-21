import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './video_list';
const API_KEY= 'AIzaSyAwN3v6hMJfe1b4UnRmLZX9fwVKpSDGyfg';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // array for videos
      videos: []
    };
  YTSearch({key:API_KEY, term: 'react'},(videos)=>{
    // update the list of videos
  //  console.log(videos);
    this.setState(()=>{
        return {
        videos: videos
        };
    });
    //this.setState ({ videos });
    });
  }
  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos}/>
      </div>
    );
  }
}

export default Container;
