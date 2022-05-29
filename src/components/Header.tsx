import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Context } from '..';
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth);
  
  const logOut = async () => {
    await signOut(auth)
  }

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          {user ?
            <Button variant='outlined' color='inherit' onClick={logOut}>Log out</Button>
            :
            <Button variant='outlined' color='inherit' onClick={toLogin}>Log in</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

