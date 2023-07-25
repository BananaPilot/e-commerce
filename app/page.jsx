"use client"
import React from 'react'

function page() {
  return (
    <>
      <button onClick={ async () => {
        const response = await fetch('/api/products')
        const data = await response.json()
        console.log(data);
      }}>get products</button>
      <br />
      <button onClick={ async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        console.log(data);
      }}>get comments</button>
      <br />
      <button onClick={ async () => {
        const response = await fetch('/api/users')
        const data = await response.json()
        console.log(data);
      }}>get users</button>
      <br />
      <button onClick={async () => {
        const response = fetch('/api/users', {
          method:"POST",
          body: {
            "username" : "banana",
            "password" : "gesubello"
          },
          headers : {
            "Content-Type" : "application/json"
          }
        })
      }}>
        new user
      </button>
    </>
  )
}

export default page