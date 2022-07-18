import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import { Button, Theme, useTheme } from '@mui/material'
import ElectricityIcon from '../../icons/ElectricityIcon'

const generateStyles = (theme: Theme) => {
  return {
    appBarStyle: {
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #00000013',
      padding: '0 15px',
      position: 'fixed',
    },
    toolbarStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: 1,
    },
    dashboardTextStyle: {
      fontSize: '17px',
      fontWeight: 500,
      marginLeft: '256px',
      color: theme.palette.text.secondary,
    },
    badgeButtonStyle: { textTransform: 'none', padding: 0 },
    iconStyle: { marginRight: '7px' },
    textColor: {
      color: theme.palette.text.secondary,
    },
  }
}

export default function CustomAppBar() {
  const theme = useTheme()
  const classes = generateStyles(theme)

  return (
    <AppBar elevation={0} sx={classes.appBarStyle}>
      <Toolbar sx={classes.toolbarStyle}>
        <Typography
          variant='body1'
          component='div'
          sx={classes.dashboardTextStyle}
        >
          Dashboard
        </Typography>
        <Badge color='error' badgeContent={2}>
          <Button sx={classes.badgeButtonStyle}>
            <ElectricityIcon
              color={theme.palette.text.secondary}
              style={classes.iconStyle}
            />
            <Typography variant='body1' sx={classes.textColor}>
              What’s new
            </Typography>
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}
