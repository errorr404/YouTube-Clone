import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search'
const API_KEY= 'AIzaSyAwN3v6hMJfe1b4UnRmLZX9fwVKpSDGyfg';
YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
console.log(data);
});
class Container extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default Container;
