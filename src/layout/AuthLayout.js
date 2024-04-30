import React from 'react'
import { Outlet } from 'react-router-dom'


const AuthLayout = () => {
  

  

  return (
    <div style={{ backgroundImage: "url(https://mrwallpaper.com/images/hd/download-soccer-wallpaper-uoku58wbg2e7n1cj.jpg)" }} className='bg-cover h-screen flex flex-col items-center'>
      <div className='text-white font-extrabold text-6xl m-20 font-pacifico'>WELCOME TO THE CLUB</div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
