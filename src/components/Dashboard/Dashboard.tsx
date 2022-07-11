import React from 'react'
import Box from '@mui/material/Box'

import SideMenu from '../SideMenu/SideMenu'
import MainSection from '../MainSection/MainSection'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <MainSection />
    </Box>
  )
}

export default Dashboard
