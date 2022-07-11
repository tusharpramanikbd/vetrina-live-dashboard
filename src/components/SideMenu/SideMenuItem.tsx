import { Badge, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { SideMenuItemType } from '../../@types/SideMenuItemType'
import { useAppSelector } from '../../app/reduxHooks'
import { menuDrawerSelector } from '../../features/menuDrawer/menuDrawerSlice'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

const SideMenuItem: React.FC<SideMenuItemType> = ({
  title,
  Icon,
  badge,
  subMenuItems,
  isMenuSelected,
}: SideMenuItemType) => {
  const { isDrawerOpened } = useAppSelector(menuDrawerSelector)
  const theme = useTheme()

  const handleMenuItemClick = () => {}

  return (
    <Box
      display='flex'
      flexDirection='column'
      style={{ fontFamily: '"Noto Sans HK", sans-serif' }}
      onClick={handleMenuItemClick}
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
                userSelect: 'none',
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
          (subMenuItems && isDrawerOpened && (
            <ArrowDownIcon style={{ marginRight: '6px' }} />
          ))}
      </Box>
    </Box>
  )
}

export default SideMenuItem
