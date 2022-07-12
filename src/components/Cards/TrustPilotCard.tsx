import { Typography } from '@mui/material'
import React from 'react'
import VectorIcon from '../../icons/VectorIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const TrustPilotCard = () => {
  return (
    <WrapperCard
      HeaderIcon={VectorIcon}
      title='Trustpilot'
      textColor='#ffffff'
      style={{
        borderRadius: '10px',
        background: '#000032',
      }}
      CardBody={
        <Typography fontSize='17px' color='#ffffff'>
          Show us your love by leaving a{' '}
          <span style={{ color: '#00C48C' }}>positive</span> review on trust
          pilot and receive the extension of{' '}
          <span style={{ fontWeight: 700 }}>50 additional products</span>
        </Typography>
      }
      CardFooter={
        <CustomLink
          sxStyle={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#00C48C',
            textDecoration: 'underline #00C48C',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'flex-start',
          }}
          text='Write a review on Trustpilot'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default TrustPilotCard
