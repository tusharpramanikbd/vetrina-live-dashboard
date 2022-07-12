import React from 'react'
import { Grid } from '@mui/material'
import VisitorsCard from '../Cards/VisitorsCard'
import OrdersCard from '../Cards/OrdersCard'
import MobileCard from '../Cards/MobileCard'
import ConfigureShopCard from '../Cards/ConfigureShopCard'
import TrustPilotCard from '../Cards/TrustPilotCard'
import InviteFriendCard from '../Cards/InviteFriendCard'

const CardSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingLeft: '40px',
        marginTop: '-80px',
        width: '100%',
      }}
    >
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <VisitorsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrdersCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <MobileCard />
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ConfigureShopCard />
          </Grid>
          <Grid item xs={12}>
            <TrustPilotCard />
          </Grid>
          <Grid item xs={12}>
            <InviteFriendCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardSection
