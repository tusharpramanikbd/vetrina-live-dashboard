import React, { Dispatch, SetStateAction, useState } from 'react'
import DropdownBoxDataType from '../../@types/DropdownBoxDataType'
import { Box, MenuItem, FormControl, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const CustomDropdown: React.FC<DropdownBoxDataType> = ({
  title,
  data,
  sxStyle,
  isFromSideDrawer,
}: DropdownBoxDataType) => {
  const [dropdownValue, setDropdownValue] = useState(data[0].data)

  const handleChange = (
    event: SelectChangeEvent,
    setDropdownValue: Dispatch<SetStateAction<string>>
  ) => {
    setDropdownValue(event.target.value)
  }

  return (
    <Box
      sx={
        isFromSideDrawer
          ? { margin: '0 20px', marginBottom: '24px' }
          : { marginTop: '4px' }
      }
    >
      <FormControl
        variant={isFromSideDrawer ? 'outlined' : 'standard'}
        sx={sxStyle}
      >
        {title && <Typography mb='15px'>{title}</Typography>}
        <Select
          onChange={(event: SelectChangeEvent) =>
            handleChange(event, setDropdownValue)
          }
          value={dropdownValue}
          disableUnderline={isFromSideDrawer ? false : true}
          sx={!isFromSideDrawer ? { fontSize: '14px', color: '#666666' } : null}
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
