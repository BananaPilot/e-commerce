"use client"

import React, { useEffect, useState } from 'react'

function CarouselElement() {

  const [data, setData] = useState('')

  const getData = async () => {
    const respone = await fetch('/api/products')
    const data = await respone.json()

    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <div className='flex justify-center'>
      <div className='flex justify-center gap-10 w-5/6 h-[600px]'>
        <img src={data[5]?.imageURL}/>
        <img src={data[10]?.imageURL}/>
        <img src={data[1]?.imageURL}/>
        <img src={data[2]?.imageURL}/>
        <img src={data[3]?.imageURL}/>
        <img src={data[4]?.imageURL}/>
        <img src={data[6]?.imageURL}/>
        <img src={data[7]?.imageURL}/>
        <img src={data[8]?.imageURL}/>
        <img src={data[9]?.imageURL}/>
      </div>
    </div>
    </>
  )
}

export default CarouselElement