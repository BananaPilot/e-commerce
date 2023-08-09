"use client"

import React, { useEffect, useState } from 'react'

function ProductsPage() {

  const [data, setData] = useState("")

  let id;

  const getID = () => {
    let arr = location.href.split('/')
    id = arr[4]
  }

  const getDataProduct = async () => {
    const response = await fetch(`/api/products/${id}`)
    const data = await response.json()

    setData(data)
  } 

  useEffect(() => {
    getID()
    getDataProduct()
  }, [])


  return (
    <div>
    </div>
  )
}

export default ProductsPage