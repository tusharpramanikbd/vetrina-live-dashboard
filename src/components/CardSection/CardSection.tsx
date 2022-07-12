import React from 'react'
import { Grid } from '@mui/material'
import VisitorsCard from '../Cards/VisitorsCard'
import OrdersCard from '../Cards/OrdersCard'

const CardSection = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        paddingLeft: '40px',
        marginTop: '-80px',
        width: '100%',
      }}
    >
      <Grid item xs={12} md={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrdersCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12}>
            <VisitorsCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{ paddingRight: '16px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12}>
            <VisitorsCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardSection
