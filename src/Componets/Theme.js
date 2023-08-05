import React from 'react'
import { createTheme,Box, Grid } from '@mui/material'

//with help of theming we can create custom theme of mui
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF3C33",
    },
  },
  typography:{
    button:{
        width:'300px',
    }  }
});

