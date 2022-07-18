import { Box } from '@mui/material'
import React from 'react'
import NewsItemList from '../../data/NewsItemList'
import FileIcon from '../../icons/FileIcon'
import CustomLink from '../CustomLink/CustomLink'
import NewsItem from '../NewsItem/NewsItem'
import WrapperCard from './WrapperCard'

const generateStyle = () => {
  return {
    customLinkStyle: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#21B8F9',
      textDecoration: 'underline #21B8F9',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    cardBodyStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '25px',
      rowGap: '35px',
    },
  }
}

const LatestNewsCard = () => {
  const classes = generateStyle()

  return (
    <WrapperCard
      HeaderIcon={FileIcon}
      title='Latest news'
      headerLink={
        <CustomLink
          sxStyle={classes.customLinkStyle}
          text='Visit our blog'
          hasIcon={true}
          fromWelcomeSection={true}
        />
      }
      CardBody={
        <Box sx={classes.cardBodyStyle}>
          {NewsItemList.map((item) => {
            return (
              <NewsItem
                key={item.id}
                newsType={item.newsType}
                newsHeadline={item.newsHeadline}
                readingTime={item.readingTime}
                img={item.img}
              />
            )
          })}
        </Box>
      }
    />
  )
}

export default LatestNewsCard
