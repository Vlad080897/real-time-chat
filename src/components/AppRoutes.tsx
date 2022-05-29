import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from "react-router";
import { Context } from '..';
import { privatPaths, publicPaths } from '../routes';
import Chat from './Chat';
import Login from './Login';

const AppRoutes = () => {
  const auth = useContext(Context)
  const [user] = useAuthState(auth.auth);

  return user ?
    (
      <Routes>
        {privatPaths.map(({ path, Component }) => {
          return <Route path={path} element={<Component />} />
        })}
        <Route path='*' element={<Chat />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicPaths.map(({ path, Component }) => {
          return <Route path={path} element={<Component />} caseSensitive />
        })}
        <Route path='*' element={<Login />} />
      </Routes>
    )
}

export default AppRoutes
