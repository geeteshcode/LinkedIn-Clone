
import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOption.css';

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_icon" src={avatar} />}
    <div className="headerOption_title">
        {title}
    </div>

    </div>
  )
}

export default HeaderOption