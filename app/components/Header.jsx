"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {

  const {data: session, status} = useSession()

  const alternative = () => {
    return <img src="https://www.svgrepo.com/show/164688/blank-user.svg"/>
  }

  return (

    <div className='fixed top-0 z-20 w-full bg-white'>
      <div className='flex p-3 bg-transparent'>
        <Link className='w-32 h-10' href={`/`}>
          <img className='cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"/>
        </Link>
        {
          status === "unauthenticated" || status === "loading"
          ? (
              <div className='flex absolute right-24'>
                <Link className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3' href={`/signin`}>Sign in</Link>
              </div>
            ) : (
                <div className='flex absolute right-24'>
                  <img onError={() => alternative()} className='w-10 rounded-full' src={session?.user.image} alt="" />
                  <Link className='text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3' href={`/signout`}>Sign out</Link>
                </div>
              )
        }
        <div className='flex absolute right-2'>
          <Link href={`/favourites`} className='bg-violet-700 rounded-full mx-1 hover:bg-violet-500' ><span className="text-white p-2 material-symbols-outlined">&#xe87d;</span>
          </Link>
          <Link href={`/cart`} className='bg-black rounded-full mx-1 hover:bg-zinc-900'><span className="text-white p-2 material-symbols-outlined">&#xe8cc;</span>
          </Link>
        </div>
      </div>
    </div>  
  )
}

export default Header