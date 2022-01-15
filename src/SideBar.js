import React from 'react';
import './SideBar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return(
    <div className="sidebar__recentItem">
      <span># {topic}</span>
    </div>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
        <Avatar className="sidebar__avatar" src={user.photoURL}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("gaming")}
        {recentItem("guitar playing")}
        {recentItem("football")}
      </div>
    </div>
  )
}

export default SideBar
