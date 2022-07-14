import React from 'react'
import { Grid } from '@mui/material'

import { rightColumnCards, leftColumnCards } from '../../data/CardList'

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
          {leftColumnCards.map(({ id, Card }) => (
            <Grid key={id} item xs={12} md={id === '5' ? false : 6}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{ paddingRight: '16px' }}>
        <Grid container spacing={2}>
          {rightColumnCards.map(({ id, Card }) => (
            <Grid key={id} item xs={12}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardSection
