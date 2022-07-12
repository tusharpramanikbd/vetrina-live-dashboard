import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import CustomDropdown from '../CustomDropdown/CustomDropdown'
import CardDropdownItemList from '../../data/CardDropdownItemList'
import WrapperCardType from '../../@types/WrapperCardType'

const WrapperCard: React.FC<WrapperCardType> = ({
  CardBody,
  CardFooter,
  hasDropdown,
  HeaderIcon,
  title,
  style,
  headerLink,
}: WrapperCardType) => {
  return (
    <Card
      sx={{
        width: '100%',
        padding: '8px',
        minHeight: '220px',
        borderRadius: '10px',
        ...style,
      }}
      elevation={4}
    >
      {title && (
        <CardHeader
          avatar={HeaderIcon && <HeaderIcon />}
          title={
            title && (
              <Typography fontSize={'20px'} fontWeight={500}>
                {title}
              </Typography>
            )
          }
          action={
            (hasDropdown && (
              <CustomDropdown
                data={CardDropdownItemList}
                isFromSideDrawer={false}
              />
            )) ||
            (headerLink && headerLink)
          }
        />
      )}
      <CardContent sx={{ minHeight: '100px' }}>{CardBody}</CardContent>
      <CardActions sx={{ marginLeft: '12px', marginBottom: '14px' }}>
        {CardFooter}
      </CardActions>
    </Card>
  )
}

export default WrapperCard
