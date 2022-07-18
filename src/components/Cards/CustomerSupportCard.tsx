import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeadphonesIcon from '../../icons/HeadphonesIcon'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    boxStyle: { display: 'flex', alignItems: 'center' },
    avatarStyle: {
      marginRight: '22px',
    },
    textStyle: { fontSize: '15px' },
    buttonStyle: {
      textTransform: 'none',
      width: '168px',
      height: '50px',
      bgcolor: '#21B8F9',
      fontWeight: 600,
    },
  }
}

const CustomerSupportCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      HeaderIcon={HeadphonesIcon}
      title='Customer support'
      CardBody={
        <Box sx={classes.boxStyle}>
          <Avatar
            src='https://randomuser.me/api/portraits/men/2.jpg'
            sx={classes.avatarStyle}
          />
          <Typography sx={classes.textStyle}>
            Simone is here to help you.
          </Typography>
        </Box>
      }
      CardFooter={
        <Button sx={classes.buttonStyle} variant='contained'>
          Contact us
        </Button>
      }
    />
  )
}

export default CustomerSupportCard
