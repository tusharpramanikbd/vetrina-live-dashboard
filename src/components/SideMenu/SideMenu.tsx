import { Dispatch, SetStateAction, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import WebsiteLogo from '../../assets/images/website_logo.png'
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

const generateStyles = (isDrawerOpened: any) => {
  return {
    rootStyle: {
      display: 'flex',
      justifyContent: isDrawerOpened ? 'space-between' : 'center',
      alignItems: 'center',
      marginBottom: '32px',
      padding: '29px 20px 0 20px',
    },
    logoStyle: { width: '93.25px', height: '13.75px' },
    dividerStyle: { margin: '20px 0' },
    dropdownBoxStyle: { marginTop: '60px' },
    customDropdownStyle: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        width: '215px',
        height: '50px',
        fontSize: '14px',
        fontWeight: 400,
      },
    },
  }
}

// React Component
const SideMenu = () => {
  const { isDrawerOpened } = useAppSelector(menuDrawerSelector)
  const dispatch = useAppDispatch()

  const classes = generateStyles(isDrawerOpened)

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
      <Box sx={classes.rootStyle}>
        {isDrawerOpened && (
          <img src={WebsiteLogo} style={classes.logoStyle} alt='website logo' />
        )}
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
            <Divider key={item.id} sx={classes.dividerStyle} />
          )) ||
          (item.isDropdown && isDrawerOpened && (
            <Box key={item.id} sx={classes.dropdownBoxStyle}>
              <CustomDropdown
                title={item.title}
                data={item.items}
                sxStyle={classes.customDropdownStyle}
                isFromSideDrawer={true}
              />
            </Box>
          ))
      )}
      {/* End of Drawer Body */}
    </Drawer>
  )
}

export default SideMenu
