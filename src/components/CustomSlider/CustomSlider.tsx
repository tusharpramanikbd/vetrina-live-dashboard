import React from 'react'
import CustomSliderType from '../../@types/CustomSliderType'
import Slick from 'react-slick'
import CustomSliderItem from './CustomSliderItem'
import { Box, Skeleton } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '50px',
}

const CustomSlider: React.FC<CustomSliderType> = ({
  data,
}: CustomSliderType) => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        width: '0px',
      }}
    >
      <Slick {...settings}>
        {data
          ? data.map((item) => (
              <CustomSliderItem
                key={item.id.value}
                img={item.picture.large}
                firstName={item.name.first}
                lastName={item.name.last}
              />
            ))
          : [1, 2, 3, 4, 5].map((item) => (
              <Box key={`id-${item}`}>
                <Skeleton
                  variant='circular'
                  sx={{
                    marginBottom: '6px',
                    width: '150px',
                    height: '150px',
                    marginLeft: '31px',
                  }}
                />
                <Skeleton variant='text' />
              </Box>
            ))}
      </Slick>
    </Box>
  )
}

export default CustomSlider
