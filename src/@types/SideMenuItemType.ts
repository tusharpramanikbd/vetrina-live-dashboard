import { ComponentType, Dispatch, SetStateAction } from 'react'
import { CustomIconType } from './CustomIconType'
import { SideSubMenuItemType } from './SideSubMenuItemType'

export type SideMenuItemType = {
  title: string
  Icon: ComponentType<CustomIconType>
  badge?: number
  subMenuItems?: SideSubMenuItemType[]
  isMenuSelected?: boolean
  showSubMenuItems: boolean
  setShowSubMenuItems: Dispatch<SetStateAction<boolean>>
}
