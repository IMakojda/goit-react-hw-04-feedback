import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ text }) {
  return <p className="notifi">{text}</p>;
}

export default Notifications;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};