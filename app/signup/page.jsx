"use client"

import React, { useState } from 'react'

function SignupPage() {
  const [visible, setVisible] = useState("none")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkpw, setCheckpw] = useState("")

  const credentials = {name, surname, email, password}

  const newUser = async () =>{
    const response = await fetch('http://localhost:3000/api/users', {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-Type": "application/json"}
    })
    console.log(response);
  }

  const submit = (event) => {
    if (event.key === 'Enter'){
      if (password === checkpw) {
        newUser()
        setVisible("none")
        location.replace('/signin')
      }
      else{
        setVisible("flex")
        return
      }
    }
  }


  return (
    <>
    <div className='flex justify-center'>
      <div className='container'>
        <div className='flex justify-center'>
          <div style={{display: visible}} className='alert'>
            Please make sure that inserted passwords are the same
          </div>
        </div>
        <div>
          <div className='grid justify-center'>
            <input onKeyPress={submit} className='input' onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
            <input onKeyPress={submit} className='input' onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Enter your surname' />
            <input onKeyPress={submit} className='input' onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your e-mail' />
            <input onKeyPress={submit} className='input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password'/>
            <input onKeyPress={submit} className='input' onChange={(e) => setCheckpw(e.target.value)} type="password" placeholder='confirm your password' />
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='text-white bg-violet-700 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-violet-500'  onClick={() => {
            if (password === checkpw) {
              newUser()
              setVisible("none")
              location.replace('/signin')
            }
            else{
              setVisible("flex")
              return
            }
          }} > Sign up</button>
        </div>
        <div className='border-b border-gray-400 m-5'></div>
        <div className='flex justify-center'>
          <button onClick={() => {location.replace('/signin')}} className='text-white bg-green-600 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-green-500'>Log in</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignupPage