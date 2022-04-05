import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function Dashboard() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    <div>Dashboard</div>
    </ThemeProvider>
  )
}
