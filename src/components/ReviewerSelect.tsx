import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppSelector } from '../redux/hooks'

import { selectAssignee } from '../redux/features/workflow/workflowSlice'

export function ReviewerSelect() {
  const assignee = useAppSelector(selectAssignee)
  return (
    <FormControl fullWidth>
      <InputLabel id="review-select-label">Reviewer</InputLabel>
      <Select
        labelId="review-select-label"
        id="review-select"
        value={assignee}
        label="Reviewer"
        onChange={(_event: SelectChangeEvent) => {
          ;() => console.log(_event)
        }}
      >
        <MenuItem value={'Person 1'}>Person 1</MenuItem>
        <MenuItem value={'Person 2'}>Person 2</MenuItem>
        <MenuItem value={'Person 3'}>Person 3</MenuItem>
      </Select>
    </FormControl>
  )
}
