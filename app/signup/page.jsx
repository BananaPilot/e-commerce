"use client"

import React, { useState } from 'react'
import '@/app/styles/signupPage.css'

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



  return (
    <>
      <div className='container'>
        <div className='introduction'>
          <h2>Sing up:</h2>
          <p>By signing up in to our site we will just collect simple information about you, we won't share them with anyone and all your information will be crypted in our database.
          </p>
        </div>
        <div style={{display: visible}} className='alert'>
          please make sure that inserted passwords are the same
        </div>
        <div className='form'>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
          <input onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Enter your surname' />
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your e-mail' />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password'/>
          <input onChange={(e) => setCheckpw(e.target.value)} type="password" placeholder='confirm your password' />
        </div>
        <div className='signin-text'>Already have an account? <a href="http://localhost:3000/signin">sign in here</a></div>
        <button onClick={() => {
          if (password === checkpw) {
            newUser()
            setVisible("none")
            location.replace('/signin')
          }
          else{
            setVisible("flex")
            return
          }
        }} > Sign up!</button>
      </div>
    </>
  )
}

export default SignupPage