import React from 'react';
import './Alert.css';

interface Props {
  message: string;
}

const AlertComponent = ({ message = 'this is an alert' }: Props): JSX.Element => (
  <div className="alert">
    <span>{message}</span>
  </div>
);

export default AlertComponent;
