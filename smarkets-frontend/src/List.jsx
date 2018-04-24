import React, { Component } from 'react';

class List extends Component {
  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://smarkets.com/v0/listings/slug/sport/horse-racing/?period=upcoming`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>Hello.</div>
    );
  }
}

export default List;
