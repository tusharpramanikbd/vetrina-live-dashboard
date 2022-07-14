import { Avatar, Box, Link, Typography } from '@mui/material'
import React from 'react'
import NewsItemType from '../../@types/NewsItemType'

const NewsItem: React.FC<NewsItemType> = ({
  newsType,
  newsHeadline,
  readingTime,
  img,
}: NewsItemType) => {
  return (
    <Box sx={{ width: '310px', display: 'flex', alignItems: 'center' }}>
      <Avatar
        variant='rounded'
        src={img}
        alt='news item'
        sx={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '16px',
          overflow: 'hidden',
          width: '210px',
        }}
      >
        <Typography
          sx={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#21B8F9',
            textTransform: 'uppercase',
          }}
        >
          {newsType}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {newsHeadline}
        </Typography>
        <Link
          href={'#'}
          sx={{ fontSize: '12px', fontWeight: 300, justifySelf: 'flex-end' }}
        >
          Estimated reading: {readingTime}
        </Link>
      </Box>
    </Box>
  )
}

export default NewsItem
