import React from 'react'
import Box from '@mui/material/Box'
import CustomAppBar from '../CustomAppBar/CustomAppBar'
import DetailsSection from '../DetailsSection/DetailsSection'

const MainSection = () => {
  return (
    <Box flexGrow={1}>
      <CustomAppBar />
      <DetailsSection />
    </Box>
  )
}

export default MainSection