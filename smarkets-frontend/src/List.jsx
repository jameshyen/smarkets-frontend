import React, { Component } from 'react';

import ListEntry from './ListEntry';
import { noCors, wrapByNColumns } from './Helpers';

const popularEvents = 'https://fe-api.smarkets.com/v0/events/popular/';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`${noCors}${popularEvents}`)
      .then(response => response.json())
      .then((json) => {
        const { results } = json;
        this.setState({
          events: results,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1 className="col-md" style={{ textAlign: 'center' }}>Latest Events</h1>
        </div><br />
        {this.state.loading ?
          <div className="row">
            <h3 className="col-md" style={{ textAlign: 'center' }}>Fetching...</h3>
          </div> :
          wrapByNColumns(
            <ul className="col-md list-group">
              {this.state.events.map((event, index) => <ListEntry key={index} event={event} />)}
            </ul>,
            4,
          )
        }
      </div>
    );
  }
}

export default List;
