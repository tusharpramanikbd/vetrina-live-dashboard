import React from 'react'
import { Box, Link } from '@mui/material'
import CustomLinkType from '../../@types/CustomLinkType'
import ExternalLinkIcon from '../../icons/ExternalLinkIcon'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

const generateStyles = () => {
  return {
    rootStyle: {
      display: 'inline-block',
    },
    iconStyle: { marginLeft: '14px' },
  }
}

const CustomLink: React.FC<CustomLinkType> = ({
  link,
  sxStyle,
  text,
  hasIcon,
  fromWelcomeSection,
}: CustomLinkType) => {
  const classes = generateStyles()

  return (
    <Box sx={classes.rootStyle}>
      <Link href={link ? link : '#'} target={'_blank'} sx={sxStyle}>
        {text}
        {hasIcon &&
          (fromWelcomeSection ? (
            <ExternalLinkIcon color={sxStyle.color} style={classes.iconStyle} />
          ) : (
            <ArrowRightIcon color={sxStyle.color} style={classes.iconStyle} />
          ))}
      </Link>
    </Box>
  )
}

export default CustomLink
