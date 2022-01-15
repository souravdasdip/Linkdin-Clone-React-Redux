import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setinput] = useState('');
  const [posts, setposts] = useState([]) ;
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setposts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setinput('')
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} type="text" onChange={e => setinput(e.target.value)}/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color={"#70B5F9"}/>
          <InputOption Icon={Subscriptions} title="Video" color={"#e7a33e"}/>
          <InputOption Icon={EventNote} title="Event" color={"#c0cbcd"}/>
          <InputOption Icon={CalendarViewDay} title="Write" color={"#7fc15e"}/>
        </div>
      </div>

      {/* Flipmove animation uses in Posts */}
      <FlipMove >
        {posts.map(({id, data: {name, description, message,photoURL}}) => (
            <Post 
              key={id}  
              name={name} 
              description={description} 
              message={message} 
              photoURL={photoURL}
            />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
