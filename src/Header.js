import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter,Chat, Notifications } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import { logoutToApp } from './features/userSlice';


function Header() {
  const dispatch = useDispatch();
  
  const logoutFromApp = () => {
    auth.signOut();
    dispatch(logoutToApp())
  }


  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linked in" />
        
        {/* Header Search */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Header Right */}
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar={true} onClick={logoutFromApp}/>
      </div>

    </div>
  )
}

export default Header
