import { Box } from '@mui/material'
import React from 'react'
import CardSection from '../CardSection/CardSection'
import WelcomeSection from '../WelcomeSection/WelcomeSection'

const generateStyles = () => {
  return {
    rootStyle: { width: '100%' },
  }
}

const DetailsSection = () => {
  const classes = generateStyles()
  return (
    <Box sx={classes.rootStyle}>
      <WelcomeSection />
      <CardSection />
    </Box>
  )
}

export default DetailsSection
