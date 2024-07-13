import MainNavbarComponent from '@/Component/MainNavbar'
import TopBarComponent from '@/Component/TopBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className=''>
        <TopBarComponent/>
        <MainNavbarComponent/>
        <Outlet />
    </div>
  )
}

export default UserLayout