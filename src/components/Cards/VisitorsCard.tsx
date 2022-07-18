import React from 'react'
import Typography from '@mui/material/Typography'
import ViewShopIcon from '../../icons/ViewShopIcon'
import WrapperCard from './WrapperCard'
import CustomLink from '../CustomLink/CustomLink'

const generateStyles = () => {
  return {
    bodyTextStyle: {
      fontWeight: 500,
      fontSize: '42px',
    },
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

const VisitorsCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      hasDropdown
      HeaderIcon={ViewShopIcon}
      title='Visitors'
      CardBody={<Typography sx={classes.bodyTextStyle}>1824</Typography>}
      CardFooter={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='Do you want more visits? Contact us!'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default VisitorsCard
