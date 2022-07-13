import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomSliderItemType from '../../@types/CustomSliderItemType'

const CustomSliderItem: React.FC<CustomSliderItemType> = ({
  img,
  firstName,
  lastName,
}: CustomSliderItemType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        src={img}
        sx={{
          width: '150px',
          height: '150px',
          marginBottom: '6px',
        }}
      />
      <Typography
        sx={{ fontSize: '15px' }}
      >{`${firstName} ${lastName}`}</Typography>
    </Box>
  )
}

export default CustomSliderItem
