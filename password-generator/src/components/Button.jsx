import React from 'react'
// import "./styles.css";

const Button = ({ onClick, text, customClass }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;