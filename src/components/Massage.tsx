import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DocumentData } from 'firebase/firestore'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '..'

const commonStyles = {
  display: 'flex',
  width: '100%',
  margin: '1rem 0',
}

const commonTextStyles = {
  mt: 1,
  padding: '5px',
  borderRadius: '10px'
}

const myMassages = {
  ...commonStyles,
  justifyContent: 'flex-end',
}

const otherMassages = {
  ...commonStyles,
  justifyContent: 'flex-start',
}

const Massage: React.FC<IMassageProps> = ({ massages }) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <>
      {massages?.map(m => {
        return (
          <Box sx={m.uid === user?.uid ? myMassages : otherMassages}>
            <Box display={'flex'} flexDirection='column' >
              <Avatar src={m.photoUrl} sx={m.uid === user?.uid ? { ml: 'auto' } : {}} />
              <Typography
                sx={{ fontWeight: 'bold' }}
              >
                {m.dispayName}
              </Typography>
              <Typography
                sx={m.uid === user?.uid ?
                  {
                    ...commonTextStyles,
                    backgroundColor: '#add8e6',
                  }
                  :
                  {
                    ...commonTextStyles,
                    backgroundColor: '#90ee90',
                  }}
              >
                {m.text}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export default Massage

interface IMassageProps {
  massages: DocumentData[]
}