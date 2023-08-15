"use client"

import CookieHelper from '@/cookieHelper'
import React,{useEffect, useState} from 'react'

export const metadata = {
  title: "Cart"
}

function Cart() {

  const [data, setData] = useState("")

  const getProducts = async () => {
    const response = await fetch(`/api/products/multipleProducts?ids=${CookieHelper.getCookie("cartItems")}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(data);

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Cart