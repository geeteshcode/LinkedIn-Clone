import { Avatar } from '@mui/material';
import React from 'react'
import InputOptions from './InputOptions';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './post.css';



function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}/>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOptions Icon={ThumbUpOutlinedIcon} name='Like' color="gray" />
            <InputOptions Icon={CommentOutlinedIcon} name='Comment' color="gray" />
            <InputOptions Icon={ShareOutlinedIcon} name='Share' color="gray" />
            <InputOptions Icon={SendOutlinedIcon} name='Send' color="gray" />
        </div>
    </div>
  )
}

export default Post