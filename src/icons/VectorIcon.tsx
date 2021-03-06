import React from 'react'
import CustomIconType from '../@types/CustomIconType'

const VectorIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='29'
      height='26'
      viewBox='0 0 29 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        d='M28.0209 9.9238H17.3207L14.0156 0L10.7002 9.9238L0 9.91373L8.66552 16.0532L5.35011 25.9669L14.0156 19.8375L22.6708 25.9669L19.3657 16.0532L28.0209 9.9238Z'
        fill={color || '#00B67A'}
      />
    </svg>
  )
}

export default VectorIcon
