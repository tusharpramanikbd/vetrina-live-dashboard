import { Typography } from '@mui/material'
import React from 'react'
import VectorIcon from '../../icons/VectorIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    rootCardStyle: {
      borderRadius: '10px',
      background: '#000032',
    },
    textStyle: { fontSize: '17px', color: '#FFFFFF' },
    spanColor: { color: '#00C48C' },
    spanFontWeight: { fontWeight: 700 },
    customLinkStyle: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#00C48C',
      textDecoration: 'underline #00C48C',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'flex-start',
    },
  }
}

const TrustPilotCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      HeaderIcon={VectorIcon}
      title='Trustpilot'
      textColor='#ffffff'
      style={classes.rootCardStyle}
      CardBody={
        <Typography sx={classes.textStyle}>
          Show us your love by leaving a{' '}
          <span style={classes.spanColor}>positive</span> review on trust pilot
          and receive the extension of{' '}
          <span style={classes.spanFontWeight}>50 additional products</span>
        </Typography>
      }
      CardFooter={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='Write a review on Trustpilot'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default TrustPilotCard
