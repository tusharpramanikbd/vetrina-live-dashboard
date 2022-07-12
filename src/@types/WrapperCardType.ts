import { ComponentType, ReactNode, CSSProperties } from 'react'

type WrapperCardType = {
  CardBody: ReactNode
  CardFooter?: ReactNode
  HeaderIcon?: ComponentType
  headerLink?: ReactNode
  title?: string
  hasDropdown?: boolean
  style?: CSSProperties
}

export default WrapperCardType
