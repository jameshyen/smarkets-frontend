import React, { Component } from 'react';

const noCors = 'https://cors-anywhere.herokuapp.com/';
const popularEvents = 'https://fe-api.smarkets.com/v0/events/popular/';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch(`${noCors}${popularEvents}`)
      .then(response => response.json())
      .then((json) => {
        const { results } = json;
        this.setState({
          events: results,
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.events.map((event, index) => <li key={index}>{event.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;
