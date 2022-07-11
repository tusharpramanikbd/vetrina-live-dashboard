import { Badge, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import SideMenuItemType from '../../@types/SideMenuItemType'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  menuDrawerSelector,
  setDrawerOpen,
} from '../../features/menuDrawer/menuDrawerSlice'
import ArrowDownIcon from '../../icons/ArrowDownIcon'
import ArrowUpIcon from '../../icons/ArrowUpIcon'

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

  const handleMenuItemClick = () => {
    !isDrawerOpened && dispatch(setDrawerOpen())
    setShowSubMenuItems(true)
    showSubMenuItems && isMenuSelected && setShowSubMenuItems(false)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      style={{ fontFamily: '"Noto Sans HK", sans-serif' }}
      onClick={(subMenuItems && handleMenuItemClick) || undefined}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          cursor: 'pointer',
          padding: '8px 20px',
          '&:hover': {
            backgroundColor: '#21B8F909',
          },
        }}
      >
        {/* title and Icon */}
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Icon
            color={isMenuSelected && '#21B8F9'}
            style={{
              marginRight: '16px',
              width: '20px',
              height: '20px',
            }}
          />
          {isDrawerOpened && (
            <Typography
              fontSize='14px'
              sx={{
                color: isMenuSelected ? '#21B8F9' : theme.palette.text.primary,
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
        {/* Badge and Icon */}
        {(badge && isDrawerOpened && (
          <Badge
            badgeContent={badge}
            color='success'
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '12px',
                height: '24px',
                minWidth: '24px',
                borderRadius: '50%',
                padding: '4px',
                transform: 'translate(0 , -50%)',
              },
            }}
          />
        )) ||
          (subMenuItems &&
            isDrawerOpened &&
            (showSubMenuItems && isMenuSelected ? (
              <ArrowUpIcon style={{ marginRight: '6px' }} />
            ) : (
              <ArrowDownIcon style={{ marginRight: '6px' }} />
            )))}
      </Box>
      {/* subItems */}
      {subMenuItems && (
        <Box
          display={showSubMenuItems && isMenuSelected ? 'flex' : 'none'}
          flexDirection='column'
          sx={{
            paddingLeft: '59px',
            paddingTop: '20px',
            bgcolor: '#E9F8FE',
          }}
        >
          {subMenuItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                marginBottom: '20px',
              }}
            >
              <Typography fontSize='14px'>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default SideMenuItem
