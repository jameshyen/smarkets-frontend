import React from 'react';
import PropTypes from 'prop-types';

const ListEntry = ({ event }) => (
  <li>
    {event.name}
  </li>
);

ListEntry.propTypes = {
  event: PropTypes.object, // eslint-disable-line
};

export default ListEntry;
