import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  ExtensionUsersSelector,
  fetchUsers,
} from '../../features/extensionMarketplace/extensionMarketplaceSlice'
import ExtensionsIcon from '../../icons/ExtensionsIcon'
import CustomLink from '../CustomLink/CustomLink'
import CustomSlider from '../CustomSlider/CustomSlider'
import WrapperCard from './WrapperCard'

const generateStyles = () => {
  return {
    cardStyle: {
      height: '343px',
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

const ExtensionMarketplaceCard = () => {
  const classes = generateStyles()
  const { users, error } = useAppSelector(ExtensionUsersSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (error) {
    console.log('Data Fetching Error', error)
  }
  return (
    <WrapperCard
      HeaderIcon={ExtensionsIcon}
      title='Extensions Marketplace'
      style={classes.cardStyle}
      CardBody={<CustomSlider data={users && users} />}
      CardFooter={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='Discover all extensions'
          hasIcon={true}
          fromWelcomeSection={false}
        />
      }
    />
  )
}

export default ExtensionMarketplaceCard
