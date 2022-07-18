import React from 'react'
import Box from '@mui/material/Box'

import SideMenu from '../../components/SideMenu/SideMenu'
import MainSection from '../../components/MainSection/MainSection'

const generateStyles = () => {
  return {
    rootStyle: { display: 'flex' },
  }
}

const Dashboard = () => {
  const classes = generateStyles()
  return (
    <Box sx={classes.rootStyle}>
      <SideMenu />
      <MainSection />
    </Box>
  )
}

export default Dashboard
