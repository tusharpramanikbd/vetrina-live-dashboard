import { Box, Typography } from '@mui/material'
import React from 'react'
import appStore from '../../assets/images/appStore.png'
import googlePlay from '../../assets/images/googlePlay.png'
import iphone from '../../assets/images/iphone.png'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    cardStyle: {
      background: '#F3A35C',
      height: '343px',
    },
    cardBodyBoxStyle: { display: 'flex', justifyContent: 'space-around' },
    cardBodyTextStyle: {
      width: '162px',
      marginBottom: '13px',
      fontSize: '22px',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    customLinkStyle: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#FFFFFF',
      textDecoration: 'underline #FFFFFF',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    iPhoneImgStyle: {
      width: '113.79px',
      height: '228.41px',
    },
    appStoreImgStyle: {
      width: '126px',
      height: '40px',
    },
    playStoreImgStyle: {
      width: '141px',
      height: '40px',
    },
    bottomBoxSectionStyle: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '29px',
    },
  }
}

const MobileCard = () => {
  const classes = generateStyles()

  return (
    <WrapperCard
      style={classes.cardStyle}
      CardBody={
        <>
          <Box sx={classes.cardBodyBoxStyle}>
            <Box>
              <Typography style={classes.cardBodyTextStyle}>
                Sell your products on your exclusive APP published on the stores
              </Typography>
              <CustomLink
                sxStyle={classes.customLinkStyle}
                text='Show more'
                hasIcon={true}
                fromWelcomeSection={false}
              />
            </Box>
            <img src={iphone} alt='iphone' style={classes.iPhoneImgStyle} />
          </Box>
          <Box sx={classes.bottomBoxSectionStyle}>
            <img
              src={appStore}
              alt='app store'
              style={classes.appStoreImgStyle}
            />
            <img
              src={googlePlay}
              alt='google play'
              style={classes.playStoreImgStyle}
            />
          </Box>
        </>
      }
    />
  )
}

export default MobileCard
