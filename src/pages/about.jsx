import React from 'react'
import { Box } from '@mui/material';
import IdCard from '../components/IDCard/IdCard';
const about = ({darkmode}) => {
  return (
     <Box>

        <IdCard
         darkMode={darkmode}
      />
     </Box>
  )
}

export default about
