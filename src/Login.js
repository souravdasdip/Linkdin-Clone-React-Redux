import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import './Login.css';
import { loginToApp } from './features/userSlice';

function Login() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [profilePic, setprofilePic] = useState('')
  const dispatch = useDispatch();

  //Register from Login page
  const register = () => {
    if(!name){
      return alert("Enter full name")
    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic
      })
      .then(() => {
        dispatch(
          loginToApp({
            email : userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic     
          })
        )
      })
    })
    .catch(error => alert(error))
  }

  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispatch(
        loginToApp({
          email : userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL
        })
      )
    })
    .catch(error => alert(error))
  }

  return (
    <div className='login'>
      <h1>LinkedIn Clone</h1>
      <form>
        <input value={name} onChange={e => setname(e.target.value) } type="text" placeholder="Full name (required if registering)"/>
        <input value={email} onChange={e => setemail(e.target.value) } type="email" placeholder="Email"/>
        <input value={password} onChange={e => setpassword(e.target.value) } type="password" placeholder="Password" />
        <input value={profilePic} onChange={e => setprofilePic(e.target.value) } type="text" placeholder="Profile pic URL"/>
        <button type="submit" onClick={login} >Sign in</button>
      </form>

      <p>Not a member? {" "}
        <span className="register" onClick={register}>Register</span>
      </p>
    </div>
  )
}

export default Login
