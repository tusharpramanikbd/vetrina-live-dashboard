import React, { Dispatch, SetStateAction, useState } from 'react'
import DropdownBoxDataType from '../../@types/DropdownBoxDataType'
import { Box, MenuItem, FormControl, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const CustomDropdown: React.FC<DropdownBoxDataType> = ({
  title,
  data,
}: DropdownBoxDataType) => {
  const [dropdownValue, setDropdownValue] = useState(data[0].data)

  const handleChange = (
    event: SelectChangeEvent,
    setDropdownValue: Dispatch<SetStateAction<string>>
  ) => {
    setDropdownValue(event.target.value)
  }

  return (
    <Box sx={{ margin: '0 20px', marginBottom: '24px' }}>
      <FormControl
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '5px',
            width: '215px',
            height: '50px',
            fontSize: '14px',
            fontWeight: 400,
          },
        }}
      >
        <Typography mb='15px'>{title}</Typography>
        <Select
          onChange={(event: SelectChangeEvent) =>
            handleChange(event, setDropdownValue)
          }
          value={dropdownValue}
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
