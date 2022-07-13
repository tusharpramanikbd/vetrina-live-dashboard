import React from 'react'
import Box from '@mui/material/Box'
import CustomAppBar from '../CustomAppBar/CustomAppBar'
import DetailsSection from '../DetailsSection/DetailsSection'

const MainSection = () => {
  return (
    <Box flexGrow={1} sx={{ marginBottom: '50px' }}>
      <CustomAppBar />
      <DetailsSection />
    </Box>
  )
}

export default MainSection
