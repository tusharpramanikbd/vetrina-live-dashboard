import { Typography } from '@mui/material'
import React from 'react'
import ToolIcon from '../../icons/ToolIcon'
import CustomLink from '../CustomLink/CustomLink'
import WrapperCard from './WrapperCard'

const ConfigureShopCard = () => {
  return (
    <WrapperCard
      HeaderIcon={ToolIcon}
      title='Configure your shop'
      CardBody={
        <>
          <Typography
            fontWeight={600}
            fontSize='34px'
            color='#FFA26B'
            mb='20px'
            children={
              <>
                <span>45%</span>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Completed
                </span>
              </>
            }
          />
          <Typography fontSize='17px'>
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </>
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
          text='Complete the setup!'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default ConfigureShopCard
