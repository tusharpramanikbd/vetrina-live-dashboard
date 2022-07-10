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
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { WEBSITE_LOGO } from '../../utils/assetsPath'
import Drawer from './Drawer'

import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
  setDrawerClose,
} from '../../features/menuDrawer/menuDrawerSlice'

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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: isDrawerOpened ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
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
