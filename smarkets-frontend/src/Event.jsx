import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { noCors, wrapByThreeColumns } from './Helpers';

const eventInfo = 'https://fe-api.smarkets.com/v0/events/id/';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { event } = this.props.location.state;
    this.setState({
      event,
      loading: true,
    });
    fetch(`${noCors}${eventInfo}${event.id}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          event: json.event,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        {wrapByThreeColumns(<h1 className="col-md">{this.state.event.name}</h1>)}
        {wrapByThreeColumns(<h3 className="col-md">{`Category: ${this.state.event.parent_name}`}</h3>)}
        {this.state.loading ?
          wrapByThreeColumns(<h4 className="col-md">Fetching detailed info...</h4>) :
          <div>
            wrapByThreeColumns(<h3 className="col-md">{`Event type: ${this.state.event.event_type.charAt(0).toUpperCase() + this.state.event.event_type.slice(1)}`}</h3>)
            wrapByThreeColumns(<h3 className="col-md">{`Start date: ${moment(this.state.event.start_datetime).fromNow()}`}</h3>)
            wrapByThreeColumns(<Link className="col-md" to="/">Go back...</Link>)
          </div>
        }
      </div>
    );
  }
}

Event.propTypes = {
  location: PropTypes.object,
};

export default Event;
