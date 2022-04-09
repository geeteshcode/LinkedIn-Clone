import React, { useEffect, useState } from 'react'
import './feed.css';
import Post from "./Post";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOptions from './InputOptions';
import { db } from './firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Feed() {
    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState("");
   

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Geetesh",
            description: "Test Desc",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
    }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form className='feed_form' action="">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Start a post' />
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} color='#7085F9' name='Photo' />
                <InputOptions Icon={YouTubeIcon} color='lightgreen' name='Video' />
                <InputOptions Icon={WorkOutlineIcon} color='lightblue' name='Job' />
                <InputOptions Icon={CalendarViewDayIcon} color='pink' name='Write a Article' />
            </div>
        </div>

        {/* Post */}
        {
            posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                id={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))
        }
       
    </div>
  )
}

export default Feed