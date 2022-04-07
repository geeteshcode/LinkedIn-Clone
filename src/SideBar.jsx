import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css';
const recentHash = (skill) =>{
    return(
        <div className='sidebar_hashtag'>
            <span>#</span>
            <p>{skill}</p>
        </div>
    )
}
function SideBar() {
  return (

    

    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://wallpaperaccess.com/full/123650.jpg" alt="" />
            <Avatar className='sidebar_avatar' src='https://media-exp1.licdn.com/dms/image/C4E03AQE1zFjWBo4PeQ/profile-displayphoto-shrink_800_800/0/1637259587521?e=2147483647&v=beta&t=B61MnhgyurZu0qbjyJT7W05SueZkBWGyk7lRLqV_7XQ'/>
            <h2>Geetesh Popli</h2>
            <h4>geeteshpopli16@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>21</p>
            </div>
            <div className="sidebar_stat">
                <p>View on post</p>
                <p className='sidebar_statNumber'>685</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p className='sidebar_bottom_heading'>Recent</p>
            {recentHash("React")}
            {recentHash("Java")}
            {recentHash("JavaScript")}
            {recentHash("Next.Js")}
        </div>
    </div>
  )
}

export default SideBar