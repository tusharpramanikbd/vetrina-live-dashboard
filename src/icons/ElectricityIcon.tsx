import CustomIconType from '../@types/CustomIconType'

const ElectricityIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='20'
      height='22'
      viewBox='0 0 20 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        d='M11 1L1 13H10L9 21L19 9H10L11 1Z'
        stroke={color || '#103B66'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ElectricityIcon
