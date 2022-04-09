import React from 'react';
import './InputOptions.css';
function InputOptions({Icon, color, name}) {
  return (
    <div className='InputOptions'>
        <Icon style={{color : color}} />
        <p>{name}</p>
    </div>
  )
}

export default InputOptions