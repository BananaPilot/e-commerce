import React from 'react'
import { useSession } from 'next-auth/react'

function Header() {

  const {data: session, status} = useSession()

  return (
    <div className='flex'>
      <div className='flex justify-items-end'>
        <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"/>
      </div>
      <div>
        <button>Sign in</button>
        <button><span class="material-symbols-outlined">&#xe87d;</span></button>
        <button><span class="material-symbols-outlined">&#xe8cc;</span></button> 
      </div>
    </div>
  )
}

export default Header