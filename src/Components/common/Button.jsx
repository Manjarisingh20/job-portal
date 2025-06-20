import React from 'react';

function Button({ label, onClick }) {
  return (
    <button className='button-jobdetails'
      onClick={onClick}
      >
      {label}
    </button>
  );
}

export default Button;
