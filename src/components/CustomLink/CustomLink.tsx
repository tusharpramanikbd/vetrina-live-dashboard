import React from 'react'
import { Box, Link } from '@mui/material'
import CustomLinkType from '../../@types/CustomLinkType'
import ExternalLinkIcon from '../../icons/ExternalLinkIcon'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

const CustomLink: React.FC<CustomLinkType> = ({
  link,
  sxStyle,
  text,
  hasIcon,
  fromWelcomeSection,
}: CustomLinkType) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
      }}
    >
      <Link href={link ? link : '#'} target={'_blank'} sx={sxStyle}>
        {text}
        {hasIcon &&
          (fromWelcomeSection ? (
            <ExternalLinkIcon style={{ marginLeft: '14px' }} />
          ) : (
            <ArrowRightIcon style={{ marginLeft: '14px' }} />
          ))}
      </Link>
    </Box>
  )
}

export default CustomLink
