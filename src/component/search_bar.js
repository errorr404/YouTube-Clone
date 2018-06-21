import React, { Component } from 'react';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      term: ''
    };
  }
  onInputChange(e) {
    const input= e.target.value;
    this.setState(()=>{
       return {
         term: input
       };
    });
  //  console.log(input);
  }
  render() {
    return (
      <div>
        <input
          value ={this.state.term}
          onChange={this.onInputChange}/>
        <p>value of state; {this.state.term}</p>
      </div>
    );
  }
}
export default SearchBar;
