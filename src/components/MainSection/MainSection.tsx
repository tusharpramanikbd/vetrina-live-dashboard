import React from 'react'
import Box from '@mui/material/Box'
import CustomAppBar from '../CustomAppBar/CustomAppBar'
import DetailsSection from '../DetailsSection/DetailsSection'

const generateStyles = () => {
  return {
    rootStyle: { marginBottom: '50px', flexGrow: 1 },
  }
}

const MainSection = () => {
  const classes = generateStyles()
  return (
    <Box sx={classes.rootStyle}>
      <CustomAppBar />
      <DetailsSection />
    </Box>
  )
}

export default MainSection
