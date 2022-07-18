import React from 'react'
import { Grid } from '@mui/material'

import { rightColumnCards, leftColumnCards } from '../../data/CardList'

const generateStyles = () => {
  return {
    gridStyle: {
      paddingLeft: '40px',
      marginTop: '-60px',
      width: '100%',
    },
    gridPadding: { paddingRight: '16px' },
  }
}

const CardSection = () => {
  const classes = generateStyles()

  return (
    <Grid container spacing={2} sx={classes.gridStyle}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {leftColumnCards.map(({ id, Card }) => (
            <Grid key={id} item xs={12} md={id === '5' ? false : 6}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={classes.gridPadding}>
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
