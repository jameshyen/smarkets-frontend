import React, { Component } from 'react';
import PropTypes from 'prop-types';

const noCors = 'https://cors-anywhere.herokuapp.com/';
const eventInfo = 'https://fe-api.smarkets.com/v0/events/id/';

const waitMessage = (
  <div className="row">
    <div className="col-md-4" />
    <h4 className="col-md">Please wait...</h4>
    <div className="col-md-4" />
  </div>
);

class Event extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.event);
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
        console.log(json);
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
          <div className="col-md-4" />
          <h1 className="col-md">{this.state.event.name}</h1>
          <div className="col-md-4" />
        </div>
        <div className="row">
          <div className="col-md-4" />
          <h3 className="col-md">{this.state.event.parent_name}</h3>
          <div className="col-md-4" />
        </div>
        {this.state.loading ? waitMessage :
        <div>
          <div className="row">
            <div className="col-md-4" />
            <h3 className="col-md">{`Event type: ${this.state.event.event_type.charAt(0).toUpperCase() + this.state.event.event_type.slice(1)}`}</h3>
            <div className="col-md-4" />
          </div>
          <div className="row">
            <div className="col-md-4" />
            <h3 className="col-md">{`Start date: ${this.state.event.start_datetime}`}</h3>
            <div className="col-md-4" />
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
