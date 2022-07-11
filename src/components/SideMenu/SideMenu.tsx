import { Dispatch, SetStateAction, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { WEBSITE_LOGO } from '../../utils/assetsPath'
import Drawer from './Drawer'
import SideMenuList from '../../data/SideMenuList'

import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
  setDrawerClose,
} from '../../features/menuDrawer/menuDrawerSlice'
import SideMenuItem from './SideMenuItem'
import { Divider } from '@mui/material'
import CustomDropdown from '../CustomDropdown/CustomDropdown'

// React Component
const SideMenu = () => {
  const { isDrawerOpened } = useAppSelector(menuDrawerSelector)
  const dispatch = useAppDispatch()

  const [menuSelected, setMenuSelected] = useState(0)
  const [showSubMenuItems, setShowSubMenuItems] = useState(false)

  const handleDrawerState = (
    showSubItems: boolean,
    setShowSubItems: Dispatch<SetStateAction<boolean>>
  ) => {
    if (isDrawerOpened) {
      dispatch(setDrawerClose())
      showSubItems && setShowSubItems(false)
    } else {
      dispatch(setDrawerOpen())
    }
  }

  return (
    <Drawer variant='permanent' open={isDrawerOpened}>
      {/* Drawer Header */}
      <Box
        display='flex'
        justifyContent={isDrawerOpened ? 'space-between' : 'center'}
        mb={4}
        sx={{ padding: '29px 20px 0 20px' }}
      >
        {isDrawerOpened && <img src={WEBSITE_LOGO} alt='website logo' />}
        <IconButton
          onClick={() =>
            handleDrawerState(showSubMenuItems, setShowSubMenuItems)
          }
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/* End of Drawer Header */}

      {/* Drawer Body */}
      {SideMenuList.map(
        (item, index) =>
          (item.isSideMenuItem && (
            <div onClick={() => setMenuSelected(index)} key={item.id}>
              <SideMenuItem
                title={item.title || ''}
                Icon={item.icon}
                badge={item.badge}
                subMenuItems={item.subMenuItems}
                isMenuSelected={menuSelected === index}
                showSubMenuItems={showSubMenuItems}
                setShowSubMenuItems={setShowSubMenuItems}
              />
            </div>
          )) ||
          (item.isDividerItem && (
            <Divider key={item.id} sx={{ margin: '20px 0' }} />
          )) ||
          (item.isDropdown && isDrawerOpened && (
            <Box key={item.id} style={{ marginTop: '60px' }}>
              <CustomDropdown title={item.title} data={item.items} />
            </Box>
          ))
      )}
      {/* End of Drawer Body */}
    </Drawer>
  )
}

export default SideMenu
