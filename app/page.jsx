"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import Header from './components/Header'


function page() {
  return (
    <>
      <SessionProvider>
        <Header/>
      </SessionProvider>      
    </>
  )
}

export default page