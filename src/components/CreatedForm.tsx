import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { AssigneeSelect } from './AssigneeSelect'
import { DateSelect } from './DateSelect'
import { ReviewerSelect } from './ReviewerSelect'

export function CreatedForm() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        justifyContent="center"
        container
        spacing={2}
        sx={{ paddingBottom: '5px' }}
      >
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          sm={12}
        >
          <Typography>
            Select an assignee who will provide the information below.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AssigneeSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReviewerSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateSelect />
        </Grid>
      </Grid>
    </Box>
  )
}
