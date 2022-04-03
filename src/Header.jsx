import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
        {/* Left Header */}
    <div className="header_left">
    
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn_Logo" />
    <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder='Search' />
    </div>
    </div>

    {/* Right Header */}
    <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Job" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4E03AQE1zFjWBo4PeQ/profile-displayphoto-shrink_800_800/0/1637259587521?e=2147483647&v=beta&t=B61MnhgyurZu0qbjyJT7W05SueZkBWGyk7lRLqV_7XQ' title="Me" />
    </div>
    </div>
  )
}

export default Header