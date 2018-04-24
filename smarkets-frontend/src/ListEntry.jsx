import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListEntry = ({ event }) => (
  <li className="list-group-item">
    <Link to="/event">{event.name}</Link>
  </li>
);

ListEntry.propTypes = {
  event: PropTypes.object, // eslint-disable-line
};

export default ListEntry;
