import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/webComponents/Header'
import Footer from '../components/webComponents/Footer'

const WebLayoute = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default WebLayoute