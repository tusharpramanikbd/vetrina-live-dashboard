import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { WEBSITE_LOGO } from '../../utils/assetsPath'
import Drawer from './Drawer'
import SideMenuList from '../../data/SideMenuList'

import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
  setDrawerClose,
} from '../../features/menuDrawer/menuDrawerSlice'
import SideMenuItem from './SideMenuItem'

// React Component
const SideMenu = () => {
  const { isDrawerOpened } = useAppSelector(menuDrawerSelector)
  const dispatch = useAppDispatch()

  const handleDrawerState = () => {
    if (isDrawerOpened) {
      dispatch(setDrawerClose())
    } else {
      dispatch(setDrawerOpen())
    }
  }

  return (
    <Drawer variant='permanent' open={isDrawerOpened}>
      {/* Drawer Header */}
      <Box
        display='flex'
        justifyContent={isDrawerOpened ? 'space-between' : 'center'}
        mb={4}
        sx={{ padding: '29px 20px 0 20px' }}
      >
        {isDrawerOpened && <img src={WEBSITE_LOGO} alt='website logo' />}
        <IconButton onClick={handleDrawerState}>
          <MenuIcon />
        </IconButton>
      </Box>
      {/* End of Drawer Header */}

      {/* Drawer Body */}
      {SideMenuList.map((item) => (
        <SideMenuItem title={item.title || ''} Icon={item.icon} />
      ))}
      {/* End of Drawer Body */}
    </Drawer>
  )
}

export default SideMenu
