"use client"

import '@/app/styles/loginpage.css'
import React, { useState } from 'react'
import {signIn} from 'next-auth/react'


function SignInPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitCredentials = () => {
        signIn( 'credentials', {
            email,
            password,
            callbackUrl: "/"
        })
    }

    const submitGoogle = () => {
        signIn( "google", {
            callbackUrl: "/"
        })
    }

    const submitGitHub = () => {
        signIn( "github", {
            callbackUrl: "/"
        })
    }

  return (
    <>
        <div className='container'>
            <div className='header-section'>
                <h2>Login:</h2>
                <p>
                    By logging in you will have a better expirience in our site, you will be able of placing orders saving items to your favourites and adding items to your cart. 
                </p>
            </div>
            <div className='input-section'>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter you e-mail' autoComplete='none'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' autoComplete='none'/>
                <div className='signup-text'>don't have an account <a href="http://localhost:3000/signup">sign up!</a></div>
                <button onClick={() => {submitCredentials()}} className='signin-button'>Sign in!</button>
            </div>
            <div className='division-text'>or</div>
            <div className='division'></div>
            <button onClick={() => {submitGoogle()}}>Sign in with Google</button>
            <button onClick={() => {submitGitHub()}}>Sign in with GitHub</button>
        </div>
    </>
  )
}

export default SignInPage