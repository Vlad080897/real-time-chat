import Chat from './components/Chat';
import Login from './components/Login';
import { LOGIN_PATH, CHAT_PATH } from './utils/consts';

export const publicPaths = [
    {
        path: LOGIN_PATH,
        Component: Login
    }
]

export const privatPaths = [
    {
        path: CHAT_PATH,
        Component: Chat
    }
]