import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const FooterEx = () => (
  <div style={{ maxWidth: 700, margin: 'auto', textAlign: 'center' }}>
    <Typography variant="caption" align={'center'}>
      © Copyright 2019
    </Typography>
    <Divider style={{ margin: '24px auto', width: 60 }} />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={'center'} gutterBottom color={'textSecondary'}>
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={'center'} gutterBottom color={'textSecondary'}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={'center'} gutterBottom color={'textSecondary'}>
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={'center'} gutterBottom color={'textSecondary'}>
          Contact us
        </Typography>
      </Grid>
    </Grid>
  </div>
)

export default FooterEx
