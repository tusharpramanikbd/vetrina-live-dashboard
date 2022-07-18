import { Box, Typography } from '@mui/material'
import React from 'react'
import OrdersIcon from '../../icons/OrdersIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    cardBodyRootBoxStyle: { display: 'flex', flexDirection: 'column' },
    textBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textLightStyle: { fontSize: '17px', fontWeight: 400 },
    textBoldStyle: { fontSize: '17px', fontWeight: 500 },
    customLinkStyle: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#21B8F9',
      textDecoration: 'underline #21B8F9',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'flex-start',
    },
  }
}

const OrdersCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      hasDropdown
      HeaderIcon={OrdersIcon}
      title='Orders'
      CardBody={
        <Box sx={classes.cardBodyRootBoxStyle}>
          <Box sx={classes.textBoxStyle}>
            <Typography sx={classes.textLightStyle}>
              Orders received:
            </Typography>
            <Typography sx={classes.textBoldStyle}>156</Typography>
          </Box>
          <Box style={classes.textBoxStyle}>
            <Typography sx={classes.textLightStyle}>Earnings:</Typography>
            <Typography sx={classes.textBoldStyle}>€ 1893,24</Typography>
          </Box>
        </Box>
      }
      CardFooter={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='10 free tips to increase your sales'
          hasIcon={false}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default OrdersCard
