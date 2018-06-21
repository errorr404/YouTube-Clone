import React, { Component } from 'react';

class SearchBar extends React.Component{
  onInputChange(e) {
    const input= e.target.value;
    console.log(input);
  }
  render() {
    return (
      <div>
        <input onChange={this.onInputChange}/>
      </div>
    );
  }
}
export default SearchBar;
