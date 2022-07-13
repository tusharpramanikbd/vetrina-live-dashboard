import { Box, Typography } from '@mui/material'
import React from 'react'
import { APP_STORE, GOOGLE_PLAY, IPHONE } from '../../utils/assetsPath'
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
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography
                fontSize='22px'
                fontWeight={500}
                color='#ffffff'
                style={{ width: '162px', marginBottom: '13px' }}
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
            <img src={IPHONE} alt='iphone' width='113.79px' height='228.41px' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '29px',
            }}
          >
            <img src={APP_STORE} alt='app store' width='126px' height='40px' />
            <img
              src={GOOGLE_PLAY}
              alt='google play'
              width='141px'
              height='40px'
            />
          </Box>
        </Box>
      }
    />
  )
}

export default MobileCard
