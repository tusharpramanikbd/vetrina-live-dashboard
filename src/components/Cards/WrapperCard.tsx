import React, { CSSProperties } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import CustomDropdown from '../CustomDropdown/CustomDropdown'
import CardDropdownItemList from '../../data/CardDropdownItemList'
import WrapperCardType from '../../@types/WrapperCardType'

const generateStyles = (
  style: CSSProperties | undefined,
  textColor: string | undefined
) => {
  return {
    cardRootStyle: {
      width: '100%',
      padding: '8px',
      minHeight: '200px',
      borderRadius: '10px',
      ...style,
    },
    titleTextStyle: {
      fontSize: '20px',
      fontWeight: 500,
      color: textColor,
      marginLeft: textColor && '-14px',
    },
    cardActionStyle: { marginLeft: '12px', marginBottom: '14px' },
    minHeight: { minHeight: '100px' },
  }
}

const WrapperCard: React.FC<WrapperCardType> = ({
  CardBody,
  CardFooter,
  hasDropdown,
  HeaderIcon,
  title,
  style,
  headerLink,
  textColor,
}: WrapperCardType) => {
  const classes = generateStyles(style, textColor)

  return (
    <Card sx={classes.cardRootStyle} elevation={4}>
      {title && (
        <CardHeader
          avatar={HeaderIcon && <HeaderIcon />}
          title={
            title && (
              <Typography sx={classes.titleTextStyle}>{title}</Typography>
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
      <CardContent sx={title !== 'Customer support' ? classes.minHeight : null}>
        {CardBody}
      </CardContent>
      <CardActions sx={classes.cardActionStyle}>{CardFooter}</CardActions>
    </Card>
  )
}

export default WrapperCard
