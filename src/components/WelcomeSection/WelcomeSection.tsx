import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import ExternalLinkIcon from '../../icons/ExternalLinkIcon'

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '182px',
        background:
          'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 37px 0 37px',
      }}
    >
      <Typography variant='body1' fontSize='34px' color='#fff'>
        welcome Mario!
      </Typography>
      <Box
        sx={{
          display: 'inline-block',
        }}
      >
        <Link
          href='http://app.vetrinalive.it/fenoh-store'
          target={'_blank'}
          sx={{
            fontSize: '17px',
            fontWeight: 500,
            color: '#fff',
            textDecoration: 'underline #fff',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          app.vetrinalive.it/fenoh-store
          <ExternalLinkIcon style={{ marginLeft: '14px' }} />
        </Link>
      </Box>
    </Box>
  )
}

export default WelcomeSection
