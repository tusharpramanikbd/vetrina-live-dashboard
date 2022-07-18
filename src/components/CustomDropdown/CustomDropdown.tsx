import React, { Dispatch, SetStateAction, useState } from 'react'
import DropdownBoxDataType from '../../@types/DropdownBoxDataType'
import { Box, MenuItem, FormControl, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const generateStyles = () => {
  return {
    rootStyle: { marginTop: '4px' },
    rootStyleMB: { margin: '0 20px', marginBottom: '24px' },
    titleStyle: { marginBottom: '15px' },
    selectStyle: { fontSize: '14px', color: '#666666' },
  }
}

const CustomDropdown: React.FC<DropdownBoxDataType> = ({
  title,
  data,
  sxStyle,
  isFromSideDrawer,
}: DropdownBoxDataType) => {
  const classes = generateStyles()
  const [dropdownValue, setDropdownValue] = useState(data[0].data)

  const handleChange = (
    event: SelectChangeEvent,
    setDropdownValue: Dispatch<SetStateAction<string>>
  ) => {
    setDropdownValue(event.target.value)
  }

  return (
    <Box sx={isFromSideDrawer ? classes.rootStyleMB : classes.rootStyle}>
      <FormControl
        variant={isFromSideDrawer ? 'outlined' : 'standard'}
        sx={sxStyle}
      >
        {title && <Typography sx={classes.titleStyle}>{title}</Typography>}
        <Select
          onChange={(event: SelectChangeEvent) =>
            handleChange(event, setDropdownValue)
          }
          value={dropdownValue}
          disableUnderline={isFromSideDrawer ? false : true}
          sx={!isFromSideDrawer ? classes.selectStyle : null}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.data}>
              {item.data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CustomDropdown
