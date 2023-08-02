"use client"

import React from 'react'
import { useSession } from 'next-auth/react'

function Header() {

  const {data: session, status} = useSession()

  console.log(session, status);

  const alternative = () => {
    return <img src="https://www.svgrepo.com/show/164688/blank-user.svg" alt="" />
  }

  if (status === "unauthenticated" || status === "loading") {
    return(
      <div className='flex justify-between p-3 bg-transparent'>
        <div className='w-32 p-2'>
          <img className='cursor-pointer' onClick={() => {location.replace('/')}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"/>
        </div>
        <div className='flex'>
          <button onClick={() => {
            location.replace('/signin')
          }} className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3'>Sign in</button>
          <button onClick={() => {
            location.replace('/favourites')
          }} className='mx-3'><span className="material-symbols-outlined">&#xe87d;</span></button>
          <button onClick={() => {
            location.replace('/cart')
          }} className='mx-3'><span className="material-symbols-outlined">&#xe8cc;</span></button> 
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-between p-3 bg-transparent'>
        <div className='w-32 p-2'>
          <img className='cursor-pointer' onClick={() => {location.replace('/')}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"/>
        </div>
        <div className='flex'>
          <img onError={() => alternative()} className='w-10 rounded-full' src={session?.user.image} alt="" />
          <button onClick={() => {
            location.replace('/api/auth/signout')
          }} className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3'>Sign out</button>
          <button onClick={() => {
            location.replace('/favourites')
          }} className='mx-3'><span className="material-symbols-outlined">&#xe87d;</span></button>
          <button onClick={() => {
            location.replace('/cart')
          }} className='mx-3'><span className="material-symbols-outlined">&#xe8cc;</span></button> 
        </div>
    </div>
  )
}

export default Header