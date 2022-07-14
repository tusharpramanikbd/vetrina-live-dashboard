import { Box, Typography } from '@mui/material'
import React from 'react'
import appStore from '../../assets/images/appStore.png'
import googlePlay from '../../assets/images/googlePlay.png'
import iphone from '../../assets/images/iphone.png'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const MobileCard = () => {
  return (
    <WrapperCard
      style={{
        background: '#F3A35C',
        height: '343px',
      }}
      CardBody={
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography
                style={{
                  width: '162px',
                  marginBottom: '13px',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                Sell your products on your exclusive APP published on the stores
              </Typography>
              <CustomLink
                sxStyle={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  textDecoration: 'underline #FFFFFF',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
                text='Show more'
                hasIcon={true}
                fromWelcomeSection={false}
              />
            </Box>
            <img
              src={iphone}
              alt='iphone'
              style={{
                width: '113.79px',
                height: '228.41px',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '29px',
            }}
          >
            <img
              src={appStore}
              alt='app store'
              width='126px'
              height='40px'
              style={{
                width: '126px',
                height: '40px',
              }}
            />
            <img
              src={googlePlay}
              alt='google play'
              style={{
                width: '141px',
                height: '40px',
              }}
            />
          </Box>
        </>
      }
    />
  )
}

export default MobileCard
