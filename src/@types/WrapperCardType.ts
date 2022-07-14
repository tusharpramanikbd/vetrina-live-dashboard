import { ComponentType, ReactNode, CSSProperties } from 'react'

interface WrapperCardType {
  HeaderIcon?: ComponentType
  title?: string
  headerLink?: ReactNode
  hasDropdown?: boolean
  CardBody: ReactNode
  CardFooter?: ReactNode
  style?: CSSProperties
  textColor?: string
}

export default WrapperCardType
