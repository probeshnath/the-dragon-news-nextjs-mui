import LatestNews from '@/components/ui/LatestNews/LatestNews'
import Sidebar from '@/components/ui/Sidebar/Sidebar'
import { Grid } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <Sidebar />
      </Grid>

    </Grid>
  )
}

export default HomePage