import React from 'react';

function Button({ label, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '120px',
        right: '40px',
        backgroundColor: '#54bead',
        color: 'white',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
      {label}
    </button>
  );
}

export default Button;
