import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import { Button, useTheme } from '@mui/material'
import ElectricityIcon from '../../icons/ElectricityIcon'

export default function CustomAppBar() {
  const theme = useTheme()
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #00000013',
        padding: '0 15px',
        position: 'fixed',
      }}
    >
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
      >
        <Typography
          variant='body1'
          component='div'
          sx={{
            fontSize: '17px',
            fontWeight: 500,
            marginLeft: '256px',
            color: theme.palette.text.secondary,
          }}
        >
          Dashboard
        </Typography>
        <Badge color='error' badgeContent={2}>
          <Button sx={{ textTransform: 'none', padding: 0 }}>
            <ElectricityIcon
              color={theme.palette.text.secondary}
              style={{ marginRight: '7px' }}
            />
            <Typography variant='body1' color={theme.palette.text.secondary}>
              What’s new
            </Typography>
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}
