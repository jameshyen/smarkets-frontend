import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const noCors = 'https://cors-anywhere.herokuapp.com/';
const eventInfo = 'https://fe-api.smarkets.com/v0/events/id/';

const waitMessage = (
  <div className="row">
    <div className="col-md-3" />
    <h4 className="col-md">Fetching detailed info...</h4>
    <div className="col-md-3" />
  </div>
);

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
        <div className="row">
          <div className="col-md-3" />
          <h1 className="col-md">{this.state.event.name}</h1>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3" />
          <h3 className="col-md">{`Category: ${this.state.event.parent_name}`}</h3>
          <div className="col-md-3" />
        </div>
        {this.state.loading ? waitMessage :
        <div>
          <div className="row">
            <div className="col-md-3" />
            <h3 className="col-md">{`Event type: ${this.state.event.event_type.charAt(0).toUpperCase() + this.state.event.event_type.slice(1)}`}</h3>
            <div className="col-md-3" />
          </div>
          <div className="row">
            <div className="col-md-3" />
            <h3 className="col-md">{`Start date: ${moment(this.state.event.start_datetime).fromNow()}`}</h3>
            <div className="col-md-3" />
          </div>
          <div className="row">
            <div className="col-md-3" />
            <Link className="col-md" to="/">Go back...</Link>
            <div className="col-md-3" />
          </div>
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
