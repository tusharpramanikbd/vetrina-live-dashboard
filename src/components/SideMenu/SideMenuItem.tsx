import { Badge, Box, Theme, Typography, useTheme } from '@mui/material'
import React from 'react'
import SideMenuItemType from '../../@types/SideMenuItemType'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
} from '../../features/menuDrawer/menuDrawerSlice'
import ArrowDownIcon from '../../icons/ArrowDownIcon'
import ArrowUpIcon from '../../icons/ArrowUpIcon'

const generateStyles = (
  isMenuSelected: any,
  theme: Theme,
  showSubMenuItems: boolean
) => {
  return {
    rootStyle: {
      fontFamily: '"Noto Sans HK", sans-serif',
      display: 'flex',
      flexDirection: 'column',
    },
    innerBoxStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '8px 20px',
      '&:hover': {
        backgroundColor: '#21B8F909',
      },
    },
    titleBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      marginRight: '16px',
      width: '20px',
      height: '20px',
    },
    titleTextStyle: {
      fontSize: '14px',
      color: isMenuSelected ? '#21B8F9' : theme.palette.text.primary,
    },
    badgeStyle: {
      '& .MuiBadge-badge': {
        fontSize: '12px',
        height: '24px',
        minWidth: '24px',
        borderRadius: '50%',
        padding: '4px',
        transform: 'translate(0 , -50%)',
      },
    },
    arrowIconStyle: { marginRight: '6px' },
    subItemBoxStyle: {
      display: showSubMenuItems && isMenuSelected ? 'flex' : 'none',
      flexDirection: 'column',
      paddingLeft: '56px',
      paddingTop: '15px',
      bgcolor: '#E9F8FE',
    },
    submenuItemBoxStyle: {
      marginBottom: '20px',
    },
    submenuTitleStyle: { fontSize: '14px' },
  }
}

// Functional Component
const SideMenuItem: React.FC<SideMenuItemType> = ({
  title,
  Icon,
  badge,
  subMenuItems,
  isMenuSelected,
  showSubMenuItems,
  setShowSubMenuItems,
}: SideMenuItemType) => {
  const { isDrawerOpened } = useAppSelector(menuDrawerSelector)
  const dispatch = useAppDispatch()
  const theme = useTheme()

  const classes = generateStyles(isMenuSelected, theme, showSubMenuItems)

  const handleMenuItemClick = () => {
    !isDrawerOpened && dispatch(setDrawerOpen())
    setShowSubMenuItems(true)
    showSubMenuItems && isMenuSelected && setShowSubMenuItems(false)
  }

  return (
    <Box
      sx={classes.rootStyle}
      onClick={(subMenuItems && handleMenuItemClick) || undefined}
    >
      <Box sx={classes.innerBoxStyle}>
        {/* title and Icon */}
        <Box sx={classes.titleBoxStyle}>
          <Icon color={isMenuSelected && '#21B8F9'} style={classes.iconStyle} />
          {isDrawerOpened && (
            <Typography sx={classes.titleTextStyle}>{title}</Typography>
          )}
        </Box>
        {/* Badge and Icon */}
        {(badge && isDrawerOpened && (
          <Badge badgeContent={badge} color='success' sx={classes.badgeStyle} />
        )) ||
          (subMenuItems &&
            isDrawerOpened &&
            (showSubMenuItems && isMenuSelected ? (
              <ArrowUpIcon style={classes.arrowIconStyle} />
            ) : (
              <ArrowDownIcon style={classes.arrowIconStyle} />
            )))}
      </Box>
      {/* subItems */}
      {subMenuItems && (
        <Box sx={classes.subItemBoxStyle}>
          {subMenuItems.map((item) => (
            <Box key={item.id} sx={classes.submenuItemBoxStyle}>
              <Typography sx={classes.submenuTitleStyle}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default SideMenuItem
