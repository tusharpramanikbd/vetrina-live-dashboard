import { Typography } from '@mui/material'
import React from 'react'
import UsersIcon from '../../icons/UsersIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const InviteFriendCard = () => {
  return (
    <WrapperCard
      HeaderIcon={UsersIcon}
      title='Invite friend'
      CardBody={
        <Typography fontSize='17px'>
          <span style={{ color: '#00C48C', fontWeight: 700 }}>
            Receive 50 products{' '}
          </span>{' '}
          by inviting a friend who subscribes to a plan. Your friend will
          receive a 30% discount coupon valid for any plan.
        </Typography>
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
          text='Start inviting friends!'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default InviteFriendCard
