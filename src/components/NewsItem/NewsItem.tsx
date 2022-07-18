import { Avatar, Box, Link, Typography } from '@mui/material'
import React from 'react'
import NewsItemType from '../../@types/NewsItemType'

const generateStyles = () => {
  return {
    rootStyle: { width: '310px', display: 'flex', alignItems: 'center' },
    avatarStyle: { width: '100px', height: '100px', objectFit: 'cover' },
    textBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '16px',
      overflow: 'hidden',
      width: '210px',
    },
    newsTypeTextStyle: {
      fontSize: '11px',
      fontWeight: 500,
      color: '#21B8F9',
      textTransform: 'uppercase',
    },
    newsHeadlineTextStyle: {
      fontSize: '14px',
      fontWeight: 500,
    },
    linkStyle: { fontSize: '12px', fontWeight: 300, justifySelf: 'flex-end' },
  }
}

const NewsItem: React.FC<NewsItemType> = ({
  newsType,
  newsHeadline,
  readingTime,
  img,
}: NewsItemType) => {
  const classes = generateStyles()

  return (
    <Box sx={classes.rootStyle}>
      <Avatar
        variant='rounded'
        src={img}
        alt='news item'
        sx={classes.avatarStyle}
      />
      <Box sx={classes.textBoxStyle}>
        <Typography sx={classes.newsTypeTextStyle}>{newsType}</Typography>
        <Typography sx={classes.newsHeadlineTextStyle}>
          {newsHeadline}
        </Typography>
        <Link href={'#'} sx={classes.linkStyle}>
          Estimated reading: {readingTime}
        </Link>
      </Box>
    </Box>
  )
}

export default NewsItem
