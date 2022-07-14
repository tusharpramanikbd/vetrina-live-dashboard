import { Box, Typography } from '@mui/material'
import React from 'react'
import OrdersIcon from '../../icons/OrdersIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const OrdersCard = () => {
  return (
    <WrapperCard
      hasDropdown
      HeaderIcon={OrdersIcon}
      title='Orders'
      CardBody={
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontSize: '17px', fontWeight: 400 }}>
              Orders received:
            </Typography>
            <Typography sx={{ fontSize: '17px', fontWeight: 500 }}>
              156
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography fontWeight={400} fontSize='17px'>
              Earnings:
            </Typography>
            <Typography fontWeight={500} fontSize='17px'>
              € 1893,24
            </Typography>
          </Box>
        </Box>
      }
      CardFooter={
        <CustomLink
          sxStyle={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#21B8F9',
            textDecoration: 'underline #21B8F9',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'flex-start',
          }}
          text='10 free tips to increase your sales'
          hasIcon={false}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default OrdersCard
