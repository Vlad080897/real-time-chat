import { Box, Button, TextField } from '@mui/material';
import { collection, doc, DocumentData, limitToLast, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import Massage from './Massage';

const Chat = () => {
  const { db, auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const [currentMassage, setCurrentMassage] = useState('')
  const [massages, setMassages] = useState<DocumentData[]>([]);
  const collectionRef = collection(db, 'massages')
  const bottomRef = useRef()

  useEffect(() => {
    const q = query(collectionRef, orderBy("time"), limitToLast(20));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const massages: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        massages.push(doc.data());
      });
      setMassages(massages)
    });

    return unsubscribe
  }, [])

  useEffect(() => {
    const ref: HTMLElement = bottomRef.current!
    ref.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    })
  }, [massages])

  const sendMassage = async () => {
    setDoc(doc(collectionRef), {
      uid: user?.uid,
      dispayName: user?.displayName,
      photoUrl: user?.photoURL,
      text: currentMassage,
      time: serverTimestamp()
    });
    setCurrentMassage('');
  }
  return (
    <Box
      display={'flex'}
      justifyContent='center'
      width='50%'
      margin='0 auto'
      flexDirection='column'
    >
      <Box
        sx={{
          width: '100%',
          height: window.innerHeight - 300,
          border: '1px solid black',
          mt: 2,
          borderRadius: '10px',
          p: 2,
          boxSizing: 'border-box',
          overflowY: 'auto'
        }}
      >
        <Massage massages={massages} />
        <Box ref={bottomRef}></Box>
      </Box>
      <TextField
        sx={{ mt: 1 }}
        value={currentMassage}
        onChange={(e) => setCurrentMassage(e.target.value)} />
      <Button
        variant='contained'
        sx={{ width: '100px', mt: 1 }}
        onClick={sendMassage}
      >
        Send
      </Button>
    </Box >
  )
}

export default Chat