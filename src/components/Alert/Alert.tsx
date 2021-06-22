import React from 'react';
import './Alert.css';

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div className="alert">
    <span>{message}</span>
  </div>
);

export default AlertComponent;
