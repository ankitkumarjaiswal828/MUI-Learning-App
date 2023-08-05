import React from 'react'
import { Grid } from '@mui/material'

export default function ResponsiveGrid() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4} sx={{ backgroundColor: "red" }}>
          Contant A
        </Grid>

        <Grid item xs={8} sx={{ backgroundColor: "yellow" }}>
          ConTant B{" "}
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          sx={{ backgroundColor: "green" }}
        >
          Contant c
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          sx={{ backgroundColor: "yellow" }}
        >
          Contant D
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={9}
          lg={3}
          xl={2}
          sx={{ backgroundColor: "red" }}
          spacing={2}
        >
          Contant E
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={9}
          xl={10}
          sx={{ backgroundColor: "pink" }}
          spacing={2}
        >
          Contant F
        </Grid>
      </Grid>
    </div>
  );
}
