import React from 'react'
import { Box, Typography } from '@mui/material'
import CustomLink from '../CustomLink/CustomLink'

const generateStyles = () => {
  return {
    rootStyle: {
      width: '100%',
      height: '182px',
      background:
        'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
      marginTop: '60px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '40px 37px 0 37px',
    },
    welcomeTextStyle: {
      fontSize: '34px',
      color: '#FFFFFF',
    },
    customLinkStyle: {
      fontSize: '17px',
      fontWeight: 500,
      color: '#fff',
      textDecoration: 'underline #fff',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'flex-start',
    },
  }
}

const WelcomeSection = () => {
  const classes = generateStyles()
  return (
    <Box sx={classes.rootStyle}>
      <Typography variant='body1' sx={classes.welcomeTextStyle}>
        welcome Mario!
      </Typography>
      <CustomLink
        link='http://app.vetrinalive.it/fenoh-store'
        sxStyle={classes.customLinkStyle}
        text='app.vetrinalive.it/fenoh-store'
        hasIcon={true}
        fromWelcomeSection={true}
      />
    </Box>
  )
}

export default WelcomeSection
