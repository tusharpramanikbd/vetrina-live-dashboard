import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SvgIcon from '@mui/material/SvgIcon'

import { WEBSITE_LOGO } from '../../utils/assetsPath'
import Drawer from './Drawer'
import SideMenuItems from '../../data/SideMenuItems'

import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
  setDrawerClose,
} from '../../features/menuDrawer/menuDrawerSlice'
import { green } from '@mui/material/colors'

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
      <Divider />
      <List>
        {SideMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isDrawerOpened ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDrawerOpened ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {/* <SvgIcon component={item.icon} sx={{ color: green[500] }} /> */}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: isDrawerOpened ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu
