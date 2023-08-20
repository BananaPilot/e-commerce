"use client"

import React, { useEffect, useState } from 'react'
import CookieHelper from 'ez-cookie'

function ProductsPage(props) {

  const [data, setData] = useState("")

  const id = props.params.id

  const getDataProduct = async () => {
    const response = await fetch(`/api/products/${id}`)
    const data = await response.json()

    setData(data)
  } 

  const AddToCart = () => {
    CookieHelper.addToCookie("cartItems", id)
  }

  useEffect(() => {
    getDataProduct()
  }, [])

  return (
    <>
      <div className='mt-32 m-5 flex justify-evenly'>
        <div className='w-[600px] ml-10'>
          <img src={data.image}/>
        </div>
        <div className='mr-20'>
          <div className='flex flex-col gap-y-3'>
            <h2 className='mb-5 text-xl font-bold'>{data.title}</h2>
            <p>{data.gender}</p>
            <p className='text-right text-xl'>{data.price} €</p>
          </div>
          <div>
            <h3 className='font-semibold'>Sizes:</h3>
            <div className='grid grid-cols-2 mt-3 gap-3'>
              <button className='border w-40 h-10 hover:bg-gray-200'>38</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>39</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>40</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>41</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>42</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>43</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>44</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>45</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>46</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>47</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>48</button>
              <button className='border w-40 h-10 hover:bg-gray-200'>49</button>
            </div>
            <div className='flex gap-4 flex-col mt-6'>
              <button onClick={() => {
                AddToCart()
              }} className='text-white text-lg font-bold bg-violet-700 rounded-lg h-12 hover:bg-violet-500'>Add to Cart</button>
              <button className='text-white text-lg font-bold bg-black rounded-lg h-12 hover:bg-zinc-800'>Favourites</button>
            </div>
            <div className='mt-10'>
              <hr className='border-t-gray-400' />
              <div className='mt-10'>
                <h3 className='font-semibold'>Description:</h3>
                <p className='w-60 mt-5 text-lg'>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage