import { Avatar, Button, Typography } from '@mui/material'
import React from 'react'
import HeadphonesIcon from '../../icons/HeadphonesIcon'
import WrapperCard from './WrapperCard'

const CustomerSupportCard = () => {
  return (
    <WrapperCard
      HeaderIcon={HeadphonesIcon}
      title='Customer support'
      CardBody={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src='https://randomuser.me/api/portraits/men/2.jpg'
            sx={{
              marginRight: '22px',
            }}
          />
          <Typography fontSize='15px'>Simone is here to help you.</Typography>
        </div>
      }
      CardFooter={
        <Button
          sx={{
            textTransform: 'none',
            width: '168px',
            height: '50px',
            bgcolor: '#21B8F9',
            fontWeight: 600,
          }}
          disableElevation
          variant='contained'
        >
          Contact us
        </Button>
      }
    />
  )
}

export default CustomerSupportCard
