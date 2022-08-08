import React from "react";
import PropTypes from "prop-types" 

const Notification = ({ message, children }) => {
  return <>
    <h2>{message}</h2>
    {children}
  </>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification