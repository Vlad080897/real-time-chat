import { Box } from '@mui/system'
import React from 'react'

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: window.innerHeight - 64,
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >
      <div className="lds-hourglass"></div>
    </Box>


  )
}

export default Loader