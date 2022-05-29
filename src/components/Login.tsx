import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import Loader from './Loader';

const Login = () => {
  const { auth } = useContext(Context);
  const [, loading] = useAuthState(auth);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
  if (loading) {
    return <Loader />
  }

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      height={window.innerHeight - 64}
    >
      <Box
        sx={{
          width: '200px',
          margin: '0 auto',
          padding: '3rem',
          backgroundColor: 'lightblue',
          borderRadius: 5,
          
        }}
      >
        <Button variant='outlined' onClick={login}>Login with Google</Button>
      </Box>
    </Box>
  )
}

export default Login