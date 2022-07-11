import { ComponentType } from 'react'
import { CustomIconType } from './CustomIconType'
import { SideSubMenuItemType } from './SideSubMenuItemType'

export type SideMenuItemType = {
  title: string
  Icon: ComponentType<CustomIconType>
  badge?: number
  subMenuItems?: SideSubMenuItemType[]
}
