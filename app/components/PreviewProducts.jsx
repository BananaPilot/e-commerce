"use client"

import React from 'react'
import Link from 'next/link'

function PreviewProducts({props}) {

  return (
    <>
      <div className='border rounded-xl w-80 p-3 bg-white drop-shadow-2xl hover:-translate-y-1 duration-300 2xl:w-96'>
        <Link href={`/productsPage/${props._id}`}>
        <img loading='lazy' draggable="false" src={props?.image}/>
        <div className='flex justify-between mt-3'>
          <h3 className='font-semibold text-base'>{props?.title}</h3>
          <div className='flex gap-3 mr-4'>
            <button className='bg-violet-700 hover:bg-violet-500 rounded-full' ><span className="text-white p-3 material-symbols-outlined">&#xe87d;</span></button>
            <button className='bg-black rounded-full hover:bg-zinc-900'><span className="text-white p-3 material-symbols-outlined">&#xe8cc;</span></button>
          </div>
        </div>
        <div>
          <p>{props?.price} €</p>
        </div>
        </Link>
      </div>
    </>
  )
}

export default PreviewProducts