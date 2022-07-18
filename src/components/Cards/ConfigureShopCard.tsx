import { Typography } from '@mui/material'
import React from 'react'
import ToolIcon from '../../icons/ToolIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    mainContentOrange: {
      fontWeight: 600,
      fontSize: '34px',
      color: '#FFA26B',
      marginBottom: '20px',
    },
    completedText: {
      fontSize: '15px',
      fontWeight: 500,
      display: 'block',
    },
    contentText: { fontSize: '17px' },
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

const ConfigureShopCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      HeaderIcon={ToolIcon}
      title='Configure your shop'
      CardBody={
        <>
          <Typography
            sx={classes.mainContentOrange}
            children={
              <>
                <span>45%</span>
                <span style={classes.completedText}>Completed</span>
              </>
            }
          />
          <Typography sx={classes.contentText}>
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </>
      }
      CardFooter={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='Complete the setup!'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default ConfigureShopCard
