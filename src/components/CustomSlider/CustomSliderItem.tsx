import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomSliderItemType from '../../@types/CustomSliderItemType'

const generateStyles = () => {
  return {
    rootStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatarStyle: {
      width: '150px',
      height: '150px',
      marginBottom: '6px',
    },
    textStyle: { fontSize: '15px' },
  }
}

const CustomSliderItem: React.FC<CustomSliderItemType> = ({
  img,
  firstName,
  lastName,
}: CustomSliderItemType) => {
  const classes = generateStyles()
  return (
    <Box sx={classes.rootStyle}>
      <Avatar src={img} sx={classes.avatarStyle} />
      <Typography
        sx={classes.textStyle}
      >{`${firstName} ${lastName}`}</Typography>
    </Box>
  )
}

export default CustomSliderItem
