import { CustomIconType } from '../@types/CustomIconType'

const DashboardIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065ZM10 21H14V13H10V21ZM16 21V12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12V21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V9.48908L12 3.26686L20 9.48908V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H16Z'
        fill={color || '#103B66'}
      />
    </svg>
  )
}

export default DashboardIcon
