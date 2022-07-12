import { Box } from '@mui/material'
import React from 'react'
import CardSection from '../CardSection/CardSection'
import WelcomeSection from '../WelcomeSection/WelcomeSection'

const DetailsSection = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <WelcomeSection />
      <CardSection />
    </Box>
  )
}

export default DetailsSection
