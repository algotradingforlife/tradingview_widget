import React from 'react';
import './Button.css';

const Button = ({ onClick, children }) => {
  return <button className='buttonCustom' onClick={onClick}>{children}</button>;
};

export default Button;
