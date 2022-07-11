import { ComponentType } from 'react'
import { CustomIconType } from './CustomIconType'

export type SideMenuItemType = {
  title: string
  Icon: ComponentType<CustomIconType>
}
