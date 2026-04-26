import React from 'react'
import Header from '@/component/shared/Header'
import Navbar from '@/component/shared/Navbar'

const MainLayout = ({children}) => {
  return (
    <>

    <Header />
      <Navbar />
        
        {children}
    </>
  )
}

export default MainLayout
