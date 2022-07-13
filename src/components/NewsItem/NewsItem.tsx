import { Box, Link, Typography } from '@mui/material'
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
      <img
        src={img}
        alt='news item'
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <Box
        display='flex'
        flexDirection='column'
        paddingLeft='16px'
        sx={{ overflow: 'hidden', width: '210px' }}
      >
        <Typography
          fontWeight={500}
          fontSize='11px'
          color='#21B8F9'
          textTransform='uppercase'
        >
          {newsType}
        </Typography>
        <Typography fontWeight={500} fontSize='14px'>
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
