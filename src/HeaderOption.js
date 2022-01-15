import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'

function HeaderOption({avatar, Icon , title, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="header__option">
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
      {avatar && <Avatar src={user?.photoURL }>{user?.email[0]}</Avatar>}
    </div>
  )
}

export default HeaderOption
