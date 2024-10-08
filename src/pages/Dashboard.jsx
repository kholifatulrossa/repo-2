import React from 'react'
import Sidebar from './admin/Sidebar'
import Header from './admin/Header'
import Box from '@mui/joy/Box'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/joy/Typography'
import Clock from './components/Clock'

export const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100%', width: '100%', bgcolor: 'white' }}>
        <Sidebar showDashboardOnly={true} basePath="/users" />
        <Box sx={{ width: '100%', height: 'auto' }}>
          <Header />
          <Outlet/>
        </Box>
      </Box>
    </>
  )
}
