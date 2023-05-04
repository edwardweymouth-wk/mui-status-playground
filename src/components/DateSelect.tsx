import React from 'react'
import FormControl from '@mui/material/FormControl'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export function DateSelect() {
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Basic date picker" />
      </LocalizationProvider>
    </FormControl>
  )
}
