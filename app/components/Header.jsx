"use client"

import React from 'react'
import { useSession } from 'next-auth/react'

function Header() {

  const {data: session, status} = useSession()

  const alternative = () => {
    return <img src="https://www.svgrepo.com/show/164688/blank-user.svg" alt="" />
  }

  return (

    <div className='fixed top-0 z-20 w-full bg-white'>
      <div className='flex p-3 bg-transparent'>
        <div className='w-32 p-2'>
          <img className='cursor-pointer' onClick={() => {location.replace('/')}} src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"/>
        </div>
        {
          status === "unauthenticated" || status === "loading"
          ? (
              <div className='flex absolute right-0'>
                <button onClick={() => {
                  location.replace('/signin')
                }} className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3'>Sign in</button>
                <button onClick={() => {
                  location.replace('/favourites')
                }} className='bg-violet-700 hover:bg-violet-500 rounded-full mx-1'><span className="text-white p-2 material-symbols-outlined">&#xe87d;</span></button>
                <button onClick={() => {
                  location.replace('/cart')
                }} className='bg-black hover:bg-zinc-900 rounded-full mx-1'><span className="text-white p-2 material-symbols-outlined">&#xe8cc;</span></button> 
              </div>
            ) : (
                <div className='flex absolute right-0'>
                  <img onError={() => alternative()} className='w-10 rounded-full' src={session?.user.image} alt="" />
                  <button onClick={() => {
                    location.replace('/api/auth/signout')
                  }} className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3'>Sign out</button>
                  <button onClick={() => {
                    location.replace('/favourites')
                  }} className='bg-violet-700 hover:bg-violet-500 rounded-full mx-1'><span className="text-white p-2 material-symbols-outlined">&#xe87d;</span></button>
                  <button onClick={() => {
                    location.replace('/cart')
                  }} className='bg-black hover:bg-zinc-900 rounded-full mx-1'><span className="text-white p-2 material-symbols-outlined">&#xe8cc;</span></button> 
                </div>
              )
        }
      </div>
    </div>  
  )
}

export default Header