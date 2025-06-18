import React from 'react';
import '../../App.css';

function LButton({ label, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`lbutton-base ${className}`}
      type="button"
    >
      {label}
    </button>
  );
}

export default LButton;
