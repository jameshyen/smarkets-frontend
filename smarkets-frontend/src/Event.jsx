import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }

  componentDidMount() {
    const { event } = this.props.location.state;
    this.setState({
      event,
    });
  }

  render() {
    return (
      <div>
        {this.state.event.name}
      </div>
    );
  }
}

Event.propTypes = {
  location: PropTypes.object,
};

export default Event;
