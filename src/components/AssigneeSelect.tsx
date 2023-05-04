import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppSelector } from '../redux/hooks'

import { selectAssignee } from '../redux/features/workflow/workflowSlice'

export function AssigneeSelect() {
  const assignee = useAppSelector(selectAssignee)
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={assignee}
        label="Assignee"
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
