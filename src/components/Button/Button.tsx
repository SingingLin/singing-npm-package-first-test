import * as React from 'react';
// import './button.css';
import './button.scss';
import ButtonCss from './moduleStyles/button.module.css';
import ButtonScss from './moduleStyles/button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
}

/**
 * Button
 * @param children
 * @returns
 */
export const Button = ({ children, primary = false, onClick, backgroundColor = '#D1D5DB', color }: ButtonProps): JSX.Element => {
  const buttonStyles = {
    backgroundColor: primary ? '#2563EB' : backgroundColor,
    color: primary ? '#F3F4F6' : color
  };

  return (
    <div className="button-container">
      <button className={`button ${ButtonCss.error} ${ButtonScss['error-full']}`} type="button" onClick={onClick} style={buttonStyles}>
        {children}
      </button>
    </div>
  );
};
