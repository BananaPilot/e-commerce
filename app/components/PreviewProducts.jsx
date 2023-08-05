"use client"

import React, { useEffect, useState } from 'react'

function PreviewProducts({props}) {

  return (
    <>
      <div onClick={() => {
        location.replace(`/productsPage/${props._id}`)
      }} className='border rounded-xl w-96 p-3 bg-white drop-shadow-2xl'>
        <img draggable="false" src={props?.image}/>
        <div className='flex justify-between mt-3'>
          <h3 className='font-semibold text-base'>{props?.title}</h3>
          <div className='flex gap-6 mr-4'>
            <button className='bg-violet-700 hover:bg-violet-500 rounded-full' ><span className="text-white p-2 material-symbols-outlined">&#xe87d;</span></button>
            <button className='bg-black rounded-full hover:bg-zinc-900'><span className="text-white p-2 material-symbols-outlined">&#xe8cc;</span></button>
          </div>
        </div>
        <div>
          <p>{props?.price + " €"}</p>
        </div>
      </div>
    </>
  )
}

export default PreviewProducts