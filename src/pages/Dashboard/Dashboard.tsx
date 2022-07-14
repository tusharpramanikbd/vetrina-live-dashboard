import React from 'react'
import Box from '@mui/material/Box'

import SideMenu from '../../components/SideMenu/SideMenu'
import MainSection from '../../components/MainSection/MainSection'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <MainSection />
    </Box>
  )
}

export default Dashboard
